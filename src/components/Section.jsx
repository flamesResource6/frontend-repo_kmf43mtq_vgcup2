export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
