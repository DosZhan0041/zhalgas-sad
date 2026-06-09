import { Phone, MessageCircle, ClipboardList, Users } from 'lucide-react'

const groups = [
  { label: 'Нәресте тобы', age: '1–2 жас', color: 'coral' },
  { label: 'Кіші топ',     age: '2–3 жас', color: 'green' },
  { label: 'Орта топ',     age: '3–4 жас', color: 'yellow' },
  { label: 'Үлкен топ',    age: '4–5 жас', color: 'blue' },
  { label: 'Мектеп алды',  age: '5–6 жас', color: 'purple' },
]

const steps = [
  'Байланысқа шығыңыз (телефон немесе WhatsApp)',
  'Менеджер қоңырауы (24 сағат ішінде)',
  'Балабақшаға экскурсия',
  'Құжаттарды тапсыру',
  'Шарт жасасу',
  'Баланы қабылдау',
]

export default function Admission() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#56CB8F,#26C6DA)' }}>
        <div className="container">
          <h1>Қабылдау</h1>
          <p>Балаңызды «Жалғас» балабақшасына жазыңыз</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Топтарымыз</h2>
            <p>Жас ерекшелігіне сай топтар</p>
          </div>
          <div className="slots-info">
            {groups.map((g, i) => (
              <div key={i} className="slot-card" style={{ borderLeft: `4px solid var(--${g.color})` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className={`ic ic-sm ic-${g.color}`} style={{ width: 36, height: 36 }}>
                    <Users size={18} />
                  </div>
                  <span style={{ fontWeight: 700 }}>{g.label}</span>
                </div>
                <span className="slot-badge" style={{ background: `var(--${g.color}-bg)`, color: `var(--${g.color})` }}>
                  {g.age}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="two-col">
            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div className="ic ic-sm ic-coral" style={{ width: 36, height: 36 }}><Phone size={18} /></div>
                Байланыс арқылы жазылу
              </h3>
              <div className="contact-options">
                <a href="tel:77715497112" className="contact-option">
                  <div className="ic ic-sm ic-coral" style={{ width: 40, height: 40 }}><Phone size={18} /></div>
                  <div><strong>Телефон</strong><p>+7-771-549-71-12</p></div>
                </a>
                <a href="https://wa.me/77715497112" className="contact-option">
                  <div className="ic ic-sm ic-green" style={{ width: 40, height: 40 }}><MessageCircle size={18} /></div>
                  <div><strong>WhatsApp</strong><p>+7-771-549-71-12</p></div>
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div className="ic ic-sm ic-blue" style={{ width: 36, height: 36 }}><ClipboardList size={18} /></div>
                Қабылдау тәртібі
              </h3>
              <ol className="order-list">
                {steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}