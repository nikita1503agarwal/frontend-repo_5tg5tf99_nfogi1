function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$9', desc: 'For early experiments', features: ['1 project', 'Basic analytics', 'Email support'], color: 'border-rose-300 bg-rose-50' },
    { name: 'Growth', price: '$29', desc: 'For growing teams', features: ['Unlimited projects', 'Advanced analytics', 'Priority support'], color: 'border-sky-300 bg-sky-50' },
    { name: 'Scale', price: '$99', desc: 'For production at scale', features: ['SLA + SSO', 'Custom limits', 'Dedicated support'], color: 'border-violet-300 bg-violet-50' },
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">Simple pricing</h2>
        <p className="text-slate-600/80 text-center mt-2">Start small and scale as you grow.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-2xl border ${t.color} p-6 shadow-sm` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
                <div className="text-3xl font-extrabold text-slate-900">{t.price}<span className="text-base text-slate-600 font-medium">/mo</span></div>
              </div>
              <p className="text-slate-600 mt-2">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-700"></span>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-slate-900 text-white py-2.5 hover:bg-slate-800">Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;