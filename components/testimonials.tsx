import { Star, Quote, UserRound } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Developer",
      content:
        "SKILLEM SERVICES transformed my career completely. The hands-on training and mentorship helped me land my dream job in just 6 months.",
      rating: 5,
    },
    {
      name: "Meera Nair",
      role: "Data Analyst",
      content:
        "The program's focus on real-world applications made all the difference. I felt confident and prepared for industry challenges.",
      rating: 5,
    },
    {
      name: "Rohan Gupta",
      role: "Project Manager",
      content:
        "Not only did I gain technical skills, but the soft skills training helped me become a better leader and team player.",
      rating: 5,
    },
    {
      name: "Ananya Iyer",
      role: "UX Designer",
      content:
        "The industry connections and networking opportunities opened doors I never thought possible. Highly recommend SKILLEM SERVICES!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Graduates Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don’t just take our word for it. Hear directly from learners who
            successfully transformed their careers with SKILLEM SERVICES.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-red-400 mb-4" />

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* User Info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <UserRound className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 rounded-2xl p-8 inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your career and become part of our growing
              community of successful professionals?
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
