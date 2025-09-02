import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser"; // Add EmailJS import

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    visa: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation rules (unchanged)
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = "Name can only contain letters and spaces";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "country":
        if (!value) {
          error = "Please select a country";
        }
        break;
      case "mobile":
        if (!value.trim()) {
          error = "Mobile number is required";
        } else if (!/^\+?[\d\s\-\(\)]{10,15}$/.test(value.trim())) {
          error = "Please enter a valid mobile number (10-15 digits)";
        }
        break;
      case "visa":
        if (!value) {
          error = "Please select a visa type";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.trim().length > 1000) {
          error = "Message cannot exceed 1000 characters";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix all errors before submitting", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Verify EmailJS configuration
      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      // Send email using EmailJS
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);

      // Log response for debugging
      console.log("EmailJS response:", response);

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        country: "",
        mobile: "",
        visa: "",
        message: "",
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(`Failed to send message: ${error.message || "Please try again."}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Map URLs and addresses for each location
  const locations = {
    Mumbai: {
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1290462781594!2d72.8363720752532!3d19.189565182038486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ef445974db%3A0x3e0169978b8d757a!2sGemstar%20Commercial%20Complex%2C%20Ramchandra%20Ln%2C%20Malad%2C%20Kanchpada%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1756790414013!5m2!1sen!2sin",
      address: "425 Gemstar Commercial Complex, Ramchandra Lane Extn, Kanchpada, Malad West, Mumbai, Maharashtra 400064",
      link: "https://www.google.com/maps/search/?api=1&query=425+Gemstar+Commercial+Complex+Ramchandra+Lane+Extn+Kanchpada+Malad+West+Mumbai+400064",
    },
    UAE: {
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.675093604228!2d55.29714157510279!3d25.26546397767896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434e8b7b6b1f%3A0xafe4e3b1b1e1e1e1!2sAl%20Salemiyah%20Tower%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1698765432109!5m2!1sen!2sae",
      address: "Suite No -201, Al Salemiyah Tower, Deira Riggat Al Buteen, Dubai, UAE",
      link: "https://www.google.com/maps/search/?api=1&query=Suite+No+201+Al+Salemiyah+Tower+Deira+Riggat+Al+Buteen+Dubai+UAE",
    },
    Ahmedabad: {
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.676689879697!2d72.50114197512764!3d23.03764831694664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e5b7bfffff%3A0x5e9b1b1b1b1b1b1b!2sDev%20Prime%2C%20Corporate%20Road%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1698765543210!5m2!1sen!2sin",
      address: "106, Dev Prime, Nr. Vodafone House, Corporate Road, Makarba, Ahmedabad, Gujarat 380051",
      link: "https://www.google.com/maps/search/?api=1&query=106+Dev+Prime+Nr+Vodafone+House+Corporate+Road+Makarba+Ahmedabad+380051",
    },
  };

  // Handle tab click
  const handleTabClick = (location) => {
    setSelectedLocation(location);
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full p-3 rounded-lg backdrop-blur-sm border transition-all duration-200";
    const normalClass = "bg-gray-700/80 border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent";
    const errorClass = "bg-red-900/20 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent";

    return `${baseClass} ${errors[fieldName] && touched[fieldName] ? errorClass : normalClass}`;
  };

  // Rest of the JSX remains unchanged
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C3B34] via-[#0C3B34]/80 to-[#0C3B34] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#D8C287] to-white bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-[#D8C287] text-lg">
            Ready to start your visa journey? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#0C3B34]/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-[#D8C287]">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Send us a Message</h2>

            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("name")}
                  disabled={isLoading}
                />
                {errors.name && touched.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("email")}
                  disabled={isLoading}
                />
                {errors.email && touched.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("country")}
                  disabled={isLoading}
                >
                  <option value="">Select Country *</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
                {errors.country && touched.country && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.country}
                  </p>
                )}
              </div>

              {/* Mobile Field */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number *"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("mobile")}
                  disabled={isLoading}
                />
                {errors.mobile && touched.mobile && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Visa Type Field */}
              <div>
                <select
                  name="visa"
                  value={formData.visa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName("visa")}
                  disabled={isLoading}
                >
                  <option value="">Select Visa Type *</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="Work Visa">Work Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Immigration">Immigration</option>
                  <option value="Family Visa">Family Visa</option>
                  <option value="Other">Other</option>
                </select>
                {errors.visa && touched.visa && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.visa}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message * (min 10 characters)"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClassName("message")} resize-none`}
                  disabled={isLoading}
                />
                <div className="flex justify-between items-start mt-1">
                  <div className="flex-1">
                    {errors.message && touched.message && (
                      <p className="text-red-400 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-[#D8C287] ml-2">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || Object.keys(errors).some((key) => errors[key])}
                className="w-full mt-6 bg-gradient-to-r from-[#D8C287] to-white hover:from-[#D8C287]/80 hover:to-white/80 disabled:from-gray-500 disabled:to-gray-600 text-[#0C3B34] font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0C3B34]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="bg-[#0C3B34] flex justify-around text-white font-semibold p-4 rounded-2xl shadow-2xl border border-[#D8C287]">
              {Object.keys(locations).map((location) => (
                <div
                  key={location}
                  className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                    selectedLocation === location
                      ? "bg-[#D8C287] text-[#0C3B34]"
                      : "hover:text-white/80"
                  }`}
                  onClick={() => handleTabClick(location)}
                >
                  {location}
                </div>
              ))}
            </div>

            {/* Google Map Iframe and Address */}
            <div className="bg-[#0C3B34]/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-[#D8C287]">
              <iframe
                src={locations[selectedLocation].mapUrl}
                width="100%"
                height="570"
                style={{ border: 0, borderRadius: "12px", position: "relative", zIndex: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${selectedLocation} Location`}
                onError={() => {
                  toast.error("Failed to load map. Please try again later.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                  });
                }}
              ></iframe>
              <div className="mt-4 text-center">
                <p className="text-[#D8C287] text-sm mb-2">{locations[selectedLocation].address}</p>
                <a
                  href={locations[selectedLocation].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#D8C287] hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ zIndex: 10000 }} />
    </div>
  );
};

export default ContactForm;