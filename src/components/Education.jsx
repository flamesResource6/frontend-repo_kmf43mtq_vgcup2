export default function Education() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">B.E. in AIML</h3>
          <p className="text-sm text-gray-600">Global Academy of Technology</p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">Current: 3rd Semester</span>
      </div>
      <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Strengthening Python, DSA, and SQL fundamentals</li>
        <li>Learning ML basics: NumPy, Pandas, data preprocessing</li>
        <li>Building small projects to apply concepts</li>
      </ul>
    </div>
  )
}
