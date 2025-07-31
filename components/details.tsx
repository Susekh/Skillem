import { Code, Briefcase, Users2, Rocket } from "lucide-react"

export default function Details() {
  const programs = [
    {
      title: "Technical Skills Development",
      description: "Comprehensive training in cutting-edge technologies and programming languages",
      features: ["Full-stack development", "Data science & AI", "Cloud computing", "Mobile development"],
      color: "bg-blue-500",
    },
    {
      title: "Professional Skills Enhancement",
      description: "Essential soft skills and business acumen for career success",
      features: ["Leadership training", "Communication skills", "Project management", "Team collaboration"],
      color: "bg-green-500",
    },
    {
      title: "Industry Partnerships",
      description: "Direct connections with leading companies and organizations",
      features: ["Internship programs", "Job placement", "Mentorship", "Networking events"],
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Details</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures participants receive well-rounded training that prepares them for success
            in today's competitive landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                {index === 0 && <Code className="h-8 w-8 text-white" />}
                {index === 1 && <Briefcase className="h-8 w-8 text-white" />}
                {index === 2 && <Users2 className="h-8 w-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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
                    Our intensive programs are designed to fast-track your skill development without compromising on
                    quality.
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
                    Learn from industry veterans who bring real-world experience and insights to your learning journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
                  <p className="text-gray-600">
                    From resume building to interview preparation, we support you throughout your career transition.
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
