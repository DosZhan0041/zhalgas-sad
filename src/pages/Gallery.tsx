import { useState } from "react";

const categories = [
  "Барлығы",
  "Ертеңгіліктер",
  "Ашық сабақтар",
  "Ұжым",
];

const photos = [
  {
    src: "/images/8-mart-1.jpg",
    cat: "Ертеңгіліктер",
    title: "8 Наурыз мерекесі",
    desc: "Кіші топ",
  },
  {
    src: "/images/8-mart-2.jpg",
    cat: "Ертеңгіліктер",
    title: "8 Наурыз мерекесі",
    desc: "Үлкен топ",
  },
  {
    src: "/images/akem-kuni.jpg",
    cat: "Ертеңгіліктер",
    title: "Әкем күні",
    desc: "Мереке іс-шарасы",
  },
  {
    src: "/images/vypusknoj.jpg",
    cat: "Ертеңгіліктер",
    title: "Қоштасу салтанаты",
    desc: "Мектеп алды тобы",
  },
  {
    src: "/images/kuz-1.jpg",
    cat: "Ертеңгіліктер",
    title: "Күзгі мереке",
    desc: "Күзгі билер",
  },
  {
    src: "/images/kuz-2.jpg",
    cat: "Ертеңгіліктер",
    title: "Күзгі мереке",
    desc: "Нәресте тобы",
  },
  {
    src: "/images/zhana-zhyl.jpg",
    cat: "Ертеңгіліктер",
    title: "Жаңа жыл 2026",
    desc: "Ақша қыздар биі",
  },
  {
    src: "/images/ulttyk.jpg",
    cat: "Ұжым",
    title: "Балабақша ұжымы",
    desc: "2024-2025 оқу жылы",
  },
  {
    src: "/images/pedagogtar-2.jpg",
    cat: "Ұжым",
    title: "Педагогтар кеңесі",
    desc: "Талқылау",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Барлығы");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "Барлығы" ? photos : photos.filter((p) => p.cat === active);

  return (
    <main>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg,#F06292,#AB6FDB)" }}
      >
        <div className="container">
          <h1>Фото галерея</h1>
          <p>Балабақшадағы қызықты сәттер</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`filter-btn ${active === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => setLightbox(p.src)}
                style={{ cursor: "pointer" }}
              >
                <div className="gallery-img">
                  <img
                    src={p.src}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="gallery-info">
                  <span className="gallery-cat">{p.cat}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" />
        </div>
      )}
    </main>
  );
}
