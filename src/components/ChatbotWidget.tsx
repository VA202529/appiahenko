import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Lang = "nl" | "en";
type Msg = { from: "bot" | "user"; text: string };

const ui = {
  nl: {
    title: "FAQ Bot",
    subtitle: "Snel antwoord op de meest gestelde vragen.",
    pickLang: "Kies jouw taal",
    greet: "Hi! Ik ben de FAQ-bot van Appiah & Ko. Waar kan ik je mee helpen?",
    placeholder: "Of typ je vraag…",
    fallback:
      "Daar moet ik even een mens bij halen. Mail ons op info@appiahenko.nl of plan een gratis kennismakingsgesprek via de contactsectie.",
    back: "Andere vraag",
  },
  en: {
    title: "FAQ Bot",
    subtitle: "Quick answers to the most asked questions.",
    pickLang: "Pick your language",
    greet: "Hi! I'm the Appiah & Ko. FAQ bot. How can I help?",
    placeholder: "Or type your question…",
    fallback:
      "I'll need a human for that. Email us at info@appiahenko.nl or book a free intro call from the contact section.",
    back: "Another question",
  },
} as const;

const faqs: Record<Lang, { q: string; a: string; keys: string[] }[]> = {
  nl: [
    {
      q: "Wat kost een pakket?",
      a: "Onze pakketten starten bij €249/mnd (Starter), €449/mnd (Growth) en €749/mnd (Premium). Maandelijks opzegbaar, geen opstartkosten.",
      keys: ["prijs", "kost", "tarief", "pakket"],
    },
    {
      q: "Hoe snel staan we live?",
      a: "Na onboarding heb je binnen 5 werkdagen je eerste contentkalender klaar. Eerste posts staan meestal binnen 7–10 dagen live.",
      keys: ["snel", "wanneer", "live", "starten", "begin"],
    },
    {
      q: "Welke platformen doen jullie?",
      a: "Instagram, TikTok, LinkedIn, Facebook, YouTube Shorts en Pinterest. Je kiest welke platforms in jouw pakket vallen.",
      keys: ["platform", "instagram", "tiktok", "linkedin", "facebook", "youtube", "pinterest"],
    },
    {
      q: "Doen jullie ook ads?",
      a: "Ja. Meta Ads en TikTok Ads beheer is beschikbaar als add-on (15% v/d adspend, min. €150/mnd) en standaard inbegrepen in Premium.",
      keys: ["ads", "advertenties", "meta", "campagne"],
    },
    {
      q: "Krijg ik content vooraf te zien?",
      a: "Altijd. Iedere post wordt eerst aan jou voorgelegd via WhatsApp of e-mail. Pas na jouw goedkeuring wordt er gepubliceerd.",
      keys: ["goedkeuring", "voorleggen", "approval", "akkoord"],
    },
    {
      q: "Kan ik maandelijks opzeggen?",
      a: "Ja. Geen lange contracten. Je zegt op aan het einde van de lopende maand.",
      keys: ["opzeggen", "contract", "looptijd", "binding"],
    },
    {
      q: "Waar zitten jullie?",
      a: "We zijn gevestigd in Amsterdam, maar werken met klanten door heel Nederland en België.",
      keys: ["locatie", "amsterdam", "waar", "kantoor"],
    },
  ],
  en: [
    {
      q: "What does a package cost?",
      a: "Packages start at €249/mo (Starter), €449/mo (Growth) and €749/mo (Premium). Monthly cancellable, no setup fees.",
      keys: ["price", "cost", "rate", "package"],
    },
    {
      q: "How fast do we go live?",
      a: "After onboarding your first content calendar is ready within 5 working days. First posts typically go live within 7–10 days.",
      keys: ["fast", "when", "live", "start"],
    },
    {
      q: "Which platforms do you cover?",
      a: "Instagram, TikTok, LinkedIn, Facebook, YouTube Shorts and Pinterest. You pick which fit your package.",
      keys: ["platform", "instagram", "tiktok", "linkedin", "facebook", "youtube", "pinterest"],
    },
    {
      q: "Do you run ads?",
      a: "Yes. Meta and TikTok Ads management is available as an add-on (15% of adspend, min €150/mo) and included in Premium.",
      keys: ["ads", "advertising", "meta", "campaign"],
    },
    {
      q: "Do I see content before it's posted?",
      a: "Always. Every post is shared with you via WhatsApp or email first. We only publish after your approval.",
      keys: ["approval", "review", "before"],
    },
    {
      q: "Can I cancel monthly?",
      a: "Yes. No long-term contracts. You can cancel at the end of any month.",
      keys: ["cancel", "contract", "term"],
    },
    {
      q: "Where are you based?",
      a: "Amsterdam, the Netherlands. We work with clients across NL and Belgium.",
      keys: ["location", "amsterdam", "where", "office"],
    },
  ],
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lang && messages.length === 0) {
      setMessages([{ from: "bot", text: ui[lang].greet }]);
    }
  }, [lang]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const findAnswer = (text: string): string => {
    if (!lang) return ui.nl.fallback;
    const t = text.toLowerCase();
    const match = faqs[lang].find((f) => f.keys.some((k) => t.includes(k)));
    return match ? match.a : ui[lang].fallback;
  };

  const askQ = (q: string) => {
    if (!lang) return;
    const answer = findAnswer(q);
    setMessages((m) => [
      ...m,
      { from: "user", text: q },
      { from: "bot", text: answer },
    ]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    askQ(q);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="FAQ chatbot openen"
        className={`fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full bg-gold text-bg-dark shadow-2xl flex items-center justify-center transition-transform hover:scale-105 ${
          open ? "scale-90" : ""
        }`}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] z-[70] animate-fade-in">
          <div className="bg-bg-dark border border-gold/40 rounded-sm shadow-2xl text-bg-light overflow-hidden flex flex-col h-[520px] max-h-[80vh]">
            <div className="px-5 py-4 border-b border-border-dark flex items-center justify-between bg-bg-dark">
              <div>
                <div className="font-display text-lg leading-tight">
                  {lang ? ui[lang].title : "FAQ Bot"}
                </div>
                <div className="text-[11px] text-text-muted">
                  {lang ? ui[lang].subtitle : "NL · EN"}
                </div>
              </div>
              {lang && (
                <button
                  onClick={() => {
                    setLang(null);
                    setMessages([]);
                  }}
                  className="text-[11px] tracking-wide text-text-muted hover:text-gold uppercase"
                >
                  {lang.toUpperCase()} ↺
                </button>
              )}
            </div>

            {!lang ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                <p className="text-[13px] text-text-muted text-center">
                  {ui.nl.pickLang} / {ui.en.pickLang}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setLang("nl")}
                    className="px-6 py-3 bg-gold text-bg-dark text-sm font-medium rounded-sm hover:scale-[1.03] transition-transform"
                  >
                    Nederlands
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className="px-6 py-3 border border-bg-light/30 text-bg-light text-sm rounded-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    English
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-3.5 py-2.5 rounded-sm text-[13px] leading-relaxed ${
                          m.from === "user"
                            ? "bg-gold text-bg-dark"
                            : "bg-white/[0.05] border border-border-dark text-bg-light"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {faqs[lang].map((f) => (
                      <button
                        key={f.q}
                        onClick={() => askQ(f.q)}
                        className="text-[11.5px] px-2.5 py-1.5 border border-border-dark rounded-full text-text-muted hover:border-gold hover:text-gold transition-colors"
                      >
                        {f.q}
                      </button>
                    ))}
                  </div>
                </div>

                <form
                  onSubmit={submit}
                  className="border-t border-border-dark p-3 flex gap-2 bg-bg-dark"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={ui[lang].placeholder}
                    className="flex-1 bg-white/[0.04] border border-border-dark rounded-sm px-3 py-2 text-[13px] placeholder:text-text-muted focus:outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    aria-label="Versturen"
                    className="px-3 bg-gold text-bg-dark rounded-sm hover:scale-105 transition-transform"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
