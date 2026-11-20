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
  { href: "#faq", label: "FAQs" },
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

/** FAQ answers use only facts already in the approved copy; the client confirms them before launch. */
export const faqs = [
  { q: "How does the valuation work?", a: "Send a few photos and details of your piece on WhatsApp. We’ll reply with a valuation range, subject to authentication. The valuation is free." },
  { q: "What do you buy?", a: "Handbags, watches and jewellery, including diamonds. If you’re not sure about a piece, send us a photo and ask." },
  { q: "Who collects my piece?", a: "A chauffeur in white gloves collects it from you. It’s kept safely stored while your account manager gathers bids. Nothing to carry, nowhere to go." },
  { q: "How do you check it’s authentic?", a: "Every piece is authenticated in-house before we invite offers from our buyer network." },
  { q: "How quickly will I be paid?", a: "Within 72 hours of your first message. Once you accept an offer, the funds reach your account within 48 hours." },
  { q: "What if I don’t like the offer?", a: "Selling with us is commitment-free. If you change your mind before the sale, your piece comes back to you." },
  { q: "Will my sale stay private?", a: "Yes. Shizuka was created for clients who wish to keep their privacy: your piece is offered to professional buyers in our network, not on a public marketplace." },
];
