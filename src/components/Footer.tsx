import { Link } from "react-router-dom";
import {
  Flower2,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Camera,
  Globe,
  PlayCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo-wrap">
            <div className="footer-logo-icon">
              <Flower2 size={22} />
            </div>
            <span className="footer-logo-text">Жалғас</span>
          </div>
          <p>Балаңыздың бақытты балалығы — біздің басты мақсатымыз</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Camera size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Globe size={16} />
            </a>
            <a href="#" aria-label="YouTube">
              <PlayCircle size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Сілтемелер</h4>
          <ul>
            <li>
              <Link to="/about">Біз туралы</Link>
            </li>
            <li>
              <Link to="/team">Ұжым</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
            <li>
              <Link to="/attestation">Аттестация</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Ата-аналарға</h4>
          <ul>
            <li>
              <Link to="/admission">Қабылдау</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Байланыс</h4>
          <div className="footer-contact-item">
            <MapPin size={15} />
            <span>Тарбағатай ауданы, Манырак ауылы, Даулетбая к., 22</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={15} />
            <a href="tel:77234424467">8-723-4-424467</a>
          </div>
          <div className="footer-contact-item">
            <MessageCircle size={15} />
            <a href="https://wa.me/77234424467">WhatsApp</a>
          </div>
          <div className="footer-contact-item">
            <Mail size={15} />
            <a href="mailto:rakishov.66@mail.ru">rakishov.66@mail.ru</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 «Жалғас» жеке меншік сәби балабақшасы. Барлық құқықтар
          қорғалған.
        </p>
      </div>
    </footer>
  );
}
