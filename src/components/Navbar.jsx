function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-white">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-slate-900">PastelPay</a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-xl bg-white text-slate-900 border border-slate-200">Sign in</a>
          <a href="#" className="px-4 py-2 rounded-xl bg-rose-400 text-white">Get started</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar