import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/40 to-blue-50/40 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About Me" subtitle="Focused on learning by building real, small projects and improving step-by-step.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-gray-700">
                I am an aspiring AI/ML engineer interested in Python development, data analysis, and solving real-world problems. Right now I’m learning Python, DSA, basic SQL, and foundation-level ML concepts like NumPy, Pandas, and data preprocessing. My goal is to build a strong foundation and get internship-ready by 5th semester.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                <li>Exploring ML workflows: data cleaning, EDA, basic models</li>
                <li>Practicing version control with Git & GitHub</li>
                <li>Documenting learning progress and projects</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Beginner-level skills, presented professionally. Continuously improving.">
          <Skills />
        </Section>

        <Section id="projects" title="Projects" subtitle="Simple projects that help me learn and apply concepts. I’ll keep adding more.">
          <Projects />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>

        <Section id="achievements" title="Achievements & Activities">
          <Achievements />
        </Section>

        <Section id="contact" title="Get in Touch" subtitle="Open to feedback, collaboration, and internship opportunities.">
          <Contact />
        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AIML Student Portfolio • Learning in public
      </footer>
    </div>
  )
}

export default App
