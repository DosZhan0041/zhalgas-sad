import { Folder, ExternalLink } from "lucide-react";

const folders = [
  {
    label: "Өзін-өзі бағалау құжаттары",
    color: "coral",
    href: "https://drive.google.com/drive/folders/1b_aUKc9OrsZAZcHoA78YwvxU4vlpQhvZ",
  },
  {
    label: "МДҰ-ның жалпы сипаттамасы",
    color: "orange",
    href: "https://drive.google.com/drive/folders/16zhj4wFapNGqjtay9LQyDE4_XiUIV6gT",
  },
  {
    label: "Кадрлық әлеуетті талдау",
    color: "yellow",
    href: "https://drive.google.com/drive/folders/1er7VlczU8ZadbcZd38OL84USO1w5K03l",
  },
  {
    label: "Тәрбиеленушілер контингенті",
    color: "green",
    href: "https://drive.google.com/drive/folders/12uiXUMYS6ZG8DqMJjkxSYMy_wYbz9v_F",
  },
  {
    label: "Оқу-әдістемелік жұмыс",
    color: "teal",
    href: "https://drive.google.com/drive/folders/1p8VAKzRtlNKJKBDILFEiKNVtZL022ror",
  },
  {
    label: "Оқу-материалдық активтер",
    color: "blue",
    href: "https://drive.google.com/drive/folders/1_d3xnAr6LAETRHdSzV7nawadMv_1HtOY",
  },
  {
    label: "Ақпараттық ресурстар және кітапханалық қор",
    color: "purple",
    href: "https://drive.google.com/drive/folders/1t7iTrsPuOA5vBVnfaPBOxyOhJ5K-2HV7",
  },
  {
    label: "Тәрбиеленушілердің білімін бағалау",
    color: "pink",
    href: "https://drive.google.com/drive/folders/17Zhcu62HuTKC9cXqNDDrkIszVAqylyZ9",
  },
  {
    label: "Сауалнама",
    color: "coral",
    href: "https://drive.google.com/drive/folders/1UihQF7BcZnh2OygSSpk829OjW7W6qkDl",
  },
  {
    label: "Бейнеконтент",
    color: "orange",
    href: "https://drive.google.com/drive/folders/1Ef0uZdl5x4fpkLWX6zEZlCS4vcIRgdPe",
  },
  {
    label: "ҚОСЫМШАЛАР",
    color: "blue",
    href: "https://drive.google.com/drive/folders/1ZeY05ARV-KY6tJc4kQTOlpCelKNCCKfZ",
  },
];

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1YAW7Aj9iOKnPbJtEmzax1c-JIIfEIlz2";

export default function Attestation() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg,#4D96FF,#AB6FDB)" }}
      >
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
                href={f.href}
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

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href={DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ExternalLink size={18} /> Google Drive-та ашу
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
