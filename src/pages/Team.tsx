import { Briefcase, GraduationCap, Phone } from 'lucide-react'

const staff = [
  {
    category: 'Басшылық',
    bg: 'section-blue',
    members: [
      { icon: Briefcase,     color: 'blue',   name: 'Ракишов Қайрат Қошқентаевич',     role: 'Меңгеруші' },
    ],
  },
  {
    category: 'Тәрбиешілер',
    bg: '',
    members: [
      { icon: GraduationCap, color: 'coral',  name: 'Абылхасимова Майгүл Айтмұқашевна', role: 'Тәрбиеші' },
      { icon: GraduationCap, color: 'orange', name: 'Байрова Назым Бағдатовна',          role: 'Тәрбиеші' },
      { icon: GraduationCap, color: 'yellow', name: 'Мұратқызы Гүлсара',                role: 'Тәрбиеші' },
      { icon: GraduationCap, color: 'green',  name: 'Қойшина Жанарғүл Зарыққанқызы',   role: 'Тәрбиеші' },
      { icon: GraduationCap, color: 'purple', name: 'Сандыбаева Динара Елемесовна',     role: 'Тәрбиеші' },
      { icon: GraduationCap, color: 'teal',   name: 'Хамитова Майгүль Анваровна',       role: 'Тәрбиеші' },
    ],
  },
]

export default function Team() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#AB6FDB,#4D96FF)' }}>
        <div className="container">
          <h1>Ұжымымыз</h1>
          <p>Балаларымызды тәрбиелейтін кәсіби мамандар</p>
        </div>
      </section>

      {staff.map((group, gi) => (
        <section key={gi} className={`section ${group.bg}`}>
          <div className="container">
            <div className="section-header">
              <h2>{group.category}</h2>
            </div>
            <div className="team-grid">
              {group.members.map((m, mi) => (
                <div key={mi} className="team-card">
                  <div className={`ic ic-lg ic-${m.color}`} style={{ width: 72, height: 72 }}>
                    <m.icon size={32} />
                  </div>
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Бізде жұмысқа орын бар!</h2>
            <p>Тәрбиеші немесе маман ретінде жұмысқа орналасқыңыз келсе — бізге хабарласыңыз</p>
            <a href="tel:77234424467" className="btn btn-outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> Байланысу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
