import {
  Award,
  FileCheck,
  Languages,
  Target,
  Smile,
  Handshake,
  Brain,
  Palette,
  Dumbbell,
  Leaf,
} from "lucide-react";

const advantages = [
  {
    icon: Award,
    color: "yellow",
    title: "Тәжірибелі ұжым",
    desc: "Орта тәжірибесі 10 жылдан асқан тәрбиешілер",
  },
  {
    icon: FileCheck,
    color: "blue",
    title: "Лицензия",
    desc: "Білім беру қызметіне мемлекеттік лицензия бар",
  },
  {
    icon: Languages,
    color: "teal",
    title: "Тіл дамыту",
    desc: "Қазақ, орыс тілдерінде оқыту, ағылшын тілі",
  },
  {
    icon: Target,
    color: "coral",
    title: "Жеке тәсіл",
    desc: "Әрбір балаға жеке даму жоспары жасалады",
  },
  {
    icon: Smile,
    color: "orange",
    title: "Жайлы орта",
    desc: "Үй жылулығы сақталған, қауіпсіз кеңістік",
  },
  {
    icon: Handshake,
    color: "green",
    title: "Ашықтық",
    desc: "Ата-аналармен тығыз байланыс, онлайн есеп",
  },
];

const directions = [
  {
    icon: Brain,
    color: "blue",
    title: "Зияткерлік дамыту",
    desc: "Математика, логика, сөйлеу тілін дамыту, оқу мен жазуға дайындық",
  },
  {
    icon: Palette,
    color: "purple",
    title: "Шығармашылық",
    desc: "Сурет салу, мүсін жасау, қол еңбегі, музыка",
  },
  {
    icon: Dumbbell,
    color: "coral",
    title: "Дене тәрбиесі",
    desc: "Таңертеңгі жаттығу, спорт сабақтары, серуен",
  },
  {
    icon: Leaf,
    color: "green",
    title: "Адамгершілік тәрбие",
    desc: "Ұлттық құндылықтар, достық, еңбексүйгіштік",
  },
];

export default function About() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg,#26C6DA,#4D96FF)" }}
      >
        <div className="container">
          <h1>Біз туралы</h1>
          <p>«Жалғас» балабақшасының миссиясы және құндылықтары</p>
        </div>
      </section>

      <section className="section section-yellow">
        <div className="container">
          <div className="section-header">
            <h2>Миссиямыз</h2>
          </div>
          <div className="mission-box">
            <p className="mission-text">
              «Жалғас» балабақшасының миссиясы — әрбір баланың жеке ерекшелігін
              ескере отырып, оны физикалық, зияткерлік, эмоционалдық және
              моральдық тұрғыда жан-жақты дамыту, мектепке деген дайындығын
              қамтамасыз ету.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Бағытымыз</h2>
          </div>
          <div className="grid-2">
            {directions.map((d, i) => (
              <div key={i} className="direction-card">
                <div className={`ic ic-md ic-${d.color}`}>
                  <d.icon size={26} />
                </div>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="section-header">
            <h2>Артықшылықтарымыз</h2>
          </div>
          <div className="grid-3">
            {advantages.map((a, i) => (
              <div key={i} className={`feature-card fc-${a.color}`}>
                <div className={`ic ic-md ic-${a.color}`}>
                  <a.icon size={26} />
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
