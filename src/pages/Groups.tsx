import { Baby, Leaf, Sun, Star, GraduationCap, Users, Clock, CheckCircle, CalendarDays } from 'lucide-react'

const groups = [
  {
    name: 'Нәресте тобы',
    age: '1–2 жас',
    icon: Baby,
    color: 'coral',
    bg: '#FFF0F0',
    borderColor: 'var(--coral)',
    count: '15 бала',
    schedule: '07:30 – 19:00',
    teacher: 'Зарина Ибрагимова',
    program: ['Сенсорлық ойындар','Алғашқы сөздерді үйрету','Қимыл-қозғалыс дамыту','Музыкалық ырғақ'],
    day: [
      { time: '07:30', activity: 'Қабылдау' },
      { time: '08:00', activity: 'Таңғы ас' },
      { time: '09:00', activity: 'Сенсорлық ойындар' },
      { time: '10:00', activity: 'Серуен' },
      { time: '11:30', activity: 'Түскі ас' },
      { time: '12:00', activity: 'Ұйқы' },
      { time: '15:00', activity: 'Түстен кейінгі ас' },
      { time: '16:00', activity: 'Ойын' },
      { time: '19:00', activity: 'Үйге қайту' },
    ],
  },
  {
    name: 'Кіші топ',
    age: '2–3 жас',
    icon: Leaf,
    color: 'green',
    bg: '#E8FFF4',
    borderColor: 'var(--green)',
    count: '20 бала',
    schedule: '07:30 – 19:00',
    teacher: 'Гүлнар Сейткали',
    program: ['Тіл дамыту сабақтары','Сурет салу, мүсін жасау','Дене тәрбиесі','Музыка сабағы'],
    day: [
      { time: '07:30', activity: 'Қабылдау, ойын' },
      { time: '08:30', activity: 'Таңғы ас' },
      { time: '09:00', activity: 'Тәрбие сабағы' },
      { time: '10:30', activity: 'Серуен' },
      { time: '12:00', activity: 'Түскі ас' },
      { time: '12:30', activity: 'Ұйқы' },
      { time: '15:00', activity: 'Оянғаннан кейінгі ас' },
      { time: '15:30', activity: 'Шығармашылық' },
      { time: '19:00', activity: 'Үйге қайту' },
    ],
  },
  {
    name: 'Орта топ',
    age: '3–4 жас',
    icon: Sun,
    color: 'yellow',
    bg: '#FFF8E1',
    borderColor: 'var(--yellow)',
    count: '22 бала',
    schedule: '07:30 – 19:00',
    teacher: 'Маржан Әлімова',
    program: ['Математикалық ұғымдар','Сауат ашу элементтері','Қоршаған орта','Ойын терапиясы'],
    day: [
      { time: '07:30', activity: 'Қабылдау' },
      { time: '08:00', activity: 'Таңғы жаттығу' },
      { time: '08:30', activity: 'Таңғы ас' },
      { time: '09:00', activity: 'Негізгі сабақ' },
      { time: '10:00', activity: 'Дене тәрбиесі' },
      { time: '11:00', activity: 'Серуен' },
      { time: '12:30', activity: 'Түскі ас' },
      { time: '13:00', activity: 'Ұйқы' },
      { time: '15:00', activity: 'Түстен кейінгі ас' },
      { time: '15:30', activity: 'Шығармашылық, ойын' },
      { time: '19:00', activity: 'Үйге қайту' },
    ],
  },
  {
    name: 'Үлкен топ',
    age: '4–5 жас',
    icon: Star,
    color: 'blue',
    bg: '#EBF3FF',
    borderColor: 'var(--blue)',
    count: '22 бала',
    schedule: '07:30 – 19:00',
    teacher: 'Сәуле Байжанова',
    program: ['Сауат ашу, есеп','Логикалық ойлау','Ағылшын тілі негіздері','Жобалық жұмыс'],
    day: [
      { time: '07:30', activity: 'Қабылдау' },
      { time: '08:00', activity: 'Таңғы жаттығу' },
      { time: '08:30', activity: 'Таңғы ас' },
      { time: '09:00', activity: '1-сабақ' },
      { time: '09:30', activity: '2-сабақ' },
      { time: '10:00', activity: '3-сабақ' },
      { time: '10:30', activity: 'Серуен' },
      { time: '12:30', activity: 'Түскі ас' },
      { time: '13:00', activity: 'Ұйқы' },
      { time: '15:00', activity: 'Түстен кейінгі ас' },
      { time: '15:30', activity: 'Клуб, шығармашылық' },
      { time: '19:00', activity: 'Үйге қайту' },
    ],
  },
  {
    name: 'Мектеп алды тобы',
    age: '5–6 жас',
    icon: GraduationCap,
    color: 'purple',
    bg: '#F4EBFF',
    borderColor: 'var(--purple)',
    count: '20 бала',
    schedule: '07:30 – 19:00',
    teacher: 'Айнұр Досова',
    program: ['Оқу, жазу дайындығы','Математика (10-ға дейін)','Ағылшын тілі','Психологиялық дайындық'],
    day: [
      { time: '07:30', activity: 'Қабылдау' },
      { time: '08:00', activity: 'Таңғы жаттығу' },
      { time: '08:30', activity: 'Таңғы ас' },
      { time: '09:00', activity: '1-сабақ (Қазақ тілі)' },
      { time: '09:30', activity: '2-сабақ (Математика)' },
      { time: '10:00', activity: '3-сабақ (Ағылшын)' },
      { time: '10:30', activity: 'Серуен' },
      { time: '12:30', activity: 'Түскі ас' },
      { time: '13:00', activity: 'Ұйқы' },
      { time: '15:00', activity: 'Түстен кейінгі ас' },
      { time: '15:30', activity: 'Мектепке дайындық' },
      { time: '19:00', activity: 'Үйге қайту' },
    ],
  },
]

export default function Groups() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#56CB8F,#26C6DA)' }}>
        <div className="container">
          <h1>Топтарымыз</h1>
          <p>1 жастан 6 жасқа дейінгі балалар үшін жас топтары</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="groups-overview">
            {groups.map((g, i) => (
              <a key={i} href={`#group-${i}`} className="group-chip"
                style={{ background: g.bg, borderColor: g.borderColor }}>
                {g.name} ({g.age})
              </a>
            ))}
          </div>
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={i} id={`group-${i}`} className={`section ${i % 2 === 1 ? 'section-alt' : ''}`}>
          <div className="container">
            <div className="group-header" style={{ borderLeft: `4px solid ${g.borderColor}` }}>
              <div className={`ic ic-lg ic-${g.color}`} style={{ width: 72, height: 72 }}>
                <g.icon size={32} />
              </div>
              <div>
                <h2>{g.name}</h2>
                <div className="group-meta">
                  <span><Users size={14} /> {g.count}</span>
                  <span><Clock size={14} /> {g.schedule}</span>
                  <span><GraduationCap size={14} /> {g.teacher}</span>
                </div>
              </div>
            </div>

            <div className="group-content">
              <div className="group-program">
                <h3><CalendarDays size={18} /> Бағдарлама</h3>
                <ul>
                  {g.program.map((p, pi) => (
                    <li key={pi}>
                      <CheckCircle size={16} className="check-icon" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group-schedule">
                <h3><Clock size={18} /> Күн тәртібі</h3>
                <div className="schedule-list">
                  {g.day.map((d, di) => (
                    <div key={di} className="schedule-item">
                      <span className="schedule-time">{d.time}</span>
                      <span className="schedule-activity">{d.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
