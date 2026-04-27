import { useState, useEffect } from 'react'

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setFadeOut(true)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 80)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="mb-8">
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
          SS
        </span>
      </div>
      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="mt-4 text-gray-500 text-sm tracking-widest uppercase">Loading</p>
    </div>
  )
}

export default PageLoader
