import React from "react";
import ContactForm from "../components/ContactForm";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const branches = [
    {
      title: "Mumbai Branch",
      address:
        "425 Gemstar Commercial Complex, Ramchandra Lane Extn, Malad West, Mumbai 400064",
      phone: "+91 98677 29568",
      email: "info@receptivesolutions.co.in",
    },
    {
      title: "Ahmedabad Branch",
      address:
        "106, Dev Prime, Nr. Vodafone House, Makarba, Ahmedabad - 380051",
      phone: "+91 98677 29568",
      email: "info@receptivesolutions.co.in",
    },
    {
      title: "UAE (Dubai) Branch",
      address:
        "Suite No -201, Al Salemiyah Tower, Deria Riggat Al Buteen, Dubai, UAE",
      phone: "+971 562744455",
      email: "info@receptivegroup.com",
    },
    {
      title: "UK Branch",
      address: "PO Box 4385, Cardiff, CF14 8LH",
      phone: "+971 562744455",
      email: "info@receptivesolutions.co.in",
    },
  ];

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        {/* ✅ Title and Meta */}
        <title>Contact Receptive Solutions | Immigration & Visa Consultancy Mumbai</title>
        <meta
          name="description"
          content="Reach out to Receptive Solutions for immigration and overseas career assistance. Call or visit our Mumbai office today."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/contact" />

        {/* ✅ Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.receptivesolutions.co.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://www.receptivesolutions.co.in/contact"
              }
            ]
          })}
        </script>

        {/* ✅ ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://www.receptivesolutions.co.in/contact",
            "name": "Contact Receptive Solutions",
            "description":
              "Get in touch with Receptive Solutions for immigration, visa, and overseas job assistance. Visit or call our Mumbai office.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-77380-56424",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress":
                  "425, Gemstar Commercial Complex, Ramchandra Lane Extn, Kanchpada, Malad West",
                "addressLocality": "Mumbai",
                "postalCode": "400064",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
                "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
                "https://www.youtube.com/@receptivegroup",
                "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
              ]
            }
          })}
        </script>
      </Helmet>


      {/* ✅ PAGE CONTENT */}
      <div className="pt-16 md:pt-24 lg:pt-28 xl:pt-32">
        <div className="bg-[#0C3B34] py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white md:mb-4 tracking-tight">
                Our Global Presence
              </h2>
              <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
                Strategically located across key markets to serve you better
              </p>
            </div>

            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 ">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="group bg-[#D8C287] shadow-2xl rounded-2xl text-center transform hover:scale-100 transition-all duration-500 hover:shadow-emerald-500/20 border border-emerald-100/20"
                >
                  <div className="bg-white/20 backdrop-blur-5xl rounded-2xl w-full h-full p-4 md:p-8">
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#0C3B34] text-white p-4 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-emerald-500/30">
                        <Building2
                          size={32}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0c3b34] mb-6 transition-colors group-hover:text-emerald-900">
                      {branch.title}
                    </h3>

                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3 transition-transform group-hover:translate-x-1">
                        <MapPin size={20} className="text-[#0c3b34] mt-1" />
                        <p className="text-[#0c3b34]">{branch.address}</p>
                      </div>

                      <div className="flex items-center space-x-3 transition-transform group-hover:translate-x-1 delay-75">
                        <Phone size={18} className="text-[#0c3b34]" />
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-[#0c3b34] hover:text-emerald-900 font-medium"
                        >
                          {branch.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3 transition-transform group-hover:translate-x-1 delay-150">
                        <Mail size={18} className="text-[#0c3b34]" />
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-[#0c3b34] hover:text-emerald-900 break-all"
                        >
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default ContactPage;
