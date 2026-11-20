/* eslint-disable @next/next/no-img-element -- static export serves pre-sized images as-is */
import type { CSSProperties } from "react";
import { asset } from "./asset";
import { categories, messageHref, socials, steps } from "./content";
import { Faq } from "./_components/Faq";
import { Header } from "./_components/Header";
import { Ambient } from "./_components/Ambient";
import { HeroReady } from "./_components/HeroReady";
import { Reveal } from "./_components/Reveal";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 10h14M11.5 4.5 17 10l-5.5 5.5" />
    </svg>
  );
}

function More({ href, children }: { href: string; children: string }) {
  return (
    <div className="more-row" data-r="">
      <a className="more" href={href}>
        <span>{children}</span>
        <i>
          <Arrow />
        </i>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="ah">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="h1">
          <div className="glow" aria-hidden="true">
            <img className="g1" src={asset("/images/glow-hero.jpg")} alt="" />
            <img className="g2" src={asset("/images/glow-hero-2.jpg")} alt="" />
          </div>
          <div className="hero-copy">
            <h1 className="h1" id="h1">
              <span className="ln" style={{ "--i": 0 } as CSSProperties}>
                <span>Sell your luxury,</span>
              </span>
              <span className="ln" style={{ "--i": 1 } as CSSProperties}>
                <span>quietly.</span>
              </span>
            </h1>
            <p className="hero-sub">
              Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private offers
              on your behalf.
            </p>
            <div className="acts">
              <a className="pill pill-solid" href={messageHref}>
                Message us on WhatsApp
              </a>
              <a className="pill pill-line" href="#how">
                How it works
              </a>
            </div>
            <ol className="beats" aria-label="How a sale moves">
              <li>
                <b>Today</b>Send photos
              </li>
              <li>
                <b>Next</b>Collected &amp; authenticated
              </li>
              <li>
                <b>Within 72 h</b>Private offers, cash
              </li>
            </ol>
          </div>
          <figure className="piece">
            <img
              src={asset("/images/hero.jpg")}
              alt="A woven leather handbag beside a hand wearing a diamond ring and gold watch"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              <span>
                <span lang="ja">静か</span> · shizuka
              </span>
              <span>‘quiet’ in Japanese</span>
            </figcaption>
          </figure>
        </section>

        <section className="sec split" id="about" aria-labelledby="about-h">
          <div data-r="">
            <h2 className="lab" id="about-h">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <rect x="1" y="1" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="6" y="6" width="8" height="8" rx="1.5" fill="currentColor" />
              </svg>
              From our founder
            </h2>
            <figure className="person">
              <img src={asset("/images/founder-portrait.jpg")} alt="Shivam Agarwal, founder and CEO of Shizuka Luxury" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div data-r="" style={d(60)}>
            <p className="big">
              “Shizuka was created because I saw the need for a quick, discreet trading platform, perfect for my clients who wish to maintain
              their privacy and release funds at the moment they’re needed.
            </p>
            <p className="big">
              <span className="dim">Shizuka means ‘quiet’ in Japanese. That’s how we do business.”</span>
            </p>
            <div className="after">
              <small>Shivam Agarwal, Founder &amp; CEO</small>
              <a className="pill pill-line" href="#about">
                About us
              </a>
            </div>
          </div>
        </section>

        <section className="sec" id="buy" aria-labelledby="buy-h">
          <div className="split" data-r="">
            <h2 className="lab" id="buy-h">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" strokeWidth="3.5" />
              </svg>
              What we buy
            </h2>
            <p className="big">
              Handbags, watches and jewellery.{" "}
              <span className="dim">Send a few photos of your piece and we’ll reply with a valuation range, subject to authentication.</span>
            </p>
          </div>
          <p className="lead-in" data-r="">
            Choose what you’re selling
          </p>
          <div className="cards">
            {categories.map((cat, n) => (
              <a className="card" href={messageHref} data-r="" style={d(n * 40)} key={cat.label}>
                <img src={asset(cat.image)} alt="" loading="lazy" decoding="async" />
                <span className="card-t">{cat.label}</span>
                <span className="card-m">
                  {cat.action}
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
          <More href={messageHref}>Ask about another piece</More>
        </section>

        <section className="sec" id="how" aria-labelledby="how-h">
          <div className="split" data-r="">
            <h2 className="lab" id="how-h">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 1.75a8.25 8.25 0 0 1 0 16.5z" fill="currentColor" />
              </svg>
              How it works
            </h2>
            <p className="big">
              Start with a few photos.{" "}
              <span className="dim">We manage the rest and bring you the best possible trade price. You decide whether to sell.</span>
            </p>
          </div>
          <ol className="steps">
            {steps.map((step, n) => (
              <li className="step" data-r="" style={d(n * 40)} key={step.title}>
                <h3 className="step-t">{step.title}</h3>
                <div className="step-r">
                  <p>{step.body}</p>
                  <span>{step.who}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="sec" id="collect" aria-labelledby="collect-h">
          <div className="split" data-r="">
            <h2 className="lab" id="collect-h">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 1.5 18.5 10 10 18.5 1.5 10z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="10" r="2.5" fill="currentColor" />
              </svg>
              Selling can be effortless
            </h2>
            <p className="big">
              Your luxury pieces are collected by a chauffeur in white gloves and safely stored while your account manager gathers bids.{" "}
              <span className="dim">No long wait for a sale. No post-sale complaints.</span>
            </p>
          </div>
          <div className="wide" data-r="">
            <img src={asset("/images/chauffeur-crop.jpg")} alt="A Shizuka chauffeur in a dark suit waiting beside a black car" loading="lazy" decoding="async" />
            <div className="wide-top">
              <div>
                <h3>White-glove collection</h3>
                <p>Nothing to carry, nowhere to go.</p>
              </div>
              <span>Dubai</span>
            </div>
          </div>
          <More href={messageHref}>Get a free valuation</More>
        </section>

        <section className="sec split rq" aria-labelledby="rev-h">
          <h2 className="lab" id="rev-h" data-r="">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="6" cy="10" r="4.25" fill="currentColor" />
              <circle cx="14.5" cy="10" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Client words
          </h2>
          {/* SAMPLE quote for layout only, labelled on the page. Replace with an approved client review before launch. */}
          <figure data-r="" style={d(60)}>
            <blockquote>
              “I wanted to sell a watch without anyone knowing. One WhatsApp message, a chauffeur at my door the next day, and the money
              was in my account two days after I accepted the offer. <span className="dim">Quiet is exactly the word.”</span>
            </blockquote>
            <p>
              <b>Layla M.</b> · Sold a watch <span className="sample">Sample copy</span>
            </p>
          </figure>
        </section>

        <section className="sec split" id="faq" aria-labelledby="faq-h">
          <div data-r="">
            <h2 className="lab" id="faq-h">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7.6 7.7a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="14.4" r="1" fill="currentColor" />
              </svg>
              Questions
            </h2>
            <p className="faq-note">
              Anything else, <a href={messageHref}>ask us on WhatsApp</a>.
            </p>
          </div>
          <Faq />
        </section>
      </main>

      {/* One glow behind the closing band and the footer, so the light runs to the bottom of the page. */}
      <div className="end">
        <div className="glow" aria-hidden="true">
          <img className="g1" src={asset("/images/glow-close.jpg")} alt="" loading="lazy" decoding="async" />
          <img className="g2" src={asset("/images/glow-close-2.jpg")} alt="" loading="lazy" decoding="async" />
        </div>
        <section className="close" aria-labelledby="cta-h">
          <div data-r="">
            <h2 id="cta-h">Start your private sale.</h2>
            <p>Send a few photographs and get a valuation range. Our buyers are waiting to bid on your piece.</p>
            <div className="acts">
              <a className="pill pill-solid" href={messageHref}>
                Message us on WhatsApp
              </a>
              <a className="pill pill-line" href="#faq">
                Read the FAQs
              </a>
            </div>
          </div>
        </section>

        <footer className="ft" id="contact">
          <span>© 2026 Shizuka Luxury</span>
          <span>[Street address], DIFC, Dubai, UAE · +971 [phone number]</span>
          <a href="#contact">Privacy</a>
          <a href="#contact">Terms &amp; Conditions</a>
          <a href={socials.linkedin}>LinkedIn</a>
          <a href={socials.instagram}>Instagram</a>
        </footer>
      </div>
      <HeroReady selector=".hero" />
      <Ambient selector=".glow" />
      <Reveal root=".ah" />
    </div>
  );
}
