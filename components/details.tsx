import { Code, Briefcase, Users2, Rocket, Award, Network } from "lucide-react" // Added Award and Network icons

export default function Details() {
  const programs = [
    {
      title: "Core Skill Development",
      description: "Structured training modules covering essential skills for immediate job readiness.",
      features: [
        "Communication & Digital Tools",
        "Workplace Behavior",
        "Entrepreneurship Fundamentals",
        "Domain-Specific Expertise"
      ],
      icon: <Code className="h-8 w-8 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Industry Immersion & Internships",
      description: "Gain hands-on experience through real-world projects and direct industry connections.",
      features: [
        "Live Projects & Site Visits",
        "Corporate Internships",
        "Practical Application of Skills",
        "Understanding Workplace Functions"
      ],
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Social Sector Engagement",
      description: "Prepare to contribute meaningfully to community development and social change initiatives.",
      features: [
        "Community Development",
        "NGO Work & Public Policy",
        "Social Entrepreneurship",
        "Impact-Driven Career Paths"
      ],
      icon: <Users2 className="h-8 w-8 text-white" />,
      color: "bg-purple-500",
    },
    { // New program card based on Mentorship & Career Support
      title: "Mentorship & Career Support",
      description: "Personalized guidance and extensive support to ensure your professional success.",
      features: [
        "Expert Mentorship",
        "Resume & Interview Preparation",
        "Personal Branding Workshops",
        "Job Placement Assistance"
      ],
      icon: <Award className="h-8 w-8 text-white" />, // Using Award icon for career success
      color: "bg-red-500", // New color for distinction
    },
    { // New program card based on Partnership & Collaboration
      title: "Strategic Partnerships",
      description: "Leverage our network of educational, corporate, and development organizations.",
      features: [
        "Industry-Aligned Curriculum",
        "Job Linkages & Opportunities",
        "Diverse Growth Paths",
        "Continuous Learning Resources"
      ],
      icon: <Network className="h-8 w-8 text-white" />, // Using Network icon for collaborations
      color: "bg-yellow-500", // New color for distinction
    },
  ];

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Programs & Pathways</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SKILLEM&#39;s comprehensive approach ensures participants receive well-rounded training and support,
            preparing them for success in today&#39;s dynamic professional landscape.
          </p>
        </div>

        {/* Changed grid layout to display 3 or 2 columns responsively for 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                {program.icon} {/* Using the icon property directly */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{program.description}</p> {/* flex-grow to unify card height */}
              <ul className="space-y-3 mt-auto"> {/* Push features to the bottom */}
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SKILLEM?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Rocket className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accelerated Learning</h4>
                  <p className="text-gray-600">
                    Our intensive programs are designed to fast-track your skill development without compromising on quality or depth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users2 className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h4>
                  <p className="text-gray-600">
                    Learn directly from industry veterans who bring invaluable real-world experience and insights to your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Holistic Career Support</h4>
                  <p className="text-gray-600">
                    From initial skill enhancement to resume building, interview preparation, and job placement, we support every step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Program Statistics</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
                <div className="text-gray-300">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-gray-300">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                <div className="text-gray-300">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">4.9</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}