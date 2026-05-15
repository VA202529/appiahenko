import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Menu, X, Check, Star, Instagram, Linkedin, ChevronDown, ArrowRight, Play } from "lucide-react";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatbotWidget } from "@/components/ChatbotWidget";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Appiah & Ko. — Social Media Management Amsterdam" },
      { name: "description", content: "Wij runnen jouw socials, zodat jij je kunt focussen op je bedrijf. Een Amsterdams social media bureau." },
    ],
  }),
});

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#proof", label: "Proof" },
  { href: "#addons", label: "Add-ons" },
  { href: "#over", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/85 backdrop-blur-xl border-b border-border-dark"
            : "bg-bg-dark/40 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display italic text-bg-light text-2xl tracking-tight">
            Appiah & Ko.
          </a>
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-wide text-text-muted hover:text-bg-light transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[13px] border border-border-dark text-bg-light rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Gratis kennismaken <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            className="md:hidden text-bg-light"
            onClick={() => setOpen(true)}
            aria-label="Menu openen"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bg-dark animate-fade-in flex flex-col">
          <div className="h-16 px-6 flex items-center justify-between">
            <span className="font-display italic text-bg-light text-2xl">Appiah & Ko.</span>
            <button onClick={() => setOpen(false)} aria-label="Menu sluiten">
              <X className="w-6 h-6 text-bg-light" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-bg-light text-4xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 bg-gold text-bg-dark text-sm rounded-sm"
            >
              Gratis kennismaken →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center bg-bg-dark text-bg-light overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p
          className="reveal text-[11px] tracking-[0.25em] uppercase text-gold font-sans"
          data-delay="0"
        >
          Social Media Management · Amsterdam
        </p>
        <h1
          className="reveal mt-8 font-display text-[56px] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
          data-delay="150"
        >
          Wij runnen
          <br />
          <span className="italic">jouw socials.</span>
        </h1>
        <p
          className="reveal mt-8 text-[15px] md:text-base text-bg-light/70 max-w-md mx-auto"
          data-delay="300"
        >
          Zodat jij je kunt focussen op je bedrijf.
        </p>
        <div className="reveal mx-auto mt-10 w-12 h-px bg-gold" data-delay="450" />
        <p
          className="reveal mt-8 font-display italic text-xl md:text-[22px] text-bg-light/75"
          data-delay="600"
        >
          "We run your socials. You run your business."
        </p>
        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" data-delay="750">
          <a
            href="#contact"
            className="px-7 py-3.5 bg-gold text-bg-dark text-sm font-medium rounded-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Gratis kennismaken
          </a>
          <a
            href="#diensten"
            className="px-7 py-3.5 border border-bg-light/30 text-bg-light text-sm rounded-sm hover:border-bg-light transition-colors"
          >
            Bekijk pakketten
          </a>
        </div>
      </div>
      <a
        href="#over"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bg-light/40 animate-bounce-slow"
        aria-label="Scroll omlaag"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="over" className="bg-bg-light text-bg-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="reveal text-[11px] tracking-[0.25em] uppercase text-bg-dark/50">Wie wij zijn</p>
          <h2 className="reveal mt-5 font-display text-4xl md:text-[44px] leading-[1.1]" data-delay="100">
            Een bureau gebouwd op resultaat.
          </h2>
          <p className="reveal mt-7 text-[15px] leading-[1.8] text-bg-dark/75 max-w-xl" data-delay="200">
            Appiah & Ko. is een Amsterdams social media bureau opgericht door Mikolaj Koloczek en Yaiden Appiah Kubi. Wij combineren social strategie, creatieve content en technologie om jouw merk online te laten groeien. Van contentplanning tot community management — wij zorgen dat jouw socials iedere dag werken, terwijl jij doet waar jij goed in bent.
          </p>
          <div className="reveal mt-10 grid grid-cols-3 gap-4 max-w-lg" data-delay="300">
            {[
              ["5+", "Jaar ervaring"],
              ["6", "Platformen"],
              ["100%", "Op tijd"],
            ].map(([k, v]) => (
              <div key={v} className="border border-border-light p-4 rounded-sm">
                <div className="font-display text-3xl">{k}</div>
                <div className="text-xs text-bg-dark/60 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal flex justify-center md:justify-end" data-delay="200">
          <div
            className="bg-bg-dark text-bg-light border border-gold rounded-sm p-10 w-full max-w-sm shadow-2xl"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="font-display text-3xl">@appiahenko</div>
            <div className="my-5 h-px bg-gold/40" />
            <div className="text-[13px] tracking-wide text-bg-light/80">Social Media Management</div>
            <div className="text-[13px] tracking-wide text-text-muted mt-1">Amsterdam · NL</div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Pkg = {
  name: string;
  badgeColor: string;
  price: string;
  tagline: string;
  features: { text: string; star?: boolean }[];
  ideal: string;
  cta: string;
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "STARTER",
    badgeColor: "#1D9E75",
    price: "€249",
    tagline: "Voor starters en lokale ondernemers die online zichtbaar willen worden.",
    features: [
      { text: "2 platforms naar keuze" },
      { text: "12 posts per maand (3× per week)" },
      { text: "Professionele captions in NL of EN" },
      { text: "Hashtag strategie (20 tags per post)" },
      { text: "Maandelijkse contentkalender" },
      { text: "Goedkeuringsflow via WhatsApp" },
      { text: "1× maandrapport (PDF)" },
    ],
    ideal: "kappers, nagelstudio's, horeca, zzp'ers",
    cta: "Starter kiezen",
  },
  {
    name: "GROWTH",
    badgeColor: "#d4a84b",
    price: "€449",
    tagline: "Voor bedrijven klaar om te schalen op meerdere platformen.",
    features: [
      { text: "3 platforms naar keuze" },
      { text: "20 posts per maand" },
      { text: "Stories 3× per week" },
      { text: "1 branded reel per maand", star: true },
      { text: "Captions + CTA's per post" },
      { text: "Community management (reacties + DMs)", star: true },
      { text: "Maandrapport + 30 min strategie call" },
      { text: "Contentkalender + goedkeuringsflow" },
    ],
    ideal: "restaurants, boutiques, salons, MKB",
    cta: "Growth kiezen",
    featured: true,
  },
  {
    name: "PREMIUM",
    badgeColor: "#9F8FEF",
    price: "€749",
    tagline: "Voor merken die het maximale uit hun socials willen halen.",
    features: [
      { text: "4+ platforms" },
      { text: "Onbeperkt posts" },
      { text: "Stories dagelijks" },
      { text: "2 branded reels per maand", star: true },
      { text: "Volledig DM + reactiebeheer", star: true },
      { text: "Meta Ads beheer inbegrepen (adspend excl.)", star: true },
      { text: "60 min strategiesessie per maand", star: true },
      { text: "Prioriteit support (reactie binnen 2 uur)" },
      { text: "Kwartaal contentstrategie review" },
    ],
    ideal: "ketens, gevestigde merken, groei-gerichte bedrijven",
    cta: "Premium kiezen",
  },
];

function Packages() {
  return (
    <section id="diensten" className="bg-bg-dark text-bg-light py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-[11px] tracking-[0.25em] uppercase text-gold">Onze pakketten</p>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl" data-delay="100">
            Kies het pakket dat bij jou past.
          </h2>
          <p className="reveal mt-5 text-[14px] text-text-muted" data-delay="200">
            Maandelijks opzegbaar · Geen opstartkosten · Onboarding call inbegrepen
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-sm p-8 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                p.featured
                  ? "border-[1.5px] border-gold bg-gold/[0.05]"
                  : "border border-border-dark bg-white/[0.03]"
              }`}
              data-delay={`${i * 80}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-bg-dark text-[10px] tracking-[0.2em] uppercase rounded-sm">
                  Meest gekozen
                </div>
              )}
              <div
                className="text-[11px] tracking-[0.25em] font-medium"
                style={{ color: p.badgeColor }}
              >
                {p.name}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[52px] leading-none">{p.price}</span>
                <span className="text-text-muted text-sm">/mnd</span>
              </div>
              <p className="mt-3 text-[13px] italic text-text-muted leading-relaxed">{p.tagline}</p>

              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-[13.5px] text-bg-light/85">
                    {f.star ? (
                      <Star className="w-4 h-4 mt-0.5 text-gold fill-gold flex-shrink-0" />
                    ) : (
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: p.badgeColor }}
                      />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[11px] text-bg-light/40">Ideaal voor: {p.ideal}</p>

              <a
                href="#contact"
                className={`mt-6 text-center px-5 py-3 rounded-sm text-sm transition-all hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gold text-bg-dark font-medium"
                    : "border border-bg-light/30 text-bg-light hover:border-bg-light"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-text-muted mt-10">
          Adspend altijd exclusief · Content wordt altijd eerst door jou goedgekeurd voor posting
        </p>
      </div>
    </section>
  );
}

type ProofItem = {
  client: string;
  label: string;
  type: "Video" | "Slideshow";
  src: string;
  poster?: string;
};

const proofItems: ProofItem[] = [
  { client: "Meyers Automotive", label: "TikTok Video", type: "Video", src: "/proof/meyers-video-1.mp4", poster: "/proof/meyers-video-1.jpg" },
  { client: "Meyers Automotive", label: "TikTok Video", type: "Video", src: "/proof/meyers-video-2.mp4", poster: "/proof/meyers-video-2.jpg" },
  { client: "Meyers Automotive", label: "TikTok Slideshow", type: "Slideshow", src: "/proof/meyers-slideshow-1.mp4", poster: "/proof/meyers-slideshow-1.jpg" },
  { client: "Meyers Automotive", label: "TikTok Slideshow", type: "Slideshow", src: "/proof/meyers-slideshow-2.mp4", poster: "/proof/meyers-slideshow-2.jpg" },
  { client: "Van Appiah", label: "Branded Video", type: "Video", src: "/proof/vanappiah-video-1.mp4", poster: "/proof/vanappiah-video-1.jpg" },
];

function ProofCard({ item, index }: { item: ProofItem; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="reveal group relative aspect-[9/16] rounded-sm overflow-hidden bg-bg-dark border border-border-dark"
      data-delay={`${index * 90}`}
    >
      {!error ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
          onError={() => setError(true)}
          onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
          onClick={(e) => {
            const v = e.currentTarget;
            v.paused ? v.play().catch(() => {}) : v.pause();
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bg-dark via-[#141414] to-bg-dark">
          <div className="text-center px-6">
            <div className="font-display italic text-3xl text-gold/60">{item.client}</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-text-muted mt-3">
              {item.type} · binnenkort
            </div>
          </div>
        </div>
      )}

      {!loaded && !error && (
        <div className="absolute inset-0 bg-bg-dark/50 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-8 h-8 text-gold/70" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg-dark/95 via-bg-dark/60 to-transparent">
        <div className="text-[10px] tracking-[0.2em] uppercase text-gold">{item.type}</div>
        <div className="font-display text-lg text-bg-light mt-1 leading-tight">{item.client}</div>
        <div className="text-[11px] text-text-muted mt-0.5">{item.label}</div>
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section id="proof" className="bg-bg-dark text-bg-light py-28 lg:py-36 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal text-[11px] tracking-[0.25em] uppercase text-gold">Proof</p>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl" data-delay="100">
            Werk dat al voor klanten <span className="italic">draait</span>.
          </h2>
          <p className="reveal mt-5 text-[14px] text-text-muted max-w-lg" data-delay="200">
            Een greep uit recente content gemaakt voor onze klanten op TikTok en Instagram. Hover of tik om af te spelen.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {proofItems.map((item, i) => (
            <ProofCard key={item.src} item={item} index={i} />
          ))}
        </div>

        <p className="reveal mt-10 text-[12px] text-text-muted" data-delay="400">
          * Cijfers en cases beschikbaar op aanvraag.
        </p>
      </div>
    </section>
  );
}

const addons = [
  ["Video", "Extra reel", "Eén extra branded reel boven het pakket, inclusief caption en posting.", "€75 /stuk"],
  ["Video", "Slideshow video", "Animatie met foto's, tekst en muziek. Ideaal voor launches of aanbiedingen.", "€150 /stuk"],
  ["Video", "Bedrijfspromo video", "Professioneel promofilmpje tot 2 min, inclusief script, editing en ondertiteling.", "€500 /stuk"],
  ["Content", "Shoot day op locatie", "Halve dag bij de klant. Foto's + clips voor 4–8 weken content.", "€350 /dag"],
  ["Content", "Content script", "Wij schrijven het script, de klant filmt zelf. Perfect voor UGC-stijl content.", "€75 /stuk"],
  ["Content", "Foto-edit pack", "20 bewerkte foto's per maand, klaar om te posten.", "€100 /mnd"],
  ["Advertenties", "Meta Ads beheer", "Campagnes, doelgroepen, A/B testen op Facebook & Instagram. Adspend excl.", "15% v/d adspend · min €150/mnd"],
  ["Advertenties", "TikTok Ads beheer", "TikTok campagnes opgezet en geoptimaliseerd. Adspend exclusief.", "15% v/d adspend · min €150/mnd"],
  ["Design", "Branding pakket", "Logo, kleurpalet, typografie & brand guide. Direct als merkkit inzetbaar.", "€500"],
  ["Web", "Website basis", "1–5 pagina's, mobielvriendelijk en op maat. Perfecte combo met social beheer.", "€800 – €1.500"],
  ["Web", "Website uitgebreid", "Inclusief webshop, CMS of boekingssysteem.", "€1.500 – €3.500"],
  ["Tech", "Custom tool / dashboard", "Klant-specifiek admin panel, CRM of rapportagedashboard op maat.", "€800 – €2.000"],
  ["Training", "Social media training", "1-op-1 sessie van 90 min. Strategie, tools en contentproductie.", "€150 /sessie"],
];

function Addons() {
  return (
    <section id="addons" className="bg-bg-light text-bg-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal text-[11px] tracking-[0.25em] uppercase text-bg-dark/50">Add-ons</p>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl" data-delay="100">
            Los bij te boeken op elk pakket.
          </h2>
        </div>

        <div
          className="mt-14 grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {addons.map(([cat, name, desc, price], i) => (
            <div
              key={name}
              className="reveal bg-white border border-border-light rounded-md p-5 transition-all hover:-translate-y-0.5 hover:border-bg-dark/30"
              data-delay={`${i * 30}`}
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-bg-dark/45">{cat}</div>
              <div className="mt-2 text-[14px] font-medium">{name}</div>
              <div className="mt-2 text-[12px] text-bg-dark/60 leading-relaxed">{desc}</div>
              <div className="mt-4 text-[13px] font-medium">{price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Kennismaken", "Gratis 30 min videocall. Wij leren jouw bedrijf kennen, jij leert ons kennen. Geen verplichtingen."],
  ["02", "Onboarding", "Wij vragen jouw huisstijl, doelgroep en doelen op. Contentkalender klaar binnen 5 werkdagen."],
  ["03", "Content live", "Alle posts worden eerst aan jou voorgelegd. Na goedkeuring automatisch gepland en gepubliceerd."],
  ["04", "Groei meten", "Maandelijkse rapportage met concrete inzichten. Strategie bijgestuurd waar nodig."],
];

function HowItWorks() {
  return (
    <section className="bg-bg-dark text-bg-light py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="reveal font-display text-4xl md:text-5xl">Hoe het werkt</h2>
          <p className="reveal mt-4 text-text-muted" data-delay="100">
            Van kennismaking tot resultaat in 4 stappen.
          </p>
        </div>

        <div className="mt-16 relative grid md:grid-cols-4 gap-10 steps-grid">
          <div className="hidden md:block absolute top-[44px] left-[8%] right-[8%] h-px bg-gold/15 overflow-hidden">
            <div className="step-line absolute inset-y-0 left-0 bg-gold/60" />
          </div>
          {steps.map(([num, name, desc], i) => (
            <div
              key={num}
              className="reveal relative step-card group"
              data-delay={`${i * 150}`}
              style={{ ["--i" as string]: i }}
            >
              <span className="step-dot hidden md:block" />
              <div className="step-num font-display leading-none">{num}</div>
              <div className="mt-3 font-display text-[22px] transition-colors duration-500 group-hover:text-gold">
                {name}
              </div>
              <p className="mt-3 text-[13px] text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    {
      initials: "MK",
      bg: "#0a0a0a",
      fg: "#f5f4f0",
      name: "Mikolaj Koloczek",
      role: "Head of Social & Strategy",
      bio: "Miko ademt social media. Hij weet wat werkt op Instagram, TikTok en LinkedIn, hoe algoritmes veranderen en hoe je een community bouwt die klanten oplevert.",
      skills: ["Social strategie", "Community management", "Analytics", "Content planning", "Reels & TikTok", "Meta Ads"],
    },
    {
      initials: "YA",
      bg: "#d4a84b",
      fg: "#0a0a0a",
      name: "Yaiden Appiah Kubi",
      role: "Head of Tech & Creative",
      bio: "Yaiden bouwt wat anderen niet kunnen. Van op maat gemaakte websites tot geautomatiseerde dashboards — hij combineert technische kennis met een scherp oog voor design en creatieve content.",
      skills: ["Webdevelopment", "Grafisch design", "Video editing", "Branding", "Custom tools", "Automatisering"],
    },
  ];

  return (
    <section className="bg-bg-light text-bg-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="reveal font-display text-4xl md:text-5xl">Het team</h2>
          <p className="reveal mt-4 text-bg-dark/55" data-delay="100">
            Twee mensen. Één doel.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {members.map((m, i) => (
            <div
              key={m.initials}
              className="reveal bg-white border border-border-light rounded-md p-8 lg:p-10"
              data-delay={`${i * 120}`}
            >
              <div className="flex items-center gap-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl"
                  style={{ background: m.bg, color: m.fg }}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="font-display text-2xl">{m.name}</div>
                  <div className="text-[12px] tracking-[0.15em] uppercase text-bg-dark/55 mt-1">
                    {m.role}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[14.5px] leading-[1.75] text-bg-dark/75">{m.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-3 py-1.5 border border-border-light rounded-full text-bg-dark/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <section id="contact" className="bg-bg-dark text-bg-light pt-28 lg:pt-36">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal font-display italic text-5xl md:text-[52px] leading-tight">
          Klaar om te groeien?
        </h2>
        <p className="reveal mt-5 text-text-muted" data-delay="100">
          Plan een gratis kennismakingsgesprek. Geen verplichtingen.
        </p>
        <a
          href="mailto:info@appiahenko.nl?subject=Gratis%20kennismaken"
          className="reveal inline-flex items-center gap-2 mt-10 px-8 py-4 bg-gold text-bg-dark text-sm font-medium rounded-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          data-delay="200"
        >
          Gratis kennismaken <ArrowRight className="w-4 h-4" />
        </a>
        <div className="reveal mt-8 text-[13px] text-text-muted" data-delay="300">
          <a href="mailto:info@appiahenko.nl" className="hover:text-gold transition-colors">
            info@appiahenko.nl
          </a>
          <span className="mx-3">·</span>
          Amsterdam, Nederland
        </div>

        <form
          className="reveal mt-16 grid sm:grid-cols-2 gap-4 text-left"
          data-delay="400"
          action="mailto:info@appiahenko.nl"
          method="post"
          encType="text/plain"
        >
          <input name="naam" required placeholder="Naam" className="bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm placeholder:text-text-muted focus:outline-none focus:border-gold" />
          <input name="bedrijf" placeholder="Bedrijfsnaam" className="bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm placeholder:text-text-muted focus:outline-none focus:border-gold" />
          <input name="email" type="email" required placeholder="E-mailadres" className="bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm placeholder:text-text-muted focus:outline-none focus:border-gold" />
          <input name="telefoon" placeholder="Telefoonnummer (optioneel)" className="bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm placeholder:text-text-muted focus:outline-none focus:border-gold" />
          <select name="pakket" className="sm:col-span-2 bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm text-bg-light focus:outline-none focus:border-gold">
            <option className="bg-bg-dark">Pakket interesse</option>
            <option className="bg-bg-dark">Starter</option>
            <option className="bg-bg-dark">Growth</option>
            <option className="bg-bg-dark">Premium</option>
            <option className="bg-bg-dark">Nog niet zeker</option>
          </select>
          <textarea name="bericht" rows={4} placeholder="Bericht" className="sm:col-span-2 bg-white/[0.04] border border-border-dark rounded-sm px-4 py-3 text-sm placeholder:text-text-muted focus:outline-none focus:border-gold" />
          <button type="submit" className="sm:col-span-2 bg-gold text-bg-dark px-6 py-3.5 rounded-sm text-sm font-medium hover:scale-[1.01] transition-transform">
            Verstuur bericht
          </button>
        </form>
      </div>

      <footer className="mt-28 bg-[#050505] border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[12px] text-bg-light/35">
            <span className="font-display italic text-bg-light/70 text-base mr-3">Appiah & Ko.</span>
            © 2025 Appiah & Ko. · Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-5 text-bg-light/40">
            <a href="https://instagram.com/appiahenko" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://tiktok.com/@appiahenko" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-gold transition-colors text-[12px] tracking-wide">
              TikTok
            </a>
            <a href="https://linkedin.com/company/appiahenko" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <main className="bg-bg-dark">
      <Nav />
      <Hero />
      <About />
      <Packages />
      <Proof />
      <Addons />
      <HowItWorks />
      <Team />
      <ContactFooter />
      <CookieBanner />
      <ChatbotWidget />
    </main>
  );
}
