import Link from "next/link";
import { SiteContent } from "@/lib/site-content";

type Props = {
  content: SiteContent;
};

function buildWhatsAppUrl(content: SiteContent) {
  const text = encodeURIComponent(content.whatsappMessage);
  return `https://wa.me/${content.whatsappNumber}?text=${text}`;
}

export function SiteHeader({ content }: Props) {
  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="eyebrow">Luxury Bath and Surface Dealership</span>
        <Link href="/" className="brand-name">
          {content.businessName}
        </Link>
      </div>
      <nav className="top-nav">
        <a href="#brands">Brands</a>
        <a href="#catalogues">Catalogues</a>
        <a href="#branches">Branches</a>
        <a href="#contact">Contact</a>
        <Link href="/admin" className="ghost-button">
          Control Panel
        </Link>
      </nav>
    </header>
  );
}

export function WhatsAppFloat({ content }: Props) {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppUrl(content)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}

export function WhatsAppButton({ content, className = "" }: Props & { className?: string }) {
  return (
    <a
      className={`primary-button ${className}`.trim()}
      href={buildWhatsAppUrl(content)}
      target="_blank"
      rel="noreferrer"
    >
      Chat on WhatsApp
    </a>
  );
}
