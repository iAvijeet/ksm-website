"use client";

import { useEffect, useState } from "react";
import { CatalogueViewer } from "@/components/catalogue-viewer";
import { SiteHeader, WhatsAppButton, WhatsAppFloat } from "@/components/site-shell";
import { defaultSiteContent, SiteContent } from "@/lib/site-content";
import { loadSiteContent } from "@/lib/storage";

export default function HomePage() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  return (
    <main className="page-shell">
      <SiteHeader content={content} />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Digital Showroom Presence</p>
          <h1>{content.heroTitle}</h1>
          <h2>{content.heroSubtitle}</h2>
          <p className="lead">{content.heroDescription}</p>
          <div className="hero-actions">
            <WhatsAppButton content={content} />
            <a className="ghost-button" href="#catalogues">
              Browse Catalogues
            </a>
          </div>
          <div className="trust-grid">
            {content.trustPoints.map((point) => (
              <div key={point} className="trust-chip">
                {point}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-tall">
            <span>Premium Tile Collections</span>
            <strong>Curated brand experience</strong>
          </div>
          <div className="hero-card card-wide">
            <span>Bathware and Fittings</span>
            <strong>Luxury-led enquiry journey</strong>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="about">
        <div className="section-head">
          <p className="eyebrow">Brand Presence</p>
          <h2>{content.aboutTitle}</h2>
        </div>
        <p className="section-copy">{content.aboutBody}</p>
      </section>

      <section className="section" id="brands">
        <div className="section-head">
          <p className="eyebrow">Featured Brands</p>
          <h2>Trusted names across tiles, bath spaces, finishes, and utility solutions.</h2>
        </div>
        <div className="brand-grid">
          {content.brands.map((brand) => (
            <article key={brand.name} className="brand-card">
              <p className="brand-nameplate">{brand.name}</p>
              <h3>{brand.tagline}</h3>
              <p>{brand.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-accent" id="categories">
        <div className="section-head">
          <p className="eyebrow">Product Landscape</p>
          <h2>Designed to help visitors discover what your showroom offers at a glance.</h2>
        </div>
        <div className="category-grid">
          {content.categories.map((category) => (
            <article key={category.name} className="category-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-head">
          <p className="eyebrow">Visual Story</p>
          <h2>A luxury-forward mood for customers, designers, and project buyers.</h2>
        </div>
        <div className="gallery-grid">
          {content.gallery.map((item) => (
            <figure key={item.title} className="gallery-card">
              {item.type === "video" ? (
                <video src={item.src} autoPlay muted loop playsInline />
              ) : (
                <img src={item.src} alt={item.title} />
              )}
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="catalogues">
        <div className="section-head">
          <p className="eyebrow">Built-In PDF Reader</p>
          <h2>Let customers view your catalogues directly on the website before they enquire.</h2>
        </div>
        <CatalogueViewer content={content} />
      </section>

      <section className="section" id="branches">
        <div className="section-head">
          <p className="eyebrow">Multiple Branches</p>
          <h2>Every showroom can be presented with contact details and map access.</h2>
        </div>
        <div className="branch-grid">
          {content.branches.map((branch) => (
            <article key={branch.name} className="branch-card">
              <p className="brand-nameplate">{branch.name}</p>
              <p>{branch.address}</p>
              <dl>
                <div>
                  <dt>Phone</dt>
                  <dd>{branch.phone}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{branch.hours}</dd>
                </div>
              </dl>
              <div className="branch-actions">
                <a className="ghost-button" href={branch.mapsUrl} target="_blank" rel="noreferrer">
                  Open Maps
                </a>
                <WhatsAppButton content={content} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="section-head">
          <p className="eyebrow">WhatsApp-First Enquiries</p>
          <h2>Use the website to start conversations, share options, and direct visitors to the right branch.</h2>
        </div>
        <div className="contact-banner">
          <div>
            <h3>Ready to guide a visitor to the right collection?</h3>
            <p>
              Every core action on the site points to WhatsApp so your team can answer faster and convert showroom
              interest into real visits.
            </p>
          </div>
          <WhatsAppButton content={content} />
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">KAJARIA SANITARY MART</p>
          <p>Luxury bath fixtures, tiles, paints, sinks, and curated showroom experiences.</p>
        </div>
        <a href="/admin" className="ghost-button">
          Open Control Panel
        </a>
      </footer>

      <WhatsAppFloat content={content} />
    </main>
  );
}
