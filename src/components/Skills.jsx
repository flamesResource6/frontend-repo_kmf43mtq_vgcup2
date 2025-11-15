const skills = [
  { name: 'Python', level: 'Beginner', category: 'Programming' },
  { name: 'C Programming', level: 'Beginner', category: 'Programming' },
  { name: 'Data Structures & Algorithms', level: 'Beginner', category: 'CS Fundamentals' },
  { name: 'SQL', level: 'Beginner', category: 'Data' },
  { name: 'NumPy', level: 'Beginner', category: 'ML/Data' },
  { name: 'Pandas', level: 'Beginner', category: 'ML/Data' },
  { name: 'Matplotlib', level: 'Beginner', category: 'ML/Data' },
  { name: 'Git & GitHub', level: 'Beginner', category: 'Tools' },
  { name: 'Jupyter / Colab', level: 'Beginner', category: 'Tools' },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((s) => (
        <div key={s.name} className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{s.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{s.category}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{s.level}</span>
          </div>
          <div className="mt-3 h-2 bg-gray-100 rounded">
            <div className="h-2 rounded bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400" style={{ width: '35%' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
