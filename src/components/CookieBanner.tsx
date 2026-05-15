import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "ak_cookie_consent_v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[80] animate-fade-in">
      <div className="bg-bg-dark border border-gold/40 rounded-sm shadow-2xl p-5 text-bg-light">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-lg leading-tight">Cookies op deze site</div>
            <p className="mt-2 text-[13px] text-bg-light/70 leading-relaxed">
              Wij gebruiken essentiële cookies om de site te laten werken en optionele cookies om
              te begrijpen hoe je hem gebruikt. Jij kiest.
            </p>
          </div>
          <button
            onClick={() => decide("declined")}
            className="text-bg-light/50 hover:text-bg-light shrink-0"
            aria-label="Sluiten"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => decide("accepted")}
            className="px-4 py-2 bg-gold text-bg-dark text-[13px] font-medium rounded-sm hover:scale-[1.02] transition-transform"
          >
            Accepteer alles
          </button>
          <button
            onClick={() => decide("declined")}
            className="px-4 py-2 border border-bg-light/25 text-bg-light text-[13px] rounded-sm hover:border-bg-light/60 transition-colors"
          >
            Alleen essentieel
          </button>
        </div>
      </div>
    </div>
  );
}
