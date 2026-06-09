import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ background: "linear-gradient(135deg,#FF6B6B,#F06292)" }}
      >
        <div className="container">
          <h1>Байланыс</h1>
          <p>Бізбен хабарласыңыз — сұрақтарыңызға жауап береміз</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Байланыс ақпараты</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <div
                    className="ic ic-sm ic-coral"
                    style={{ width: 44, height: 44 }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3>Мекенжайы</h3>
                    <p>
                      Тарбағатай ауданы, Манырак ауылы,
                      <br />
                      Даулетбая к., 22
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    className="ic ic-sm ic-blue"
                    style={{ width: 44, height: 44 }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3>Телефон</h3>
                    <a href="tel:77715497112">+7-771-549-71-12</a>
                    <br />
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    className="ic ic-sm ic-green"
                    style={{ width: 44, height: 44 }}
                  >
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/77715497112">+7-771-549-71-12</a>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      Жауап беру: 08:00–20:00
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    className="ic ic-sm ic-purple"
                    style={{ width: 44, height: 44 }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:rakishov.66@mail.ru">rakishov.66@mail.ru</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div
                    className="ic ic-sm ic-orange"
                    style={{ width: 44, height: 44 }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3>Жұмыс уақыты</h3>
                    <p>Дүйсенбі – Жұма: 07:30 – 19:00</p>
                    <p>Сенбі, Жексенбі: демалыс</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-container">
              <h2>Карта</h2>
              <div className="map-placeholder">
                <div
                  className="ic ic-lg ic-coral"
                  style={{ width: 80, height: 80 }}
                >
                  <MapPin size={36} />
                </div>
                <p>Тарбағатай ауданы, Манырак ауылы, Даулетбая к., 22</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Тарбағатай ауданы, Шығыс Қазақстан облысы
                </p>
                <a
                  href="https://yandex.kz/maps/ru/29408/east-kazakhstan-district/geo/dauletbay_koshesi/5785829345/?ll=83.862617%2C47.430086&z=17.4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Navigation size={16} /> Google Maps-та ашу
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
