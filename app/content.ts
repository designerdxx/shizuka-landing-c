const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappText = "Hello Shizuka, I'd like a valuation for my ";

/** WhatsApp deep link for every "Message us" action; falls back to the contact section until a number is set. */
export const messageHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
  : "#contact";

export const socials = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#contact",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#contact",
};

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#buy", label: "What we buy" },
  { href: "#collect", label: "White-glove collection" },
  { href: "#about", label: "About us" },
  { href: "#contact", label: "FAQs" },
];

export const steps = [
  {
    title: "Request a valuation",
    body: "Send photos and details on WhatsApp or through our online form. We’ll reply with a valuation range, subject to authentication.",
    who: "Your photos",
  },
  { title: "Collect & authenticate", body: "We’ll arrange white-glove collection of your items and authenticate them in-house.", who: "Our chauffeur" },
  {
    title: "Offers from our buyer network",
    body: "Once your item is authenticated, we invite offers from professional buyers to get you a competitive price.",
    who: "Our buyers",
  },
  { title: "Accept the proposal", body: "If you’re happy with the best offer, accept it and the funds reach your account within 48 hours.", who: "Your decision" },
];

export const categories = [
  { label: "Handbags", action: "Value my handbag", image: "/images/cat-bags-sq.jpg" },
  { label: "Watches", action: "Value my watch", image: "/images/cat-watches-sq.jpg" },
  { label: "Jewellery", action: "Value my jewellery", image: "/images/cat-jewellery-sq.jpg" },
];
