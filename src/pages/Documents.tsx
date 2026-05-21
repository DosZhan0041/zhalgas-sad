import { FileText, Download, Info } from 'lucide-react'

const docCategories = [
  {
    title: 'Жарғылық құжаттар',
    color: 'blue',
    docs: [
      { name: 'Балабақша жарғысы',           size: 'PDF, 1.2 MB' },
      { name: 'Мемлекеттік тіркеу куәлігі',  size: 'PDF, 0.8 MB' },
      { name: 'Салық тіркеу куәлігі',        size: 'PDF, 0.5 MB' },
    ],
  },
  {
    title: 'Лицензиялар мен рұқсаттар',
    color: 'green',
    docs: [
      { name: 'Білім беру лицензиясы',        size: 'PDF, 1.0 MB' },
      { name: 'СЭС рұқсаты (2024)',           size: 'PDF, 0.9 MB' },
      { name: 'Өрт қауіпсіздігі сертификаты',size: 'PDF, 0.7 MB' },
    ],
  },
  {
    title: 'Аттестация материалдары',
    color: 'purple',
    docs: [
      { name: 'Аттестация қорытындысы 2023',  size: 'PDF, 2.1 MB' },
      { name: 'Өзіндік бағалау есебі',        size: 'PDF, 3.4 MB' },
      { name: 'Сараптамалық комиссия актісі', size: 'PDF, 1.8 MB' },
    ],
  },
  {
    title: 'Санитарлық құжаттар',
    color: 'teal',
    docs: [
      { name: 'Санитарлық ереже бойынша есеп',size: 'PDF, 1.5 MB' },
      { name: 'Тамақтану сапасы туралы анықтама', size: 'PDF, 0.6 MB' },
      { name: 'Су сапасы анализі',            size: 'PDF, 0.4 MB' },
    ],
  },
  {
    title: 'Ішкі бұйрықтар',
    color: 'coral',
    docs: [
      { name: 'Ішкі тәртіп ережелері',       size: 'PDF, 1.1 MB' },
      { name: 'Қауіпсіздік нұсқаулары',      size: 'PDF, 0.9 MB' },
      { name: 'Балаларды қабылдау тәртібі',  size: 'PDF, 0.7 MB' },
    ],
  },
]

export default function Documents() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#26C6DA,#4D96FF)' }}>
        <div className="container">
          <h1>Құжаттар</h1>
          <p>Балабақшаның ресми құжаттары және нормативтік актілер</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="docs-notice">
            <div className="ic ic-sm ic-blue"><Info size={20} /></div>
            <p>
              Барлық құжаттар заңнамалық талаптарға сай жасалған. Сізге қосымша ақпарат
              қажет болса, балабақша әкімшілігіне хабарласыңыз.
            </p>
          </div>

          {docCategories.map((cat, ci) => (
            <div key={ci} className="doc-category">
              <h2 style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
                <div className={`ic ic-sm ic-${cat.color}`} style={{ width:36, height:36 }}>
                  <FileText size={18} />
                </div>
                {cat.title}
              </h2>
              <div className="doc-grid">
                {cat.docs.map((d, di) => (
                  <div key={di} className="doc-card">
                    <div className={`ic ic-sm ic-${cat.color}`} style={{ width:40, height:40 }}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <h3>{d.name}</h3>
                      <p>{d.size}</p>
                    </div>
                    <button className="btn-download">
                      <Download size={14} /> Жүктеу
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
