import { useEffect } from 'react';

function ensureMeta(name, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}='${name}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  return tag;
}

export default function SeoHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      const ogt = ensureMeta('og:title', 'property');
      ogt.setAttribute('content', ogTitle || title);
      const twt = ensureMeta('twitter:title', 'name');
      twt.setAttribute('content', ogTitle || title);
    }

    if (description) {
      const desc = ensureMeta('description', 'name');
      desc.setAttribute('content', description);
      const ogd = ensureMeta('og:description', 'property');
      ogd.setAttribute('content', ogDescription || description);
      const twd = ensureMeta('twitter:description', 'name');
      twd.setAttribute('content', ogDescription || description);
    }

    const ogType = ensureMeta('og:type', 'property');
    ogType.setAttribute('content', 'website');

    if (ogImage) {
      const ogi = ensureMeta('og:image', 'property');
      ogi.setAttribute('content', ogImage);
      const twi = ensureMeta('twitter:image', 'name');
      twi.setAttribute('content', ogImage);
      const twc = ensureMeta('twitter:card', 'name');
      twc.setAttribute('content', 'summary_large_image');
    }

    if (canonical) {
      let link = document.head.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, canonical]);

  return null;
}
