import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <div id="features"><Features /></div>
      <Pricing />
      <div id="blog"><Blog /></div>
      <Contact />
      <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</footer>
    </div>
  )
}

export default App