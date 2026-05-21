import { Utensils, ChefHat, Scale, CalendarDays, AlertTriangle, Clock } from 'lucide-react'

const menuInfo = [
  { icon: Utensils,    color: 'coral',  title: 'Күніне 5 рет',    desc: 'Таңғы, екінші таңғы, түскі, түстен кейін, кешкі' },
  { icon: ChefHat,     color: 'orange', title: 'Кәсіби аспаз',    desc: 'Арнайы дайындалған балалар аспаздары' },
  { icon: Scale,       color: 'green',  title: 'Тепе-тең',        desc: 'Витаминдер, ақуыз, майлар, углеводтар' },
  { icon: CalendarDays,color: 'blue',   title: '10 күндік мәзір', desc: 'Алдын ала бекітілген, ата-аналарға ашық' },
]

const weekMenu = [
  {
    day: 'Дүйсенбі',
    meals: [
      { time: '08:00', label: 'Таңғы ас',          items: ['Сүтті қаша','Нан','Сүт'] },
      { time: '10:00', label: 'Екінші таңғы',       items: ['Алма немесе банан'] },
      { time: '12:30', label: 'Түскі ас',           items: ['Бұршақ сорпасы','Тауық еті','Нан','Шырын'] },
      { time: '15:00', label: 'Түстен кейін',       items: ['Йогурт','Печенье'] },
      { time: '17:30', label: 'Кешкі',              items: ['Тоқаш, сары май','Какао'] },
    ],
  },
  {
    day: 'Сейсенбі',
    meals: [
      { time: '08:00', label: 'Таңғы ас',    items: ['Омлет','Нан','Шай'] },
      { time: '10:00', label: 'Екінші таңғы',items: ['Апельсин'] },
      { time: '12:30', label: 'Түскі ас',    items: ['Борщ','Котлет, картоп пюресі','Нан','Компот'] },
      { time: '15:00', label: 'Түстен кейін',items: ['Кефир','Тоқаш'] },
      { time: '17:30', label: 'Кешкі',       items: ['Творог запеканкасы','Шай'] },
    ],
  },
  {
    day: 'Сәрсенбі',
    meals: [
      { time: '08:00', label: 'Таңғы ас',    items: ['Гречка қашасы','Нан','Сүт'] },
      { time: '10:00', label: 'Екінші таңғы',items: ['Алма шырыны'] },
      { time: '12:30', label: 'Түскі ас',    items: ['Тауық бульоны','Тефтель, күріш','Нан','Компот'] },
      { time: '15:00', label: 'Түстен кейін',items: ['Сүзбе','Нан'] },
      { time: '17:30', label: 'Кешкі',       items: ['Манды ботқа','Шай'] },
    ],
  },
  {
    day: 'Бейсенбі',
    meals: [
      { time: '08:00', label: 'Таңғы ас',    items: ['Тары қашасы','Нан','Какао'] },
      { time: '10:00', label: 'Екінші таңғы',items: ['Груша'] },
      { time: '12:30', label: 'Түскі ас',    items: ['Лагман сорпасы','Пилав','Нан','Шырын'] },
      { time: '15:00', label: 'Түстен кейін',items: ['Биопростокваша','Печенье'] },
      { time: '17:30', label: 'Кешкі',       items: ['Картоп пюресі, балық','Шай'] },
    ],
  },
  {
    day: 'Жұма',
    meals: [
      { time: '08:00', label: 'Таңғы ас',    items: ['Сүзбе, шаймақ','Нан','Шай'] },
      { time: '10:00', label: 'Екінші таңғы',items: ['Мандарин'] },
      { time: '12:30', label: 'Түскі ас',    items: ['Шұрпа','Бесбармақ','Нан','Компот'] },
      { time: '15:00', label: 'Түстен кейін',items: ['Йогурт'] },
      { time: '17:30', label: 'Кешкі',       items: ['Бисквит, сүт'] },
    ],
  },
]

const allergies = [
  { label: 'Жаңғақ',   note: 'Барлық тағамдарда жоқ',          color: 'yellow' },
  { label: 'Лактоза',  note: 'Баламалы тағам дайын',           color: 'blue' },
  { label: 'Глютен',   note: 'Глютенсіз мәзір сұрастырыңыз',  color: 'green' },
  { label: 'Жұмыртқа', note: 'Алдын ала хабарлаңыз',           color: 'orange' },
]

export default function Menu() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#FF8C42,#FFB300)' }}>
        <div className="container">
          <h1>Тамақтану мәзірі</h1>
          <p>Баланың дұрыс тамақтануы — денсаулықтың негізі</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 0 }}>
            {menuInfo.map((c, i) => (
              <div key={i} className={`feature-card fc-${c.color}`}>
                <div className={`ic ic-md ic-${c.color}`}><c.icon size={26} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-yellow">
        <div className="container">
          <div className="section-header">
            <h2>Апталық мәзір</h2>
            <p>Ағымдағы апта мәзірі</p>
          </div>
          <div className="week-menu">
            {weekMenu.map((day, di) => (
              <div key={di} className="day-menu">
                <div className="day-name">
                  <CalendarDays size={18} /> {day.day}
                </div>
                <div className="day-meals">
                  {day.meals.map((meal, mi) => (
                    <div key={mi} className="meal-item">
                      <span className="meal-time">
                        <Clock size={12} style={{ display:'inline', verticalAlign:'middle', marginRight:3 }} />
                        {meal.time} — {meal.label}
                      </span>
                      <ul>
                        {meal.items.map((item, ii) => <li key={ii}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Аллергия туралы ақпарат</h2>
            <p>Баланыздың аллергиясы болса, алдын ала хабарлаңыз</p>
          </div>
          <div className="allergy-grid">
            {allergies.map((a, i) => (
              <div key={i} className="allergy-card">
                <div className={`ic ic-sm ic-${a.color}`} style={{ width:44, height:44 }}>
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3>{a.label}</h3>
                  <p>{a.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="allergy-notice">
            <AlertTriangle size={16} style={{ display:'inline', marginRight:6, verticalAlign:'middle', color:'#8a6500' }} />
            <span>Баланыздың аллергиясы немесе арнайы тамақтану ережесі болса,
              тәрбиешіге жазбаша хабарлаңыз. Балаға жеке мәзір жасалады.</span>
          </div>
        </div>
      </section>
    </main>
  )
}
