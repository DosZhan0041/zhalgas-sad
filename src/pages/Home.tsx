import { Link } from "react-router-dom";
import {
  Users,
  Utensils,
  Palette,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Music,
  Dumbbell,
  Globe,
  Leaf,
} from "lucide-react";

const STAR_POSITIONS = [
  { top: "14%", left: "6%", size: 22, color: "#FFD93D", delay: "0s" },
  { top: "72%", left: "13%", size: 16, color: "#FF9DE2", delay: "0.7s" },
  { top: "28%", left: "50%", size: 14, color: "#56CB8F", delay: "1.2s" },
  { top: "10%", left: "35%", size: 20, color: "#4D96FF", delay: "0.4s" },
  { top: "80%", left: "68%", size: 18, color: "#FFB300", delay: "1.0s" },
  { top: "50%", left: "44%", size: 12, color: "#AB6FDB", delay: "1.7s" },
];

const FLOWER_PETALS = [0, 60, 120, 180, 240, 300];
const SUN_RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

function HeroDecorations() {
  return (
    <div className="hero-deco">
      {/* ☀️ Spinning sun — top right */}
      <svg
        style={{
          top: "5%",
          right: "3%",
          animation: "kd-spin 22s linear infinite",
          opacity: 0.88,
        }}
        width="76"
        height="76"
        viewBox="0 0 76 76"
      >
        {SUN_RAYS.map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={38 + 22 * Math.cos(r)}
              y1={38 + 22 * Math.sin(r)}
              x2={38 + 33 * Math.cos(r)}
              y2={38 + 33 * Math.sin(r)}
              stroke="#FFD93D"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="38" cy="38" r="18" fill="#FFDA00" />
        <circle cx="31" cy="31" r="5" fill="rgba(255,255,255,0.28)" />
      </svg>

      {/* ☁️ Cloud 1 — top left, drifting */}
      <svg
        className="hide-sm"
        style={{
          top: "5%",
          left: "2%",
          animation: "kd-drift 7s ease-in-out infinite",
          opacity: 0.6,
        }}
        width="115"
        height="58"
        viewBox="0 0 115 58"
      >
        <g fill="white">
          <ellipse cx="57" cy="42" rx="48" ry="17" />
          <circle cx="31" cy="32" r="19" />
          <circle cx="57" cy="25" r="24" />
          <circle cx="85" cy="31" r="17" />
        </g>
      </svg>

      {/* ☁️ Cloud 2 — lower right, drifting reverse */}
      <svg
        className="hide-sm"
        style={{
          bottom: "23%",
          right: "3%",
          animation: "kd-drift-rev 9s ease-in-out infinite",
          opacity: 0.48,
        }}
        width="95"
        height="46"
        viewBox="0 0 95 46"
      >
        <g fill="white">
          <ellipse cx="47" cy="34" rx="39" ry="13" />
          <circle cx="26" cy="26" r="16" />
          <circle cx="47" cy="19" r="19" />
          <circle cx="70" cy="25" r="13" />
        </g>
      </svg>

      {/* 🌈 Rainbow — bottom centre */}
      <svg
        className="hide-sm"
        style={{ bottom: "4%", left: "28%", opacity: 0.38 }}
        width="290"
        height="115"
        viewBox="0 0 290 115"
      >
        <path
          d="M10,115 Q145,-22 280,115"
          stroke="#FF6B6B"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M22,115 Q145,-5  268,115"
          stroke="#FFB300"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M35,115 Q145,12  255,115"
          stroke="#56CB8F"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M47,115 Q145,29  243,115"
          stroke="#4D96FF"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60,115 Q145,46  230,115"
          stroke="#AB6FDB"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* ⭐ Stars — scattered, twinkling */}
      {STAR_POSITIONS.map((s, i) => (
        <svg
          key={i}
          className={i > 1 ? "hide-sm" : ""}
          style={{
            top: s.top,
            left: s.left,
            animation: `kd-twinkle 2.8s ease-in-out ${s.delay} infinite`,
          }}
          width={s.size}
          height={s.size}
          viewBox="0 0 24 24"
          fill={s.color}
        >
          <path d="M12 2l2.09 6.26L20 9.27l-4.91 4.79 1.16 6.76L12 17.77l-4.25 3.05 1.16-6.76L4 9.27l5.91-.01L12 2z" />
        </svg>
      ))}

      {/* 🎈 Balloon 1 — coral, right side floating */}
      <svg
        style={{
          top: "17%",
          right: "22%",
          animation: "kd-float 4s ease-in-out infinite",
          opacity: 0.82,
        }}
        width="46"
        height="72"
        viewBox="0 0 46 72"
      >
        <ellipse cx="23" cy="26" rx="18" ry="22" fill="#FF6B6B" />
        <path d="M23 48 L19 54 L27 54 Z" fill="#FF6B6B" />
        <path
          d="M23 54 Q28 62 22 70"
          stroke="#e05555"
          strokeWidth="1.6"
          fill="none"
        />
        <ellipse cx="15" cy="17" rx="5" ry="7" fill="rgba(255,255,255,0.3)" />
      </svg>

      {/* 🎈 Balloon 2 — blue, left side floating */}
      <svg
        className="hide-sm"
        style={{
          bottom: "28%",
          left: "3%",
          animation: "kd-float-twist 5s ease-in-out 1s infinite",
          opacity: 0.75,
        }}
        width="40"
        height="64"
        viewBox="0 0 46 72"
      >
        <ellipse cx="23" cy="26" rx="18" ry="22" fill="#4D96FF" />
        <path d="M23 48 L19 54 L27 54 Z" fill="#4D96FF" />
        <path
          d="M23 54 Q28 62 22 70"
          stroke="#3a7fd5"
          strokeWidth="1.6"
          fill="none"
        />
        <ellipse cx="15" cy="17" rx="5" ry="7" fill="rgba(255,255,255,0.3)" />
      </svg>

      {/* 🎈 Balloon 3 — green, left side floating */}
      <svg
        className="hide-sm"
        style={{
          top: "42%",
          left: "0%",
          animation: "kd-float 6s ease-in-out 2.5s infinite",
          opacity: 0.65,
        }}
        width="34"
        height="56"
        viewBox="0 0 46 72"
      >
        <ellipse cx="23" cy="26" rx="18" ry="22" fill="#56CB8F" />
        <path d="M23 48 L19 54 L27 54 Z" fill="#56CB8F" />
        <path
          d="M23 54 Q28 62 22 70"
          stroke="#3aa872"
          strokeWidth="1.6"
          fill="none"
        />
        <ellipse cx="15" cy="17" rx="5" ry="7" fill="rgba(255,255,255,0.3)" />
      </svg>

      {/* 🌸 Flower — bottom right */}
      <svg
        className="hide-sm"
        style={{
          bottom: "13%",
          right: "7%",
          animation: "kd-bounce 4s ease-in-out 0.5s infinite",
          opacity: 0.72,
        }}
        width="54"
        height="54"
        viewBox="0 0 60 60"
      >
        {FLOWER_PETALS.map((deg) => {
          const r = (deg * Math.PI) / 180;
          const cx = 30 + 12 * Math.cos(r);
          const cy = 30 + 12 * Math.sin(r);
          return (
            <ellipse
              key={deg}
              cx={cx}
              cy={cy}
              rx="8"
              ry="5"
              fill="#FF9DE2"
              transform={`rotate(${deg} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="30" cy="30" r="9" fill="#FFD93D" />
        <circle cx="27" cy="27" r="3" fill="rgba(255,255,255,0.4)" />
      </svg>

      {/* 🌊 White wave — bottom edge transition */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 64 }}
        >
          <path
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

type DecoItem = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  delay: string;
};

const CTA_STARS: DecoItem[] = [
  {
    top: "12%",
    left: "4%",
    size: 20,
    color: "rgba(255,255,255,0.55)",
    delay: "0s",
  },
  {
    top: "70%",
    left: "8%",
    size: 14,
    color: "rgba(255,255,255,0.4)",
    delay: "0.6s",
  },
  {
    top: "20%",
    right: "5%",
    size: 18,
    color: "rgba(255,255,255,0.5)",
    delay: "1.0s",
  },
  {
    top: "65%",
    right: "9%",
    size: 12,
    color: "rgba(255,255,255,0.45)",
    delay: "0.4s",
  },
  {
    top: "40%",
    left: "50%",
    size: 10,
    color: "rgba(255,255,255,0.35)",
    delay: "1.4s",
  },
];

const CTA_HEARTS: DecoItem[] = [
  {
    top: "30%",
    left: "2%",
    size: 22,
    color: "rgba(255,255,255,0.3)",
    delay: "0.3s",
  },
  {
    top: "55%",
    right: "3%",
    size: 18,
    color: "rgba(255,255,255,0.25)",
    delay: "1.1s",
  },
];

function CtaDecorations() {
  return (
    <div className="cta-deco">
      {CTA_STARS.map((s, i) => (
        <svg
          key={i}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            animation: `kd-twinkle 3s ease-in-out ${s.delay} infinite`,
          }}
          width={s.size}
          height={s.size}
          viewBox="0 0 24 24"
          fill={s.color}
        >
          <path d="M12 2l2.09 6.26L20 9.27l-4.91 4.79 1.16 6.76L12 17.77l-4.25 3.05 1.16-6.76L4 9.27l5.91-.01L12 2z" />
        </svg>
      ))}
      {CTA_HEARTS.map((h, i) => (
        <svg
          key={i}
          style={{
            top: h.top,
            left: h.left,
            right: h.right,
            animation: `kd-float 4s ease-in-out ${h.delay} infinite`,
          }}
          width={h.size}
          height={h.size}
          viewBox="0 0 24 24"
          fill={h.color}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
}

const features = [
  {
    icon: Users,
    color: "coral",
    title: "Жас топтары",
    desc: "1 жастан 6 жасқа дейінгі балалар үшін",
  },
  {
    icon: Utensils,
    color: "orange",
    title: "Дұрыс тамақтану",
    desc: "Күнде 5 рет, аллергия ескеріледі",
  },
  {
    icon: Palette,
    color: "purple",
    title: "Дамытушы сабақтар",
    desc: "Шығармашылық, музыка, спорт",
  },
  {
    icon: HeartPulse,
    color: "pink",
    title: "Медициналық бақылау",
    desc: "Штатта медбике жұмыс жасайды",
  },
  {
    icon: ShieldCheck,
    color: "teal",
    title: "Қауіпсіздік",
    desc: "Бақылау камерасы, қоршалған аула",
  },
];

const activities = [
  { icon: Palette, color: "purple", label: "Шығармашылық" },
  { icon: BookOpen, color: "blue", label: "Оқу" },
  { icon: Music, color: "pink", label: "Музыка" },
  { icon: Dumbbell, color: "coral", label: "Спорт" },
  { icon: Leaf, color: "green", label: "Табиғат" },
  { icon: Globe, color: "teal", label: "Тілдер" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-home">
        <HeroDecorations />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>«Жалғас» балабақшасы</h1>
              <p className="hero-subtitle">
                Балаңыздың бақытты, қауіпсіз және дамытушы ортада өсуін
                қамтамасыз етеміз. Кәсіби тәрбиешілер, жылы атмосфера, заманауи
                бағдарламалар.
              </p>
              <div className="hero-actions">
                <Link to="/admission" className="btn btn-outline-white">
                  Орынға жазылу
                </Link>
                <Link to="/about" className="btn btn-outline-white">
                  Біз туралы
                </Link>
              </div>
              {/* <div className="hero-stats">
                <div className="stat">
                  <span className="stat-num">200+</span>
                  <span className="stat-label">Балалар</span>
                </div>
                <div className="stat">
                  <span className="stat-num">15+</span>
                  <span className="stat-label">Тәрбиешілер</span>
                </div>
                <div className="stat">
                  <span className="stat-num">10</span>
                  <span className="stat-label">Жыл тәжірибе</span>
                </div>
              </div> */}
            </div>

            <div className="hero-cards-grid">
              {activities.map((a, i) => (
                <div key={i} className="hero-activity-card">
                  <div className={`ic ic-sm`}>
                    <a.icon size={20} />
                  </div>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-polka">
        <div className="container">
          <div className="section-header">
            <h2>Неліктен «Жалғас»?</h2>
            <p>Балаңызды бізге сеніп тапсыруға барлық негіздер бар</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div key={i} className={`feature-card fc-${f.color}`}>
                <div className={`ic ic-md ic-${f.color}`}>
                  <f.icon size={26} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      {/* <section className="section section-blue">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 280, height: 280, borderRadius: '50%',
                background: 'linear-gradient(135deg,#EBF3FF,#D6EAFF)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '1rem',
                boxShadow: '0 8px 40px rgba(77,150,255,0.15)'
              }}>
                <div className="ic ic-xl ic-blue" style={{ width: 100, height: 100 }}>
                  <BookOpen size={44} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--blue)' }}>2014 жылдан бері</span>
              </div>
            </div>
            <div className="about-text">
              <h2>Балабақша туралы</h2>
              <p>
                «Жалғас» балабақшасы 2014 жылдан бастап жұмыс жасайды. Біз мектепке дейінгі
                балаларды кешенді дамытуға, олардың физикалық, зияткерлік және эмоционалдық
                өсуіне ерекше мән береміз.
              </p>
              <p>
                Балабақшамызда жылы, үй атмосферасы сақталып, әрбір бала жеке тұрғыда
                қарастырылады. Тәрбиешілеріміз — өз ісінің шеберлері.
              </p>
              <Link to="/about" className="btn btn-primary">Толығырақ</Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* News */}
      {/* <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Соңғы жаңалықтар</h2>
            <p>Балабақшадағы өмірден хабар</p>
          </div>
          <div className="grid-3">
            {news.map((n, i) => (
              <div key={i} className="news-card" style={{ borderLeftColor: `var(--${n.color})` }}>
                <p className="news-date">{n.date}</p>
                <h3>{n.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="section cta-section" style={{ position: "relative" }}>
        <CtaDecorations />
        <div className="container">
          <div className="cta-box">
            <h2>Балаңызды бізге сеніп тапсырыңыз!</h2>
            <p>Бізге қоңырау шалыңыз</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn btn-outline-white">
                Байланыс
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
