import { Link } from "react-router-dom"
import { Mail, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { i18n } = useTranslation()
    const isBg = i18n.language?.toLowerCase().startsWith("bg")

    const t = isBg
        ? {
            description: "Професионално счетоводно обслужване и консултации. Налични 24/7.",
            company: "Фирма",
            info: "Информация",
            home: "Начало",
            about: "За мен",
            contact: "Контакти",
            privacy: "Политика за поверителност",
            terms: "Общи условия",
            cookies: "Политика за бисквитките",
            rights: "Всички права запазени."
        }
        : {
            description: "Professional accounting & consulting services. Available 24/7.",
            company: "Company",
            info: "Legal",
            home: "Home",
            about: "About Me",
            contact: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            cookies: "Cookie Policy",
            rights: "All rights reserved."
        }

    const socialClass =
        "inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white transition hover:scale-105 hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20"

    const fullIconClass = "h-full w-full rounded-full object-contain p-[1px]"

    return (
        <footer className="mt-16 border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                    <div className="max-w-sm">
                        <Link to="/" className="inline-flex items-center">
                            <img
                                src="/images/mainlogo.png"
                                alt="Halachev Accounting"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {t.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=61565641385893"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={socialClass}
                            >
                                <img
                                    src="/images/facebook.png"
                                    alt="Facebook"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/halachev_accounting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={socialClass}
                            >
                                <img
                                    src="/images/black_15047119.png"
                                    alt="Instagram"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://m.me/halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Messenger"
                                className={socialClass}
                            >
                                <img
                                    src="/images/messenger.png"
                                    alt="Messenger"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://www.tiktok.com/@halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className={socialClass}
                            >
                                <img
                                    src="/images/tik-tok_4817846.png"
                                    alt="TikTok"
                                    className="h-full w-full rounded-full object-contain scale-[1]"
                                />
                            </a>

                            <a
                                href="https://wa.me/359887764200"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className={socialClass}
                            >
                                <img
                                    src="/images/1384007.png"
                                    alt="WhatsApp"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="viber://chat?number=%2B359887764200"
                                aria-label="Viber"
                                className={socialClass}
                            >
                                <img
                                    src="/images/viber.png"
                                    alt="Viber"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://revolut.me/halachev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Revolut"
                                className={socialClass}
                            >
                                <img
                                    src="/images/revolut.png"
                                    alt="Revolut"
                                    className={fullIconClass}
                                />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        <div className="min-w-[160px]">
                            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                                {t.company}
                            </h4>

                            <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <Link to="/" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.home}
                                </Link>
                                <Link to="/about" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.about}
                                </Link>
                                <Link to="/contact" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.contact}
                                </Link>
                            </div>
                        </div>

                        <div className="min-w-[180px]">
                            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                                {t.info}
                            </h4>

                            <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <Link to="/privacy" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.privacy}
                                </Link>
                                <Link to="/terms" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.terms}
                                </Link>
                                <Link to="/cookies" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.cookies}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Halachev Accounting. {t.rights}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                        <a
                            href="tel:+359887764200"
                            className="inline-flex items-center gap-2 transition hover:text-slate-900 dark:hover:text-white"
                        >
                            <Phone size={16} />
                            <span>088 776 4200</span>
                        </a>

                        <a
                            href="mailto:contact@halachevaccounting.com"
                            className="inline-flex items-center gap-2 transition hover:text-slate-900 dark:hover:text-white"
                        >
                            <Mail size={16} />
                            <span>contact@halachevaccounting.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}