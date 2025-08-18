import { Users, Target, Lightbulb, TrendingUp, Handshake, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Empowering Futures: About SKILLEM SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At SKILLEM SERVICES , we empower young professionals with practical knowledge and confidence,
            transforming them into industry-ready individuals for both corporate and community impact.
          </p>
        </div>

        {/* Adjusted grid to handle 6 cards, keeping it responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: Skill Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Skill Programs</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Structured modules covering essential technical, digital, and workplace skills for immediate job readiness.
            </p>
          </div>

          {/* Card 2: Industry Exposure */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Immersion</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Hands-on experience through internships, site visits, and live projects, applying learning in real settings.
            </p>
          </div>

          {/* Card 3: Social Sector Engagement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Opportunities to contribute to community development, NGO work, and social entrepreneurship initiatives.
            </p>
          </div>

          {/* Card 4: Mentorship & Career Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Mentorship</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Expert guidance on career paths, skill enhancement, resume building, and interview preparation for success.
            </p>
          </div>

          {/* Card 5: Partnerships & Collaboration */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <Handshake className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Collaborations with industry and academic leaders to align training and create diverse job linkages.
            </p>
          </div>

          {/* Card 6: Global Opportunities */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Opportunities</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Exposure to international programs, cross-cultural learning, and global job networks for wider career growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
