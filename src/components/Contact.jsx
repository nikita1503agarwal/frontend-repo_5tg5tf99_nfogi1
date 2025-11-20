import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
        setForm({ name: '', email: '', message: '', subject: '' })
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-sky-100 p-8 border border-white shadow">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Let’s talk</h2>
          <p className="text-slate-600 mt-2 max-w-xl">Tell us about your use‑case and we’ll reach out.</p>
          <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3 bg-white" placeholder="Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
            <input className="rounded-xl border border-slate-200 px-4 py-3 bg-white" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required />
            <input className="rounded-xl border border-slate-200 px-4 py-3 bg-white sm:col-span-2" placeholder="Subject (optional)" value={form.subject} onChange={e=>setForm({ ...form, subject: e.target.value })} />
            <textarea className="rounded-xl border border-slate-200 px-4 py-3 bg-white sm:col-span-2" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} required />
            <div className="sm:col-span-2 flex items-center gap-3">
              <button disabled={loading} className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-60">{loading ? 'Sending…' : 'Send message'}</button>
              {status && (
                <span className={`${status.ok ? 'text-emerald-700' : 'text-rose-700'} text-sm`}>{status.msg}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact