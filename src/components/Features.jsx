function Features() {
  const items = [
    { title: 'Secure by design', desc: 'Built with best practices and modern tooling. PCI-friendly patterns.', color: 'from-rose-200 to-rose-100' },
    { title: 'Auth included', desc: 'Sign up and sign in endpoints ready to wire with your provider.', color: 'from-sky-200 to-sky-100' },
    { title: 'Blog ready', desc: 'Share updates and stories with a lightweight CMS-style API.', color: 'from-violet-200 to-violet-100' },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">Everything to get started</h2>
        <p className="text-slate-600/80 text-center mt-2 max-w-2xl mx-auto">Focus on your product, not boilerplate. This starter gets you from idea to launch fast.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {items.map((f, i) => (
            <div key={i} className={`rounded-2xl p-6 bg-gradient-to-br ${f.color} border border-white shadow` }>
              <h3 className="font-semibold text-slate-800">{f.title}</h3>
              <p className="text-slate-700/80 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;