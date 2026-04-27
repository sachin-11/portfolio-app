import { useState, useEffect, useRef } from 'react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  const testimonials = [
    {
      name: "Project Manager",
      role: "Moon Technolabs",
      text: "Sachin's ability to architect complex AI systems while maintaining clean, scalable code is exceptional. His work on the AI Resume Coach platform reduced our AI costs by 50% while improving response quality.",
      rating: 5,
    },
    {
      name: "Tech Lead",
      role: "ManekTech",
      text: "One of the most reliable backend developers I've worked with. Sachin delivered the Cellcast SMS platform handling millions of messages with zero downtime. His Stripe integration work was flawless.",
      rating: 5,
    },
    {
      name: "Product Owner",
      role: "Seekrz App",
      text: "Sachin single-handedly built our entire backend architecture. The trade offer system with 4 payment gateways running in production without issues speaks volumes about his engineering skills.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 border border-teal-500/20 shadow-xl">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-teal-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-lg">{t.name}</p>
                      <p className="text-teal-400 text-sm">{t.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-8 h-3 bg-teal-400'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
