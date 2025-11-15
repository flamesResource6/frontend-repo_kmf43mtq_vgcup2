import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-gray-700 text-xs font-medium mb-4 pointer-events-none">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Actively learning & building
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Aspiring AI/ML Engineer
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          I’m a 3rd-semester AIML engineering student focusing on Python, data analysis, and foundational machine learning. I build small projects to learn fast and prepare for internships by 5th semester.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-black/90">View Projects</a>
          <a href="#contact" className="bg-white/80 backdrop-blur border border-gray-200 text-gray-900 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-white">Contact Me</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  )
}
