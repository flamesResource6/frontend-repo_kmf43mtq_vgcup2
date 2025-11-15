import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <a href="mailto:your.email@example.com" className="group rounded-lg border border-gray-200 bg-white p-5 hover:shadow-sm transition">
        <div className="flex items-center gap-3 text-gray-900">
          <div className="p-2 rounded-md bg-gray-100"><Mail size={18} /></div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-gray-600 group-hover:underline">your.email@example.com</div>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="group rounded-lg border border-gray-200 bg-white p-5 hover:shadow-sm transition">
        <div className="flex items-center gap-3 text-gray-900">
          <div className="p-2 rounded-md bg-gray-100"><Linkedin size={18} /></div>
          <div>
            <div className="font-semibold">LinkedIn</div>
            <div className="text-sm text-gray-600 group-hover:underline">Add your profile</div>
          </div>
        </div>
      </a>
      <a href="https://github.com/your-github" target="_blank" className="group rounded-lg border border-gray-200 bg-white p-5 hover:shadow-sm transition">
        <div className="flex items-center gap-3 text-gray-900">
          <div className="p-2 rounded-md bg-gray-100"><Github size={18} /></div>
          <div>
            <div className="font-semibold">GitHub</div>
            <div className="text-sm text-gray-600 group-hover:underline">Add your username</div>
          </div>
        </div>
      </a>
    </div>
  )
}
