import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode,
} from "react";
import translations, { type Lang, type TranslationKey } from "../i18n/translations";

interface LanguageContextValue {
    lang: Lang;
    toggleLang: () => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
    try {
        const stored = localStorage.getItem("portfolio_lang");
        if (stored === "en" || stored === "fr") return stored;
    } catch {
        // ignore
    }
    return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(getInitialLang);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next: Lang = prev === "en" ? "fr" : "en";
            try {
                localStorage.setItem("portfolio_lang", next);
            } catch {
                // ignore
            }
            return next;
        });
    }, []);

    const t = useCallback(
        (key: TranslationKey): string => translations[lang][key],
        [lang]
    );

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
}
