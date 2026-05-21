import { useState } from 'react'
import { ClipboardList, FileText, UserCheck, PenLine, CreditCard, Star, FolderOpen, Sunrise, Shirt, ShoppingBag, MessageSquare, ChevronDown } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

const rules = [
  { icon: ClipboardList, color: 'coral',  title: 'Өтініш беру',       desc: 'Толтырылған өтінішпен балабақшаға немесе онлайн форма арқылы хабарласыңыз' },
  { icon: FileText,      color: 'blue',   title: 'Құжаттар',          desc: 'Барлық қажетті құжаттарды дайындаңыз' },
  { icon: UserCheck,     color: 'green',  title: 'Медициналық тексеру',desc: 'Баланың денсаулық картасын және вакцинация жазбасын ұсыныңыз' },
  { icon: PenLine,       color: 'purple', title: 'Шарт жасасу',       desc: 'Қызмет көрсету шартына қол қойылады' },
  { icon: CreditCard,    color: 'yellow', title: 'Алғашқы төлем',     desc: 'Баланы қабылдар алдында алғашқы айдың ақысы төленеді' },
  { icon: Star,          color: 'teal',   title: 'Бейімделу',         desc: 'Баланы бірте-бірте балабақшаға үйрету кезеңі басталады' },
]

const tips = [
  { icon: Sunrise,      color: 'yellow', title: 'Таңертеңгі дайындық', desc: 'Балаңызды уақытында ұйықтатыңыз, таңертең ерте оятып, тыныш дайындаңыз' },
  { icon: Shirt,        color: 'teal',   title: 'Киім',                desc: 'Ыңғайлы, оңай киіп-шешетін киім дайындаңыз. Ауа-райына сәйкес екінші жиынтық қалдырыңыз' },
  { icon: ShoppingBag,  color: 'blue',   title: 'Сөмке',               desc: 'Балаңыздың атын жазыңыз. Кішкентай, қауіпсіз ойыншық алып келуге болады' },
  { icon: MessageSquare,color: 'coral',  title: 'Байланыс',            desc: 'Тәрбиешімен күнделікті қысқа сөйлесіңіз. Баланың көңіл-күйін бақылаңыз' },
]

const requiredDocs = [
  'Ата-ананың өтінішi',
  'Баланың туу туралы куәлігі (көшірмесі)',
  'Ата-ана жеке куәлігі (көшірмесі)',
  'Баланың денсаулық картасы (ф. 026/у)',
  'Вакцинация картасы',
  'Педиатр анықтамасы',
  '2×3 фотосурет (2 дана)',
]

const faqs = [
  { q: 'Балабақша жұмыс уақыты қандай?',    a: 'Балабақша дүйсенбіден жұмаға дейін 07:30-дан 19:00-ға дейін жұмыс жасайды.' },
  { q: 'Тамақтану қанша рет?',              a: 'Күніне 5 рет: таңғы ас, екінші таңғы, түскі ас, түстен кейінгі ас, кешкі ас.' },
  { q: 'Балам ауырып қалса не болады?',     a: 'Медбике бала жағдайын бақылайды, ата-анаға дереу хабарлайды. Дәрі беру тек дәрігер нұсқауымен жүргізіледі.' },
  { q: 'Бала бейімделуі қанша уақыт алады?',a: 'Орта есеппен 2-4 апта. Психологымыз бейімдеу кезеңінде қолдау көрсетеді.' },
  { q: 'Төлем қалай жүргізіледі?',          a: 'Ай сайын, айдың 1-5 жұлдыздары аралығында банктік аударым немесе қолма-қол ақша арқылы.' },
  { q: 'Балаларды бақылауға бола ма?',      a: 'Иә, бөлмеде камера бар, ата-аналар мобильді қосымша арқылы балаларын онлайн бақылай алады.' },
]

export default function ForParents() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#FF8C42,#FFB300)' }}>
        <div className="container">
          <h1>Ата-аналарға</h1>
          <p>Балаңызды балабақшаға дайындауға қажетті барлық ақпарат</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header"><h2>Қабылдау ережелері</h2></div>
          <div className="rules-grid">
            {rules.map((r, i) => (
              <div key={i} className="rule-card">
                <div className="rule-num">{i + 1}</div>
                <div className={`ic ic-md ic-${r.color}`}><r.icon size={26} /></div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="two-col">
            <div className="doc-list-card">
              <h3><FolderOpen size={18} style={{ display:'inline', marginRight:6, verticalAlign:'middle', color:'var(--blue)' }} />Міндетті құжаттар</h3>
              <ul>
                {requiredDocs.map((d, i) => (
                  <li key={i}><CheckCircle size={15} className="check-icon" />{d}</li>
                ))}
              </ul>
            </div>
            <div className="payment-card">
              <h3><CreditCard size={18} style={{ display:'inline', marginRight:6, verticalAlign:'middle', color:'var(--coral)' }} />Төлем ақпараты</h3>
              <div className="payment-rows">
                {[
                  { label: 'Ай сайынғы төлем', val: 'Нарықтық баға' },
                  { label: 'Тіркеу жарнасы',   val: 'Бір рет' },
                  { label: 'Тамақтану',         val: 'Кіреді' },
                  { label: 'Сабақ материалдары',val: 'Кіреді' },
                  { label: 'Төлем мерзімі',     val: 'Айдың 1–5' },
                ].map((p, i) => (
                  <div key={i} className="payment-row">
                    <span>{p.label}</span><strong>{p.val}</strong>
                  </div>
                ))}
              </div>
              <p className="payment-note">* Нақты баға туралы ақпарат алу үшін байланысыңыз</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Кеңестер</h2>
          </div>
          <div className="tips-grid">
            {tips.map((t, i) => (
              <div key={i} className="tip-card">
                <div className={`ic ic-md ic-${t.color}`}><t.icon size={26} /></div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-yellow">
        <div className="container">
          <div className="section-header"><h2>Жиі қойылатын сұрақтар</h2></div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`faq-arrow ${openFaq === i ? 'open' : ''}`} />
                </button>
                {openFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
