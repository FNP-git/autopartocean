import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [carData, setCarData] = useState({}); // Stores { Make: [models] }
  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const [formData, setFormData] = useState({
    leadLabel: "AUTOPARTOCEAN", // Hidden field value
    fullName: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    part: "",
    vin: "", // No validation for this now
    email: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  // 1️⃣ Fetch make/model data from public/carData.json
  useEffect(() => {
    fetch("/carData.json")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      })
      .catch((err) => console.error("Error fetching car data:", err));
  }, []);

  // 2️⃣ Generate years from 1950 to the current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 1950; y <= currentYear; y++) {
    years.push(y);
  }

  // 3️⃣ Handle input changes (same as before, but we skip for Make/Model dropdown logic)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict invalid characters dynamically
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return; // Only letters & spaces
    if (name === "phone" && /[^0-9]/.test(value)) return;         // Only numbers
    if (name === "zip" && /[^0-9]/.test(value)) return;           // Only numbers

    setFormData({ ...formData, [name]: value });
  };

  // 4️⃣ Filter logic for Make & Model
  const allMakes = Object.keys(carData).sort();
  const filteredMakes = allMakes.filter((m) =>
    m.toLowerCase().includes(formData.make.toLowerCase())
  );

  // Only fetch models for the selected make
  const modelsForMake = carData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase())
  );

  // 5️⃣ Handle selection from dropdown
  const handleSelectMake = (selectedMake) => {
    setFormData({ ...formData, make: selectedMake, model: "" });
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (selectedModel) => {
    setFormData({ ...formData, model: selectedModel });
    setShowModelDropdown(false);
  };

  // 6️⃣ Submission logic (unchanged)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessages = {};
        let alertMessage = "Please fix the following errors:\n\n";

        result.errors.forEach((error) => {
          errorMessages[error.param] = error.msg;
          alertMessage += `- ${error.msg}\n`;
        });

        setErrors(errorMessages);
        alert(alertMessage); // Show popup with error messages
      } else {
        alert("Form submitted successfully!");
        setFormData({
          leadLabel: "AUTOPARTOCEAN LEAD",
          fullName: "",
          phone: "",
          year: "",
          make: "",
          model: "",
          part: "",
          vin: "",
          email: "",
          zip: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {/* Hidden field to send the fixed lead label */}
        <input type="hidden" name="leadLabel" value="AUTOPARTOCEAN LEAD" />

        <div className="input-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="input-group">
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter 10-digit number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="row">
          <div className="input-group">
            <label>Year *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Make: Typeable Dropdown */}
          <div className="input-group">
            <label>Make *</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                name="make"
                placeholder="Select or type make"
                value={formData.make}
                onChange={(e) => {
                  handleChange(e);
                  setShowMakeDropdown(true); // Show dropdown when typing
                }}
                onFocus={() => setShowMakeDropdown(true)}
                onBlur={() => {
                  // Delay hiding to allow click selection
                  setTimeout(() => setShowMakeDropdown(false), 200);
                }}
                required
              />
              {/* Make Dropdown */}
              {showMakeDropdown && filteredMakes.length > 0 && (
                <div
                  className="dropdown"
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    width: "100%",
                    maxHeight: "50vh",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    background: "#fff",
                    color: "#000",
                    zIndex: 9999,
                  }}
                >
                  {filteredMakes.map((mk) => (
                    <div
                      key={mk}
                      onMouseDown={() => handleSelectMake(mk)}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
                      onMouseLeave={(e) => (e.target.style.background = "#fff")}
                    >
                      {mk}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Model: Typeable Dropdown (only if a make is selected) */}
          <div className="input-group">
            <label>Model *</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                name="model"
                placeholder="Enter or select model"
                value={formData.model}
                onChange={(e) => {
                  handleChange(e);
                  if (formData.make) {
                    setShowModelDropdown(true);
                  }
                }}
                onFocus={() => {
                  if (formData.make) setShowModelDropdown(true);
                }}
                onBlur={() => {
                  setTimeout(() => setShowModelDropdown(false), 200);
                }}
                disabled={!formData.make} // Only enabled if Make is selected
                required
              />
              {/* Model Dropdown */}
              {showModelDropdown && filteredModels.length > 0 && (
                <div
                  className="dropdown"
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    width: "100%",
                    maxHeight: "50vh",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    background: "#fff",
                    color: "#000",
                    zIndex: 9999,
                  }}
                >
                  {filteredModels.map((mod) => (
                    <div
                      key={mod}
                      onMouseDown={() => handleSelectModel(mod)}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
                      onMouseLeave={(e) => (e.target.style.background = "#fff")}
                    >
                      {mod}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Which Part *</label>
            <select
              name="part"
              value={formData.part}
              onChange={handleChange}
              required
            >
              <option value="">Choose one</option>
              <option value="Engine">Engine</option>
              <option value="Transmission">Transmission</option>
            </select>
          </div>
          <div className="input-group">
            <label>VIN Number (optional)</label>
            <input
              type="text"
              name="vin"
              placeholder="17 Digit Alpha Numeric"
              value={formData.vin}
              onChange={handleChange}
              maxLength="17"
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>Zip Code *</label>
            <input
              type="text"
              name="zip"
              placeholder="Enter zip code"
              value={formData.zip}
              onChange={handleChange}
              maxLength="5"
              required
            />
            {errors.zip && <p className="error">{errors.zip}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
