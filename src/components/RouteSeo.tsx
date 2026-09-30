import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE = "https://www.avoramatcha.com";

const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Avora Matcha — Ceremonial-Grade Matcha | Experience the Eternal High",
    description: "Avora ceremonial-grade Japanese matcha for calm, balanced, long-lasting energy. Shop Ceremonial Matcha 30g, shipped across India.",
  },
  "/shop": {
    title: "Shop Ceremonial Matcha | Avora Matcha",
    description: "Shop Avora Ceremonial Matcha 30g — stone-ground, ceremonial-grade Japanese matcha. Free shipping in India on orders above ₹1500.",
  },
  "/product/ceremonial-matcha": {
    title: "Ceremonial Matcha 30g — ₹1199 | Avora Matcha",
    description: "Avora Ceremonial Matcha 30g: vibrant, smooth, ceremonial-grade Japanese matcha for balanced energy. ₹1199, shipped across India.",
  },
  "/founders": {
    title: "Founders' Note | Avora Matcha",
    description: "Why we started Avora: a note from our founders on matcha, ritual and the pursuit of calm, sustained energy.",
  },
  "/refund-policy": {
    title: "Refunds & Returns Policy | Avora Matcha",
    description: "Read Avora Matcha's refund and returns policy, including eligibility and how to request a refund.",
  },
  "/shipping-policy": {
    title: "Shipping Policy | Avora Matcha",
    description: "Avora ships across India. Orders dispatch in 5–7 business days; free shipping above ₹1500, ₹50 flat fee below.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Avora Matcha",
    description: "How Avora Matcha collects, uses and protects your personal information.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Avora Matcha",
    description: "The terms and conditions for using the Avora Matcha website and purchasing our products.",
  },
};

const RouteSeo = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const page = pages[path];
  if (!page) return null;
  const url = `${BASE}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </Helmet>
  );
};

export default RouteSeo;
