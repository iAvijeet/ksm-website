"use client";

import { defaultSiteContent, SiteContent } from "@/lib/site-content";

const STORAGE_KEY = "kajaria-sanitary-mart-content";

export function loadSiteContent(): SiteContent {
  if (typeof window === "undefined") {
    return defaultSiteContent;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultSiteContent;
  }

  try {
    return JSON.parse(raw) as SiteContent;
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: SiteContent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function clearSiteContent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}
