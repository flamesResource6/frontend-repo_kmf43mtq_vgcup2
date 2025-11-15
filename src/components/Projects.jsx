const projects = [
  {
    title: 'Python To-Do List App',
    description: 'A simple command-line to-do app to practice Python basics, file handling, and clean code structure.',
    tech: ['Python'],
    github: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Student Management System',
    description: 'Console or basic GUI app to manage student records with CRUD operations and simple data storage.',
    tech: ['Python', 'SQL'],
    github: '#',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Basic ML Model – Iris/Spam Classifier',
    description: 'Beginner-friendly ML project using NumPy, Pandas, and scikit-learn for training and evaluation.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: '#',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article key={p.title} className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition">
          <div className="aspect-video overflow-hidden">
            <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a href={p.github} className="text-sm font-medium text-gray-900 hover:underline">GitHub →</a>
              <span className="text-xs text-gray-500">Add screenshot later</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
