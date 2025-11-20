import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">Latest from the blog</h2>
        <p className="text-slate-600/80 text-center mt-2">Updates and insights from the team</p>
        {loading ? (
          <p className="text-center text-slate-600 mt-10">Loading…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-rose-600 font-semibold">{p.tags?.[0] || 'Update'}</div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-700/90 text-sm">{p.excerpt || (p.content?.slice(0, 120) + '…')}</p>
                <div className="mt-4 text-sm text-slate-500">By {p.author} • {new Date(p.published_at || p.created_at).toLocaleDateString()}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog