import { Link, useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
    const { i18n } = useTranslation()
    const { user, logout, loading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const isBg = i18n.language?.toLowerCase().startsWith("bg")

    const goToServices = () => {
        if (location.pathname === "/") {
            const section = document.getElementById("services")
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        } else {
            navigate("/")
            setTimeout(() => {
                const section = document.getElementById("services")
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            }, 120)
        }
    }

    const goToHome = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            navigate("/")
        }
    }

    const leftItems = isBg
        ? [
              { key: "home", label: "Начало", action: goToHome },
              { key: "services", label: "Услуги", action: goToServices },
          ]
        : [
              { key: "home", label: "Home", action: goToHome },
              { key: "services", label: "Services", action: goToServices },
          ]

    const rightItems = isBg
        ? [
              { to: "/about", label: "За мен" },
              { to: "/contact", label: "Контакти" },
              // { to: "/blog", label: "Блог" },
          ]
        : [
              { to: "/about", label: "About Me" },
              { to: "/contact", label: "Contact" },
              // { to: "/blog", label: "Blog" },
          ]

    const linkClass = (active: boolean) =>
        `relative inline-flex items-center justify-center whitespace-nowrap bg-transparent text-sm font-semibold tracking-[0.01em] transition ${
            active
                ? "text-slate-950 lg:after:absolute lg:after:-bottom-[14px] lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-slate-950"
                : "text-slate-600 hover:text-slate-950"
        }`

    const navButtonClass = (active: boolean) =>
        `relative inline-flex items-center justify-center whitespace-nowrap bg-transparent text-sm font-semibold tracking-[0.01em] transition ${
            active
                ? "text-slate-950 lg:after:absolute lg:after:-bottom-[14px] lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-slate-950"
                : "text-slate-600 hover:text-slate-950"
        }`

    const authClass =
        "inline-flex items-center whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-slate-950 sm:text-[11px]"

    const langButtonClass = (active: boolean) =>
        `text-[10px] font-bold uppercase tracking-[0.14em] transition sm:text-[11px] ${
            active ? "text-slate-950" : "text-slate-400 hover:text-slate-700"
        }`

    const homeActive = location.pathname === "/"
    const servicesActive = false

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-[1600px] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="grid min-h-[72px] grid-cols-1 items-center gap-y-3 py-3 sm:min-h-[80px] sm:py-4 lg:min-h-[92px] lg:grid-cols-[1fr_auto_1fr_auto] lg:gap-x-8 lg:gap-y-0 lg:py-0 xl:gap-x-10 2xl:gap-x-12">
                    <div className="order-2 flex items-center justify-center gap-5 sm:gap-6 lg:order-1 lg:justify-end lg:gap-8">
                        {leftItems.map((item) => {
                            const active =
                                item.key === "home"
                                    ? homeActive
                                    : item.key === "services"
                                    ? servicesActive
                                    : false

                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    onClick={item.action}
                                    className={navButtonClass(active)}
                                >
                                    {item.label}
                                </button>
                            )
                        })}
                    </div>

                    <div className="order-1 flex justify-center lg:order-2">
                        <button
                            type="button"
                            onClick={goToHome}
                            className="inline-flex items-center justify-center"
                        >
                            <img
                                src="/images/mainlogo.png"
                                alt="Halachev Accounting"
                                className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-14 xl:h-16"
                            />
                        </button>
                    </div>

                    <div className="order-3 flex items-center justify-center gap-5 sm:gap-6 lg:order-3 lg:justify-start lg:gap-8">
                        {rightItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={linkClass(location.pathname === item.to)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="order-4 flex flex-wrap items-center justify-center gap-3 border-t border-slate-200 pt-3 sm:gap-4 lg:order-4 lg:justify-end lg:border-t-0 lg:pt-0">
                        {!loading && !user && (
                            <>
                                {/*
                                <Link to="/identity/login" className={authClass}>
                                    {isBg ? "Вход" : "Login"}
                                </Link>

                                <Link to="/identity/register" className={authClass}>
                                    {isBg ? "Регистрация" : "Register"}
                                </Link>
                                */}
                            </>
                        )}

                        {!loading && user && (
                            <>
                                <Link to="/identity/profile" className={authClass}>
                                    {isBg ? "Профил" : "Profile"}
                                </Link>

                                {/*
                                <Link to="/admin" className={authClass}>
                                    Admin
                                </Link>
                                */}

                                <button
                                    type="button"
                                    onClick={() => void logout()}
                                    className={authClass}
                                >
                                    {isBg ? "Изход" : "Logout"}
                                </button>
                            </>
                        )}

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => void i18n.changeLanguage("bg")}
                                className={langButtonClass(isBg)}
                            >
                                BG
                            </button>

                            <span className="text-slate-300">|</span>

                            <button
                                type="button"
                                onClick={() => void i18n.changeLanguage("en")}
                                className={langButtonClass(!isBg)}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}