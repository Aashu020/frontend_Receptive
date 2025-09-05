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
        theme: "colored",
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

      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
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
        theme: "colored",
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
    const baseClass = "w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50";
    const normalClass = "border-gray-200 focus:border-transparent focus:ring-[#D8C287] hover:border-gray-300";
    const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-400 bg-red-50";

    return `${baseClass} ${errors[fieldName] && touched[fieldName] ? errorClass : normalClass}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="container mx-auto px-2 md:px-4 py-16 -mt-8">
        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 border border-gray-100">
              <div className="mb-8">
                <h2 className="md:text-3xl text-xl font-bold mb-3" style={{ color: '#0C3B34' }}>
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm md:text-md">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClassName("name")} text-sm md:text-md`}
                      disabled={isLoading}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClassName("email")} text-sm md:text-md`}
                      disabled={isLoading}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Country & Mobile Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClassName("country")} text-sm md:text-md`}
                      disabled={isLoading}
                    >
                      <option value="">Select your country</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && touched.country && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+91 9876543210"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClassName("mobile")} text-sm md:text-md`}
                      disabled={isLoading}
                    />
                    {errors.mobile && touched.mobile && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Visa Type */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                    Visa Type *
                  </label>
                  <select
                    name="visa"
                    value={formData.visa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClassName("visa")} text-sm md:text-md`}
                    disabled={isLoading}
                  >
                    <option value="">What type of visa!</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Tourist Visa">Tourist/Visitor Visa</option>
                    <option value="Business Visa">Business Visa</option>
                    <option value="Immigration">Permanent Residence</option>
                    <option value="Family Visa">Family Visa</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.visa && touched.visa && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.visa}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#0C3B34' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your visa requirements, timeline, and any specific questions you have..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClassName("message")} resize-none text-sm md:text-md`}
                    disabled={isLoading}
                  />
                  <div className="flex justify-between items-start mt-2">
                    <div className="flex-1">
                      {errors.message && touched.message && (
                        <p className="text-red-500 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 ml-4">
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || Object.keys(errors).some((key) => errors[key])}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl bg-[#D8C287] text-[#0a2d27] hover:bg-[#0a2d27] hover:text-white"
                 
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center text-sm md:text-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Location Info & Map */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              {/* Location Tabs */}
              <div className="bg-white rounded-2xl shadow-lg p-2 mb-6 border border-gray-100">
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(locations).map((location) => (
                    <button
                      key={location}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                        selectedLocation === location
                          ? 'text-green shadow-lg transform scale-105'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                      style={{
                        backgroundColor: selectedLocation === location ? '#D8C287' : 'transparent'
                      }}
                      onClick={() => handleTabClick(location)}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <iframe
                  src={locations[selectedLocation].mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${selectedLocation} Location`}
                  className="w-full"
                ></iframe>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0C3B34' }}>
                    {selectedLocation} Office
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {locations[selectedLocation].address}
                  </p>
                  <a
                    href={locations[selectedLocation].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold hover:underline transition-colors"
                    style={{ color: '#D8C287' }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Contact Info Cards */}
              
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 10000 }}
      />
    </div>
  );
};

export default ContactForm;