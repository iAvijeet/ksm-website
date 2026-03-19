"use client";

import { useState } from "react";
import { SiteContent } from "@/lib/site-content";

type Props = {
  content: SiteContent;
};

export function CatalogueViewer({ content }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = content.catalogues[activeIndex];

  return (
    <section className="catalogue-panel">
      <div className="catalogue-list">
        {content.catalogues.map((catalogue, index) => (
          <button
            key={catalogue.title}
            type="button"
            className={`catalogue-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{catalogue.title}</span>
            <small>{catalogue.description}</small>
          </button>
        ))}
      </div>
      <div className="catalogue-frame-wrap">
        <div className="catalogue-frame-head">
          <div>
            <p className="eyebrow">Embedded Reader</p>
            <h3>{active.title}</h3>
          </div>
          <a href={active.fileUrl} target="_blank" rel="noreferrer" className="ghost-button">
            Open Full PDF
          </a>
        </div>
        <div className="catalogue-frame">
          {active.fileUrl.endsWith(".pdf") ? (
            <iframe title={active.title} src={active.fileUrl} />
          ) : (
            <div className="catalogue-placeholder">
              <strong>{active.coverLabel}</strong>
              <p>Update this catalogue entry from the control panel with a PDF file path or hosted PDF URL.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
