import { Folder, ExternalLink } from 'lucide-react'

const folders = [
  { label: 'Өзін-өзі бағалау құжаттары',                  color: 'coral' },
  { label: 'МДҰ-ның жалпы сипаттамасы',                  color: 'orange' },
  { label: 'Кадрлық әлеуетті талдау',                    color: 'yellow' },
  { label: 'Тәрбиеленушілер контингенті',                 color: 'green' },
  { label: 'Оқу-әдістемелік жұмыс',                      color: 'teal' },
  { label: 'Оқу-материалдық активтер',                    color: 'blue' },
  { label: 'Ақпараттық ресурстар және кітапханалық қор', color: 'purple' },
  { label: 'Тәрбиеленушілердің білімін бағалау',         color: 'pink' },
  { label: 'Сауалнама',                                   color: 'coral' },
  { label: 'Бейнеконтент',                                color: 'orange' },
  { label: 'ҚОСЫМШАЛАР',                                    color: 'blue' },
]

const DRIVE_URL = 'https://drive.google.com/drive/folders/1YAW7Aj9iOKnPbJtEmzax1c-JIIfEIlz2'

export default function Attestation() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#4D96FF,#AB6FDB)' }}>
        <div className="container">
          <h1>Аттестация 2026</h1>
          <p>Мемлекеттік аттестацияға арналған материалдар</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Аттестация құжаттары</h2>
            <p>Барлық материалдар Google Drive-та сақталған</p>
          </div>

          <div className="attest-folder-grid">
            {folders.map((f, i) => (
              <a
                key={i}
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`attest-folder-card fc-${f.color}`}
              >
                <div className={`ic ic-md ic-${f.color}`}>
                  <Folder size={26} />
                </div>
                <span>{f.label}</span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ExternalLink size={18} /> Google Drive-та ашу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}