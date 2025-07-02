import React, { useState, useEffect } from "react";
import "./Form.css";
import detectBrowser from '../utils/detectBrowser'; // adjust path as needed

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
    // remarks:"",
    browser: "",
  });

  const [errors, setErrors] = useState({});
  const [trackingData, setTrackingData] = useState({});

  // Capture ad tracking parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if we already have tracking data stored
    const existingTracking = sessionStorage.getItem('adTrackingData');
    let tracking;

    // If current page has UTM parameters, use them (fresh ad click)
    if (urlParams.get('utm_source')) {
      tracking = {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium') || 'none',
        utm_campaign: urlParams.get('utm_campaign') || 'none',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_id: urlParams.get('utm_id') || '',
        gclid: urlParams.get('gclid') || '',
        msclkid: urlParams.get('msclkid') || '',
        fbclid: urlParams.get('fbclid') || '',
        referrer: document.referrer || 'direct',
        landing_page: window.location.href,
        timestamp: new Date().toISOString()
      };
      // Store new tracking data
      sessionStorage.setItem('adTrackingData', JSON.stringify(tracking));
    } 
    // If no UTM on current page but we have stored data, use stored data
    else if (existingTracking) {
      tracking = JSON.parse(existingTracking);
      // Update current page info but keep original tracking
      tracking.current_page = window.location.href;
    }
    // If no UTM and no stored data, check referrer
    else {
      tracking = {
        utm_source: 'direct',
        utm_medium: 'none',
        utm_campaign: 'none',
        utm_term: '',
        utm_content: '',
        utm_id: '',
        gclid: '',
        msclkid: '',
        fbclid: '',
        referrer: document.referrer || 'direct',
        landing_page: window.location.href,
        timestamp: new Date().toISOString()
      };

      // Check referrer as fallback
      if (document.referrer) {
        try {
          const referrerUrl = new URL(document.referrer);
          const referrerParams = new URLSearchParams(referrerUrl.search);
          
          if (referrerParams.get('utm_source')) {
            tracking.utm_source = referrerParams.get('utm_source');
            tracking.utm_medium = referrerParams.get('utm_medium') || 'none';
            tracking.utm_campaign = referrerParams.get('utm_campaign') || 'none';
            tracking.utm_term = referrerParams.get('utm_term') || '';
            tracking.utm_content = referrerParams.get('utm_content') || '';
            tracking.utm_id = referrerParams.get('utm_id') || '';
            tracking.gclid = referrerParams.get('gclid') || '';
            tracking.msclkid = referrerParams.get('msclkid') || '';
            tracking.fbclid = referrerParams.get('fbclid') || '';
          }
        } catch (e) {
          console.log('Could not parse referrer URL');
        }
      }
    }
    
    setTrackingData(tracking);
    localStorage.setItem('adTrackingData', JSON.stringify(tracking));
  }, []);

  // Fetch make/model data from public/carData.json
  useEffect(() => {
    fetch("/carData.json")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      })
      .catch((err) => console.error("Error fetching car data:", err));
  }, []);

  // Browser detection
  useEffect(() => {
    const browser = detectBrowser();
    setFormData((prevData) => ({ ...prevData, browser }));
  }, []);

  // Generate years from 1950 to the current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 1950; y <= currentYear; y++) {
    years.push(y);
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict invalid characters dynamically
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return; // Only letters & spaces
    if (name === "phone" && /[^0-9]/.test(value)) return;         // Only numbers
    if (name === "zip" && /[^0-9]/.test(value)) return;           // Only numbers

    setFormData({ ...formData, [name]: value });
  };

  // Filter logic for Make & Model
  const allMakes = Object.keys(carData).sort();
  const filteredMakes = allMakes.filter((m) =>
    m.toLowerCase().includes(formData.make.toLowerCase())
  );

  // Only fetch models for the selected make
  const modelsForMake = carData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) =>
    mod.toLowerCase().includes(formData.model.toLowerCase())
  );

  // Handle selection from dropdown
  const handleSelectMake = (selectedMake) => {
    setFormData({ ...formData, make: selectedMake, model: "" });
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (selectedModel) => {
    setFormData({ ...formData, model: selectedModel });
    setShowModelDropdown(false);
  };

  // Generate unique lead ID
  const generateLeadId = () => {
    return 'LEAD_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  // Submission logic with tracking data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const storedTracking = localStorage.getItem('adTrackingData');
      const currentTracking = storedTracking ? JSON.parse(storedTracking) : trackingData;
      
      const submissionData = {
        ...formData,
        tracking: currentTracking,
        leadId: generateLeadId(),
        submissionTime: new Date().toISOString()
      };

      const response = await fetch("/api/form/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
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
        alert(alertMessage);
      } else {
        alert("Form submitted successfully!");
        
        if (typeof uetq !== "undefined") {
          uetq.push('event', '', {
            'event_category': 'Lead',
            'event_action': 'Form Submission',
            'event_label': 'Engine Inquiry'
          });
        }

        setFormData({
          leadLabel: "AUTOPARTOCEAN",
          fullName: "",
          phone: "",
          year: "",
          make: "",
          model: "",
          part: "",
          vin: "",
          email: "",
          zip: "",
          browser: formData.browser,
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
        <input type="hidden" name="leadLabel" value="AUTOPARTOCEAN" />
        <input type="hidden" name="browser" value={formData.browser} />

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
                  setShowMakeDropdown(true);
                }}
                onFocus={() => setShowMakeDropdown(true)}
                onBlur={() => {
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

          {/* Model: Typeable Dropdown */}
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
                disabled={!formData.make}
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
            <label>Choose Your Part *</label>
            <select
              name="part"
              value={formData.part}
              onChange={handleChange}
              required
            >
              <option value="">Start Typing</option>
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
          <span className="submit-text">Submit</span>
        </button>

      </form>
    </div>
  );
};

export default Form;