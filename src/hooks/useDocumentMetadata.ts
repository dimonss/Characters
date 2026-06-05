import { useEffect } from 'react';

/**
 * A custom hook to dynamically update document title and SEO/social metadata tags
 * @param title The localized page title
 * @param description The localized page description
 */
export function useDocumentMetadata(title: string, description: string) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper to update meta content
    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="twitter:title"]', title);
    updateMeta('meta[property="twitter:description"]', description);
  }, [title, description]);
}
