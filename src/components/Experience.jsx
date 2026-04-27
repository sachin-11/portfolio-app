import { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  const experiences = [
    {
      company: "Moon Technolabs",
      location: "Ahmedabad",
      position: "Senior Full Stack & AI Developer (GenAI + System Design)",
      period: "07/2023 - Present",
      projects: [
        {
          name: "AI Resume Coach & AI Interview Agent — GenAI SaaS Platform",
          achievements: [
            "Architected AI Resume Coach — production SaaS on AWS Amplify; multi-tenant PostgreSQL schema, RBAC, Stripe billing (Free/Pro/Enterprise), webhook integrations, and GDPR compliance",
            "Implemented RAG pipeline: resume text chunked, embedded via OpenAI text-embedding-3-small, stored in Pinecone vector DB — enabling context-aware personalized interview questions",
            "Applied GenAI across 6 features: interview question generation, real-time follow-ups, feedback scoring, ATS resume matching, STT spelling correction, and Text-to-SQL natural language DB queries",
            "Integrated OpenAI GPT-4o-mini (primary) + Groq LLaMA-3.3-70b (auto-fallback); built real-time AI interview engine with STT, TTS, voice auto-submit, and AI proctoring system",
            "Built bulk campaign system: CSV import, candidate comparison, recruiter notes, interview retake, S3 audio recording; optimized token usage by 50% via prompt compression",
          ]
        },
        {
          name: "Seekrz, Austin Indian & Speech Therapy App — Node.js / NestJS",
          achievements: [
            "Led entire backend architecture for Seekrz — live mobile app on App Store & Play Store for users and store owners across multiple locations",
            "Designed trade offer feature with cron job automation (auto-cancel after 48 hours); implemented Stripe, ACH direct debits, Apple Pay, and Cash Pay payment integrations",
            "Developed bulk order functionality ensuring high-performance API responses under heavy loads; built notification systems and user/store authentication",
            "Contributed to Austin Indian — community platform for Indians in Austin, Texas; developed complete backend APIs for restaurant search and filtering",
            "Built backend APIs for Speech Therapy Medical Application using NestJS — secure patient data handling, appointment scheduling, and session management",
          ]
        }
      ]
    },
    {
      company: "ManekTech",
      location: "Ahmedabad",
      position: "Software Engineer (MERN Stack)",
      period: "11/2021 - 05/2023",
      projects: [
        {
          name: "Cellcast — Bulk SMS Communication Platform (Australia)",
          achievements: [
            "Led backend development for Cellcast — bulk SMS communication platform; built APIs handling high-volume SMS campaigns with reliability and delivery speed",
            "Integrated Stripe Payment Gateway for top-ups and subscription billing; designed SMS credits, user balances, and transactional logging systems",
            "Collaborated with cross-functional teams; participated in client calls to gather requirements and deliver optimal backend solutions",
            "Applied backend optimization strategies to reduce costs and enhance platform scalability",
          ]
        }
      ]
    },
    {
      company: "Crest Infosystems Pvt. Ltd",
      location: "Surat",
      position: "Software Engineer (Node.js)",
      period: "01/2021 - 10/2021",
      projects: [
        {
          name: "Online Course Platform (Udemy Model)",
          achievements: [
            "Built online course platform from scratch using Node.js — APIs for course management, mastermind modules, agency features, and Facebook-based revenue integration",
            "Developed JWT-based authentication, Twilio SMS integration, Node-Cron scheduling, and MongoDB Aggregation Pipelines for complex data operations",
          ]
        }
      ]
    },
    {
      company: "EbizzInfotech Pvt Ltd",
      location: "Surat",
      position: "Software Engineer (Node.js)",
      period: "01/2019 - 12/2019",
      projects: [
        {
          name: null,
          achievements: [
            "Designed and developed scalable backend APIs; conducted data analysis, retrieval, and indexing to support business logic and enhance user experience",
          ]
        }
      ]
    },
    {
      company: "Dronstudy Pvt Ltd",
      location: "Delhi",
      position: "Junior Software Engineer",
      period: "01/2018 - 12/2018",
      projects: [
        {
          name: null,
          achievements: [
            "Built RESTful APIs using Node.js for live class functionality — smooth streaming and real-time communication; collaborated with front-end teams for seamless integrations",
          ]
        }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 px-4 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            id="experience-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>
                
                <div className="md:ml-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-teal-500/20 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="text-xl text-teal-400 font-medium flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 rounded-lg font-medium text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className={pIdx > 0 ? 'mt-6 pt-6 border-t border-gray-700' : ''}>
                      {project.name && (
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3 italic">{project.name}</h4>
                      )}
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start text-gray-300 group/item hover:text-gray-200 transition-colors"
                          >
                            <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">▸</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
