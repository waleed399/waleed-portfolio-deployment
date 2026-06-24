/**
 * Site-wide config: update your name and CV filename here.
 * Put your CV PDF in public/ with the same name as cvFilename.
 */
export const siteConfig = {
  /** Your full name (hero, footer, metadata) */
  name: "Waleed Ali",
  /** CV PDF filename in public/ (e.g. "Jane_Doe_CV.pdf") */
  cvFilename: "Waleed Ali.pdf",
} as const;

/** Full URL path for the CV (used in links and download) */
export const cvPath = `/${siteConfig.cvFilename}`;
