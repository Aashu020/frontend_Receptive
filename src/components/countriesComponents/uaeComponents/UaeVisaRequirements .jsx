import React from 'react';

const UaeVisaRequirements = () => {
  const documentsData = {
    title: "2. What Are the Documents You Need to Get a Residency Visa in the UAE?",
    description: "There is a number of documents you should submit while applying for a UAE Residency visa. You can check them below:",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    requirements: [
      "The UAE visa application form",
      "Your passport",
      "Two passport-size pictures",
      "Entry visa",
      "Proof of sponsor's legal residency",
      "Proof of financial statements",
      "A medical fitness test",
      "Health insurance approved by DHA",
      "Health insurance approved by DHA",
      "Birth/marriage certificates when applying for family visas"
    ],
    subRequirements: [
      "Copy of the work contract",
      "The work contract",
      "A copy of the firm's trade license",
      "Copy of the firm card",
      "Documents relevant to your travel purpose"
    ]
  };

  const processData = {
    title: "3. How Can You Get a Residency Visa in UAE?",
    description: "You can get the residency visa through a few steps, as it's an effortless process.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    steps: [
      "Firstly, your sponsor should apply for an entry permit in order to enter the country.",
      "Secondly, once it's issued and you're in the UAE, they should apply for your residency visa at the Federal Authority for Identity and Citizenship. (ICP)",
      "You should submit your documents and pay the fee, then your application will be processed.",
      "If your application is approved, they will affix the residency to your passport."
    ],
    processInfo: "This process can be done online or offline as the ICP offers both; here are the available options:",
    options: [
      "ICP official website",
      "ICP mobile app"
    ],
    dependentTitle: "Dependent Visa Required Documents:",
    dependentDocs: [
      "Sponsor's passport, Visa, Emirates ID",
      "Sponsors salary Certificate",
      "Sponsors Residential Documents- tenancy contract or title deed and recent Dewa bill",
      "Passport of the dependents and their photos on a white background",
      "For spouse-marriage certificate(fully attested with Legal Arabic Translation)"
    ]
  };

  const RequirementCard = ({ data, isReversed = false }) => (
    <div className="mb-12 lg:mb-16">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-12 items-start`}>
        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
            {data.title}
          </h2>
          
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            {data.description}
          </p>

          {/* Main Requirements */}
          {data.requirements && (
            <ul className="space-y-2 mt-4">
              {data.requirements.map((item, index) => (
                <li key={index} className="flex items-start text-sm lg:text-base text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Sub Requirements */}
          {data.subRequirements && (
            <ul className="space-y-2 mt-4 ml-6">
              {data.subRequirements.map((item, index) => (
                <li key={index} className="flex items-start text-sm lg:text-base text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Steps */}
          {data.steps && (
            <ul className="space-y-3 mt-4">
              {data.steps.map((step, index) => (
                <li key={index} className="flex items-start text-sm lg:text-base text-gray-700">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Process Info */}
          {data.processInfo && (
            <>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mt-6">
                {data.processInfo}
              </p>
              <ul className="space-y-2 mt-3 ml-6">
                {data.options.map((option, index) => (
                  <li key={index} className="flex items-start text-sm lg:text-base text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Dependent Documents */}
          {data.dependentTitle && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {data.dependentTitle}
              </h3>
              <ul className="space-y-2">
                {data.dependentDocs.map((doc, index) => (
                  <li key={index} className="flex items-start text-sm lg:text-base text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={data.image} 
              alt="Visa requirements illustration"
              className="w-full h-48 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <RequirementCard data={documentsData} />
      <RequirementCard data={processData} isReversed={true} />
    </div>
  );
};

export default UaeVisaRequirements;