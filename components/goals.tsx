import { CheckCircle, TrendingUp, Award, Globe } from "lucide-react"

export default function Goals() {
  const goals = [
    {
      icon: CheckCircle,
      title: "Industry Readiness",
      description:
        "Prepare participants with skills that directly align with current industry demands and future trends.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Provide pathways for continuous learning and career advancement in chosen fields.",
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Maintain high-quality training standards that exceed industry expectations.",
    },
    {
      icon: Globe,
      title: "Social Impact",
      description: "Develop professionals who contribute meaningfully to both industry and social sectors.",
    },
  ]

  return (
    <section id="goals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Goals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to achieving measurable outcomes that benefit our participants, partner organizations, and
            society as a whole.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                <goal.icon className="h-10 w-10 text-gray-700 group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
              <p className="text-gray-600 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers through our comprehensive skill
            development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
