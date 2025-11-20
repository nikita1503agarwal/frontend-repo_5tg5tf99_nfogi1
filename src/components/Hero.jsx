import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="px-3 py-1 rounded-full bg-white/70 text-slate-700 text-sm font-medium mb-6 backdrop-blur pointer-events-none">Pastel fintech starter</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm">
          Launch your fintech SaaS in days
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700/80 text-lg">
          Clean, modern and minimal. Authentication, pricing tiers, a simple blog and a contact form – everything you need to validate and grow.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="px-6 py-3 rounded-xl bg-rose-400 text-white font-semibold shadow hover:bg-rose-500 transition">See pricing</a>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-white/80 text-slate-800 font-semibold shadow hover:bg-white transition">Talk to us</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white"></div>
    </section>
  );
}

export default Hero;