// utils/detectBrowser.js
const detectBrowser = () => {
  const ua = navigator.userAgent;
  const vendor = navigator.vendor || "";

  if (/Brave/i.test(ua) || (navigator.brave && navigator.brave.isBrave)) return "Brave";
  if (/Vivaldi/i.test(ua)) return "Vivaldi";
  if (/OPR|Opera/i.test(ua)) return "Opera";
  if (/Edg/i.test(ua)) return "Microsoft Edge";
  if (/SamsungBrowser/i.test(ua)) return "Samsung Internet";
  if (/Chrome/i.test(ua) && /Google Inc/.test(vendor)) return "Google Chrome";
  if (/Firefox/i.test(ua)) return "Mozilla Firefox";
  if (/Safari/i.test(ua) && !/Chrome|Chromium|Edg|OPR/i.test(ua)) return "Safari";
  if (/MSIE|Trident/i.test(ua)) return "Internet Explorer";
  if (/BingPreview/i.test(ua)) return "Bing WebView";

  return "Unknown";
};

export default detectBrowser;
