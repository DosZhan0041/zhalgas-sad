import { useState } from 'react'
import { Brain, Mic2, BookOpen, Puzzle, Calculator, Globe, Leaf, Theater, Phone, ChevronDown } from 'lucide-react'

const psychTips = [
  {
    title: 'Бала балабақшаға бейімделуі',
    content: `Бейімдеу кезеңі орта есеппен 2-4 апта созылады. Бала жылауы табиғи — бұл бөліну қорқынышы.\n\nНе істеу керек:\n• Балаңызды тыныш жіберіңіз — үрейіңізді сездірмеңіз\n• Күн сайын бір уақытта алыңыз — болжамдылық маңызды\n• Балабақшадағы балаларды мақтаңыз\n• Үйде ойын ойнаңыз, сұрақ қойыңыз`,
  },
  {
    title: 'Бала тентектік жасаса не істеу керек',
    content: `Тентектік — баланың шекараны тексеруі, бұл норма.\n\nҰсыныстар:\n• Ережелерді нақты және жылы тонмен айтыңыз\n• «Жоқ» емес, «Мынаны жасайық» деп ауыстырыңыз\n• Жазалаудан гөрі салдарын түсіндіріңіз\n• Балаңызды мақтаңыз — жақсы мінез-құлықты күшейтіңіз`,
  },
  {
    title: 'Баланың эмоционалдық дамуы',
    content: `3-6 жас — эмоционалдық сауаттылықтың негізін қалайтын кез.\n\nБалаңызға үйретіңіз:\n• Сезімдерін атауды: «Мен ашулымын», «Мен қуаныштымын»\n• Рахметін айтуды, кешірім сұрауды\n• Жоғалту, күту сезімдерін реттеуді\n• Достықты, бөлісуді`,
  },
]

const logoTips = [
  {
    title: 'Тіл дамуы: нормалар',
    content: `• 1 жас: 10-15 сөз\n• 2 жас: 50-200 сөз, қарапайым сөйлемдер\n• 3 жас: 1000+ сөз, күрделі сөйлемдер\n• 4-5 жас: еркін сөйлеу, сұрақ-жауап\n\nЕгер баланыздың тілі кешеуілдесе — логопедке барыңыз, ерте диагностика маңызды!`,
  },
  {
    title: 'Үйде тіл дамыту жаттығулары',
    content: `• Кітап оқыңыз — күн сайын, кешке\n• Сурет бойынша баяндатыңыз\n• «Телефонмен сөйлесу» ойынын ойнаңыз\n• Жұмбақ айтыңыз\n• Тіл беккенде: «Тиін тиіп тіл безді» — артикуляция жаттығулары\n• Серуенде заттарды атаңыз`,
  },
  {
    title: 'Дисграфия мен дислексия белгілері',
    content: `Алаңдаушылық туғызатын белгілер:\n• Хатты (алфавитті) тез ұмытады\n• Оңды-солды ажыратуда қиналады\n• Сөздерді теріс айтады\n• Мектепте оқуда үлкен қиыншылық\n\nБұл белгілерді байқасаңыз — логопедке хабарласыңыз.`,
  },
]

const devMaterials = [
  { icon: Puzzle,      color: 'coral',  title: 'Монтессори ойындары',  age: '2–6 жас', desc: 'Сенсорлық дамыту, өз бетімен жұмыс' },
  { icon: Theater,     color: 'purple', title: 'Шығармашылық',        age: '3–6 жас', desc: 'Сурет, мүсін, аппликация' },
  { icon: BookOpen,    color: 'blue',   title: 'Оқуға дайындық',      age: '4–6 жас', desc: 'Буынды оқу, дыбыс анализі' },
  { icon: Calculator,  color: 'yellow', title: 'Математика ойындары', age: '3–6 жас', desc: 'Санау, форма, өлшем' },
  { icon: Globe,       color: 'teal',   title: 'Қоршаған орта',       age: '2–6 жас', desc: 'Табиғат, жануарлар, өсімдіктер' },
  { icon: Leaf,        color: 'green',  title: 'Рөлдік ойындар',      age: '2–6 жас', desc: 'Әлеуметтік дамыту, фантазия' },
]

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <ChevronDown size={20} className={`faq-arrow ${open ? 'open' : ''}`} />
      </button>
      {open && <div className="faq-answer" style={{ whiteSpace: 'pre-line' }}>{content}</div>}
    </div>
  )
}

export default function UsefulInfo() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#AB6FDB,#F06292)' }}>
        <div className="container">
          <h1>Пайдалы ақпарат</h1>
          <p>Психолог, логопед кеңестері және дамытушы материалдар</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Психолог кеңестері</h2>
            <p>Балабақша психологы Назгүл Серіқова ұсынады</p>
          </div>
          <div style={{ display:'flex', gap:'1rem', alignItems:'center', marginBottom:'1.5rem' }}>
            <div className="ic ic-md ic-purple"><Brain size={26} /></div>
            <div className="faq-list" style={{ flex:1 }}>
              {psychTips.map((t, i) => <AccordionItem key={i} title={t.title} content={t.content} />)}
            </div>
          </div>
          <div className="specialist-cta">
            <p>Жеке кеңес алу үшін:</p>
            <a href="tel:87234424467" className="btn btn-primary">
              <Phone size={16} /> Психологке жазылу
            </a>
          </div>
        </div>
      </section>

      <section className="section section-purple">
        <div className="container">
          <div className="section-header">
            <h2>Логопед кеңестері</h2>
            <p>Логопед Рашида Мұқанова ұсынады</p>
          </div>
          <div style={{ display:'flex', gap:'1rem', alignItems:'center', marginBottom:'1.5rem' }}>
            <div className="ic ic-md ic-teal"><Mic2 size={26} /></div>
            <div className="faq-list" style={{ flex:1 }}>
              {logoTips.map((t, i) => <AccordionItem key={i} title={t.title} content={t.content} />)}
            </div>
          </div>
          <div className="specialist-cta">
            <p>Жеке кеңес алу үшін:</p>
            <a href="tel:87234424467" className="btn btn-primary">
              <Phone size={16} /> Логопедке жазылу
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Дамытушы материалдар</h2>
            <p>Балаңызбен үйде жұмыс жасауға арналған ресурстар</p>
          </div>
          <div className="grid-3">
            {devMaterials.map((m, i) => (
              <div key={i} className={`feature-card fc-${m.color}`}>
                <div className={`ic ic-md ic-${m.color}`}><m.icon size={26} /></div>
                <span className="dev-age">Жасы: {m.age}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
