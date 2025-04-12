import { Quote } from "lucide-react"

const TestimonialCard = ({ quote, author, role, image, className = "" }) => {
  return (
    <div
      className={`bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500"></div>

      {/* Quote icon */}
      <Quote className="text-purple-500/30 w-12 h-12 absolute top-4 right-4" />

      {/* Content */}
      <div className="pt-6">
        <p className="text-gray-300 italic mb-6">{quote}</p>

        <div className="flex items-center">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
              <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
            </div>
          )}

          <div>
            <h4 className="font-bold text-white">{author}</h4>
            {role && <p className="text-sm text-gray-400">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
