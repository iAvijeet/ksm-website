"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { defaultSiteContent, SiteContent } from "@/lib/site-content";
import { clearSiteContent, loadSiteContent, saveSiteContent } from "@/lib/storage";

type SectionCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <div>
          <p className="eyebrow">Manage</p>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function updateArrayItem<T>(items: T[], index: number, next: T) {
  return items.map((item, itemIndex) => (itemIndex === index ? next : item));
}

export function AdminDashboard() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [status, setStatus] = useState("Control panel ready. Changes save to your browser for now.");

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  const formattedJson = useMemo(() => JSON.stringify(content, null, 2), [content]);

  function handleSave() {
    saveSiteContent(content);
    setStatus("Saved locally in this browser. Connect Supabase next for shared online updates.");
  }

  function handleReset() {
    clearSiteContent();
    setContent(defaultSiteContent);
    setStatus("Content reset to the seeded showroom version.");
  }

  function handleImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    file.text().then((text) => {
      try {
        const next = JSON.parse(text) as SiteContent;
        setContent(next);
        setStatus("Imported JSON into the control panel. Save to keep it in your browser.");
      } catch {
        setStatus("Import failed. Please upload a valid JSON file.");
      }
    });
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <p className="eyebrow">Dashboard</p>
        <h1>Website Control Panel</h1>
        <p>
          Update text, brands, branch details, gallery items, and catalogue links from one place.
        </p>
        <div className="admin-actions">
          <button type="button" className="primary-button" onClick={handleSave}>
            Save Changes
          </button>
          <button type="button" className="ghost-button" onClick={handleReset}>
            Reset Seed Data
          </button>
          <label className="ghost-button file-button">
            Import JSON
            <input type="file" accept="application/json" onChange={handleImport} />
          </label>
          <a
            className="ghost-button"
            href={`data:application/json;charset=utf-8,${encodeURIComponent(formattedJson)}`}
            download="kajaria-sanitary-mart-content.json"
          >
            Export JSON
          </a>
        </div>
        <div className="status-box">{status}</div>
        <div className="admin-note">
          <strong>Supabase-ready:</strong> once Node is installed and Supabase keys are added, this panel can be upgraded
          from browser-local saves to online shared content storage.
        </div>
      </aside>

      <div className="admin-main">
        <SectionCard
          title="Business Details"
          description="Core identity, hero copy, and WhatsApp enquiry details."
        >
          <div className="admin-grid">
            <label>
              Business Name
              <input
                value={content.businessName}
                onChange={(event) =>
                  setContent({ ...content, businessName: event.target.value })
                }
              />
            </label>
            <label>
              WhatsApp Number
              <input
                value={content.whatsappNumber}
                onChange={(event) =>
                  setContent({ ...content, whatsappNumber: event.target.value })
                }
              />
            </label>
            <label className="full-span">
              Hero Title
              <input
                value={content.heroTitle}
                onChange={(event) => setContent({ ...content, heroTitle: event.target.value })}
              />
            </label>
            <label className="full-span">
              Hero Subtitle
              <input
                value={content.heroSubtitle}
                onChange={(event) =>
                  setContent({ ...content, heroSubtitle: event.target.value })
                }
              />
            </label>
            <label className="full-span">
              Hero Description
              <textarea
                rows={4}
                value={content.heroDescription}
                onChange={(event) =>
                  setContent({ ...content, heroDescription: event.target.value })
                }
              />
            </label>
            <label className="full-span">
              WhatsApp Prefilled Message
              <textarea
                rows={3}
                value={content.whatsappMessage}
                onChange={(event) =>
                  setContent({ ...content, whatsappMessage: event.target.value })
                }
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard
          title="Brands"
          description="Adjust the featured brand portfolio and supporting descriptions."
        >
          <div className="stack-list">
            {content.brands.map((brand, index) => (
              <div className="admin-grid boxed-grid" key={`${brand.name}-${index}`}>
                <label>
                  Brand Name
                  <input
                    value={brand.name}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        brands: updateArrayItem(content.brands, index, {
                          ...brand,
                          name: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  Tagline
                  <input
                    value={brand.tagline}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        brands: updateArrayItem(content.brands, index, {
                          ...brand,
                          tagline: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label className="full-span">
                  Description
                  <textarea
                    rows={3}
                    value={brand.description}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        brands: updateArrayItem(content.brands, index, {
                          ...brand,
                          description: event.target.value
                        })
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Catalogues"
          description="Update PDF file paths or hosted brochure URLs for the embedded catalogue reader."
        >
          <div className="stack-list">
            {content.catalogues.map((catalogue, index) => (
              <div className="admin-grid boxed-grid" key={`${catalogue.title}-${index}`}>
                <label>
                  Catalogue Title
                  <input
                    value={catalogue.title}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        catalogues: updateArrayItem(content.catalogues, index, {
                          ...catalogue,
                          title: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  PDF URL or Path
                  <input
                    value={catalogue.fileUrl}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        catalogues: updateArrayItem(content.catalogues, index, {
                          ...catalogue,
                          fileUrl: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label className="full-span">
                  Description
                  <textarea
                    rows={2}
                    value={catalogue.description}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        catalogues: updateArrayItem(content.catalogues, index, {
                          ...catalogue,
                          description: event.target.value
                        })
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Branch Locations"
          description="Manage all showroom branches, phone numbers, hours, and maps links."
        >
          <div className="stack-list">
            {content.branches.map((branch, index) => (
              <div className="admin-grid boxed-grid" key={`${branch.name}-${index}`}>
                <label>
                  Branch Name
                  <input
                    value={branch.name}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        branches: updateArrayItem(content.branches, index, {
                          ...branch,
                          name: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  Phone
                  <input
                    value={branch.phone}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        branches: updateArrayItem(content.branches, index, {
                          ...branch,
                          phone: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label className="full-span">
                  Address
                  <textarea
                    rows={3}
                    value={branch.address}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        branches: updateArrayItem(content.branches, index, {
                          ...branch,
                          address: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  Hours
                  <input
                    value={branch.hours}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        branches: updateArrayItem(content.branches, index, {
                          ...branch,
                          hours: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  Google Maps Link
                  <input
                    value={branch.mapsUrl}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        branches: updateArrayItem(content.branches, index, {
                          ...branch,
                          mapsUrl: event.target.value
                        })
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Gallery"
          description="Swap image or video links to refresh the luxury presentation over time."
        >
          <div className="stack-list">
            {content.gallery.map((item, index) => (
              <div className="admin-grid boxed-grid" key={`${item.title}-${index}`}>
                <label>
                  Title
                  <input
                    value={item.title}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        gallery: updateArrayItem(content.gallery, index, {
                          ...item,
                          title: event.target.value
                        })
                      })
                    }
                  />
                </label>
                <label>
                  Media Type
                  <select
                    value={item.type}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        gallery: updateArrayItem(content.gallery, index, {
                          ...item,
                          type: event.target.value as "image" | "video"
                        })
                      })
                    }
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </label>
                <label className="full-span">
                  Source URL
                  <input
                    value={item.src}
                    onChange={(event) =>
                      setContent({
                        ...content,
                        gallery: updateArrayItem(content.gallery, index, {
                          ...item,
                          src: event.target.value
                        })
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
