import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, MapPin, Clock, Award, TrendingUp, Star, Target } from 'lucide-react';
import experience from "../../assets/HomepageImages/experience.avif"

function Intro() {
  const [yearsExp, setYearsExp] = useState(0);
  const [socialFollowers, setSocialFollowers] = useState(0);
  const [nationalities, setNationalities] = useState(0);
  const [countries, setCountries] = useState(0);
  
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView1) {
      animateCounter(12, setYearsExp, 2000);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      animateCounter(50, setSocialFollowers, 2500);
      animateCounter(32, setNationalities, 2200);
      animateCounter(20, setCountries, 1800);
    }
  }, [inView2]);

  const animateCounter = (target, setter, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.ceil(start));
      }
    }, 16);
  };

  const stats = [
    {
      icon: Users,
      value: `${socialFollowers}K+`,
      label: "Happy Clients",
      iconColor: "text-blue-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-400/10",
      valueColor: "from-blue-500 to-cyan-400"
    },
    {
      icon: Globe,
      value: `${nationalities}+`,
      label: "Nationalities Served",
      iconColor: "text-emerald-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-400/10",
      valueColor: "from-emerald-500 to-teal-400"
    },
    {
      icon: MapPin,
      value: `${countries}+`,
      label: "Countries Covered",
      iconColor: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-400/10",
      valueColor: "from-purple-500 to-pink-400"
    },
    {
      icon: Clock,
      value: `${yearsExp}+`,
      label: "Years Experience",
      iconColor: "text-orange-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-yellow-400/10",
      valueColor: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#D8C287]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0C3B34]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#D8C287]/5 to-[#0C3B34]/5 rounded-full blur-2xl"></div>
      </div>

      {/* Upper Section */}
      <div ref={ref1} className="relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D8C287]/20 to-[#0C3B34]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={experience}
                  alt="RECEPTIVE GROUP OF COMPANIES" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C3B34]/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0C3B34] mb-1">{yearsExp}+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D8C287]/10 border border-[#D8C287]/20">
                  <Award className="w-4 h-4 text-[#D8C287] mr-2" />
                  <span className="text-sm font-medium text-[#0C3B34]">Premier HR & Immigration Consultancy</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#0C3B34] leading-tight">
                  Trusted Excellence in 
                  <span className="block text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text">
                    Global Immigration
                  </span>
                </h2>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p className="text-xl leading-relaxed">
                  RECEPTIVE GROUP OF COMPANIES stands as a Premier HR and Immigration consultancy, 
                  delivering exceptional services with over <span className="font-semibold text-[#0C3B34]">{yearsExp}+ years</span> of specialized industry experience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#D8C287] mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Expert visa consultations and personalized guidance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#D8C287] mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Comprehensive application assistance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#D8C287] mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Professional document preparation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#D8C287] mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Proven track record of success</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="px-8 py-4 bg-[#D8C287] text-[#0a2d27] hover:bg-[#0a2d27] hover:text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Get Consultation
                </button>
                <button className="px-8 py-4 bg-[#D8C287] text-[#0a2d27] hover:bg-[#0a2d27] hover:text-white rounded-xl font-medium hover:bg-[#0C3B34] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={ref2} className="relative py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0C3B34]/10 border border-[#0C3B34]/20 mb-6">
              <TrendingUp className="w-4 h-4 text-[#0C3B34] mr-2" />
              <span className="text-sm font-medium text-[#0C3B34]">Our Impact</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0C3B34] mb-4">
              Success Measured in
              <span className="block text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text">
                Real Results
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our reputation is built on a foundation of proven results and satisfied clients across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg"></div>
                  <div className="relative p-8 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                    
                    {/* Value */}
                    <div className="text-4xl md:text-5xl font-bold mb-3">
                      <span className={`bg-gradient-to-r ${stat.valueColor} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </div>
                    
                    {/* Label */}
                    <p className="text-gray-600 font-medium text-lg">
                      {stat.label}
                    </p>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-white/50 to-transparent"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;