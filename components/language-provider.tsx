"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_name: "ZOIA ANILIR",
    hero_profession_line1: "Full-Stack Developer · Blockchain & Smart Contracts",
    hero_profession_line2: "Web & dApp Development · UX/UI Designer",
    hero_profession: "Full-Stack Developer · UX/UI Designer · Web & dApp Engineer",
    hero_profession_short: "Full-Stack Developer",
    hero_description_line1:
      "I build modern web and dApp solutions using JavaScript, PHP, Next.js, Node.js, and Solidity.",
    hero_description_line2: "Focused on clean architecture, security, and clear user experience.",
    hero_view_projects: "View projects",
    hero_get_in_touch: "Get in touch",
    hero_download_cv: "Download CV",
    hero_trust_line: "Available for remote · DE/EN/RU · Response within 24 hours",
    hero_title: "Full-Stack Developer",
    hero_description:
      "Building modern web applications with cutting-edge technologies. Passionate about creating elegant solutions to complex problems.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",
    hero_remote: "Available for remote",
    hero_languages: "DE/EN/RU",
    hero_response: "Response within 24 hours",
    about_title: "About Me",
    about_tagline: "Creating digital systems that connect design, code & blockchain logic.",
    about_para1: "I am a passionate developer with over 20 years of experience in software and web technologies.",
    about_para2:
      "I love building scalable applications, experimenting with blockchain solutions, and constantly learning new tools.",
    about_para3:
      "My focus is on creating user-friendly interfaces, secure architectures, and clean, maintainable code that truly serves people.",
    about_stat_experience: "Professional Experience",
    about_stat_projects: "Delivered Projects",
    about_stat_technologies: "Technologies & Tools Mastered",
    about_stat_satisfaction: "Client & Partner Success",
    about_description:
      "I am a passionate developer with expertise in modern web technologies. I love building scalable applications and learning new technologies. My focus is on creating user-friendly interfaces and robust backend systems.",
    skills_title: "Technical Skills",
    projects_title: "Featured Projects",
    project1_title: "Mining Race Calculator PRO",
    project1_description:
      "Professional financial calculator for analyzing and forecasting mining project profitability. The system calculates ROI, break-even points, automatic reinvestment with Grid/Direct bonuses, and models license and card purchase strategies. Includes detailed daily statistics tables and settings export/import. Multilingual interface (EN/DE/RU) with responsive design and neon UI effects.",
    project1_role: "Full-Stack Developer & UX Designer",
    project1_impact:
      "Optimized calculations via Web Workers, processing 365+ days of simulation in real-time, serving 500+ active users",
    project2_title: "Smart-Contract Dashboard",
    project2_description:
      "Interactive educational dashboard for working with smart contracts and a mini-blockchain chain. The project implements key blockchain concepts: key and address generation (ECDSA), transactions, signatures, mempool, blocks, and PoW mining. Additionally includes basic frontend for interacting with smart contracts via ethers.js (reading and writing variables). Designed as a portfolio repository with tests, documentation, and a development roadmap.",
    project2_role: "Full-Stack Blockchain Developer",
    project2_impact:
      "Practical PoW chain implementation + UI for working with smart contracts, ready foundation for further dApp architecture",
    project3_title: "Freelance Project & Billing Manager",
    project3_description:
      "Freelance Project & Billing Manager is a full-stack web application designed for freelancers and small teams to organize their workflow. The platform allows users to manage clients, projects, tasks, and invoices in one place, providing a clear and structured overview of ongoing work and revenue. It includes dashboard analytics, project status tracking, invoice management, and a clean UX/UI that simplifies daily operations without external tools or spreadsheets.",
    project3_role: "Full-Stack Developer & UX/UI Designer",
    project3_impact:
      "Replaced fragmented manual tracking with a centralized workflow, improving productivity and financial transparency",
    project_view_code: "View Code",
    project_live_demo: "Live Demo",
    project_open_app: "Open App",
    contact_title: "Get In Touch",
    contact_description: "Have a project in mind or want to collaborate? Feel free to reach out!",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_sending: "Sending...",
    contact_success_title: "Thank you!",
    contact_success_message: "I'll respond within 24 hours",
    download_resume: "Download Resume",
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    hero_name: "ZOIA ANILIR",
    hero_profession_line1: "Full-Stack Entwicklerin · Blockchain & Smart Contracts",
    hero_profession_line2: "Web & dApp Entwicklung · UX/UI Designerin",
    hero_profession: "Full-Stack Entwicklerin · UX/UI Designerin · Web & dApp Developerin",
    hero_profession_short: "Full-Stack Entwicklerin",
    hero_description_line1:
      "Ich entwickle moderne Web- und dApp-Lösungen mit JavaScript, PHP, Next.js, Node.js und Solidity.",
    hero_description_line2: "Schwerpunkt: saubere Architektur, Sicherheit und klare Benutzererfahrung.",
    hero_view_projects: "Projekte ansehen",
    hero_get_in_touch: "Kontakt aufnehmen",
    hero_download_cv: "Lebenslauf herunterladen",
    hero_trust_line: "Verfügbar für Remote-Arbeit · DE/EN/RU · Antwort innerhalb von 24 Stunden",
    hero_title: "Full-Stack Entwickler",
    hero_description:
      "Entwicklung moderner Webanwendungen mit modernsten Technologien. Leidenschaftlich daran interessiert, elegante Lösungen für komplexe Probleme zu schaffen.",
    hero_cta_projects: "Projekte ansehen",
    hero_cta_contact: "Kontakt aufnehmen",
    hero_remote: "Verfügbar für Remote-Arbeit",
    hero_languages: "DE/EN/RU",
    hero_response: "Antwort innerhalb von 24 Stunden",
    about_title: "Über mich",
    about_tagline: "Digitale Systeme entwickeln, die Design, Code und Blockchain-Logik verbinden.",
    about_para1:
      "Ich bin eine leidenschaftliche Entwicklerin mit über 20 Jahren Erfahrung in Software- und Webtechnologien.",
    about_para2:
      "Ich liebe es, skalierbare Anwendungen zu entwickeln, mit Blockchain-Lösungen zu experimentieren und ständig neue Tools zu lernen.",
    about_para3:
      "Mein Fokus liegt auf benutzerfreundlichen Interfaces, sicherer Architektur und sauberem, wartbarem Code, der echten Mehrwert schafft.",
    about_stat_experience: "Berufserfahrung",
    about_stat_projects: "Abgeschlossene Projekte",
    about_stat_technologies: "Beherrschte Technologien & Tools",
    about_stat_satisfaction: "Kundenzufriedenheit & Partnererfolg",
    about_description:
      "Ich bin ein leidenschaftlicher Entwickler mit Expertise in modernen Webtechnologien. Ich liebe es, skalierbare Anwendungen zu entwickeln und neue Technologien zu lernen. Mein Fokus liegt auf der Erstellung benutzerfreundlicher Oberflächen und robuster Backend-Systeme.",
    skills_title: "Technische Fähigkeiten",
    projects_title: "Ausgewählte Projekte",
    project1_title: "Mining Race Calculator PRO",
    project1_description:
      "Professioneller Finanzrechner zur Analyse und Prognose der Rentabilität von Mining-Projekten. Das System berechnet ROI, Break-Even-Punkte, automatisches Reinvestment mit Grid/Direct-Boni und modelliert Lizenz- und Kartenkaufstrategien. Enthält detaillierte Tagesstatistiken und Export/Import von Einstellungen. Mehrsprachige Oberfläche (EN/DE/RU) mit responsivem Design und Neon-UI-Effekten.",
    project1_role: "Full-Stack Entwicklerin & UX Designerin",
    project1_impact:
      "Optimierte Berechnungen via Web Workers, Verarbeitung von 365+ Tagen Simulation in Echtzeit, über 500 aktive Nutzer",
    project2_title: "Smart-Contract Dashboard",
    project2_description:
      "Interaktives Lern-Dashboard für die Arbeit mit Smart Contracts und einer Mini-Blockchain-Kette. Das Projekt implementiert zentrale Blockchain-Konzepte: Schlüssel- und Adressgenerierung (ECDSA), Transaktionen, Signaturen, Mempool, Blöcke und PoW-Mining. Zusätzlich ein einfaches Frontend für die Interaktion mit Smart Contracts über ethers.js (Lesen und Schreiben von Variablen). Als Portfolio-Repository mit Tests, Dokumentation und Entwicklungs-Roadmap gestaltet.",
    project2_role: "Full-Stack Blockchain Entwicklerin",
    project2_impact:
      "Praktische PoW-Chain-Implementierung + UI für Smart Contracts, solide Basis für weitere dApp-Architektur",
    project3_title: "Freelance Project & Billing Manager",
    project3_description:
      "Freelance Project & Billing Manager ist eine Full-Stack-Webanwendung für Freelancer und kleine Teams zur strukturierten Verwaltung ihrer Arbeit. Die Plattform ermöglicht das Verwalten von Kunden, Projekten, Aufgaben und Rechnungen an einem Ort und bietet einen klaren Überblick über laufende Arbeit und Umsätze. Das System enthält Dashboard-Analysen, Projektstatus, Rechnungsverwaltung und ein übersichtliches UX/UI-Design, das tägliche Abläufe ohne Tabellen oder externe Tools vereinfacht.",
    project3_role: "Full-Stack-Entwicklerin & UX/UI-Designerin",
    project3_impact:
      "Ersetzt manuelle, verstreute Daten durch einen zentralen Workflow und erhöht Produktivität und finanzielle Transparenz",
    project_view_code: "Code ansehen",
    project_live_demo: "Live Demo",
    project_open_app: "App öffnen",
    contact_title: "Kontakt aufnehmen",
    contact_description:
      "Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich gerne!",
    contact_name: "Name",
    contact_email: "E-Mail",
    contact_message: "Nachricht",
    contact_send: "Nachricht senden",
    contact_sending: "Wird gesendet...",
    contact_success_title: "Vielen Dank!",
    contact_success_message: "Ich antworte innerhalb von 24 Stunden",
    download_resume: "Lebenslauf herunterladen",
  },
  ru: {
    nav_about: "О себе",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_contact: "Контакты",
    hero_name: "ZOIA ANILIR",
    hero_profession_line1: "Full-Stack разработчик · Blockchain & Smart Contracts",
    hero_profession_line2: "Web & dApp разработка · UX/UI дизайнер",
    hero_profession: "Full-Stack разработчик · UX/UI дизайнер · Web & dApp инженер",
    hero_profession_short: "Full-Stack разработчик",
    hero_description_line1: "Создаю современные web- и dApp-решения на JavaScript, PHP, Next.js, Node.js и Solidity.",
    hero_description_line2: "Сфокусирована на чистой архитектуре, безопасности и понятном пользовательском опыте.",
    hero_view_projects: "Посмотреть проекты",
    hero_get_in_touch: "Связаться",
    hero_download_cv: "Скачать резюме",
    hero_trust_line: "Доступна для удалённой работы · DE/EN/RU · Ответ в течение 24 часов",
    hero_title: "Full-Stack Разработчик",
    hero_description:
      "Создаю современные веб-приложения с использованием передовых технологий. Увлечён разработкой элегантных решений сложных задач.",
    hero_cta_projects: "Посмотреть проекты",
    hero_cta_contact: "Связаться",
    hero_remote: "Доступна для удалённой работы",
    hero_languages: "DE/EN/RU",
    hero_response: "Ответ в течение 24 часов",
    about_title: "О себе",
    about_tagline: "Создаю цифровые системы, соединяющие дизайн, код и блокчейн-логику.",
    about_para1: "Я — увлечённый разработчик с более чем 20-летним опытом в области веб-и программных технологий.",
    about_para2:
      "Люблю создавать масштабируемые приложения, экспериментировать с блокчейном и постоянно осваивать новые инструменты.",
    about_para3:
      "Мой фокус — удобные интерфейсы, безопасная архитектура и чистый, поддерживаемый код, приносящий реальную пользу людям.",
    about_stat_experience: "Профессиональный опыт",
    about_stat_projects: "Реализованные проекты",
    about_stat_technologies: "Освоенных технологий и инструментов",
    about_stat_satisfaction: "Удовлетворённость клиентов и партнёров",
    about_description:
      "Я увлечённый разработчик с опытом работы с современными веб-технологиями. Люблю создавать масштабируемые приложения и изучать новые технологии. Мой фокус — создание удобных интерфейсов и надёжных серверных систем.",
    skills_title: "Технические навыки",
    projects_title: "Избранные проекты",
    project1_title: "Mining Race Calculator PRO",
    project1_description:
      "Профессиональный финансовый калькулятор для анализа и прогнозирования рентабельности майнинг-проектов. Система рассчитывает ROI, точку безубыточности, автоматическое реинвестирование с Grid/Direct бонусами, моделирует стратегии покупки лицензий и карт. Включает детальные таблицы ежедневной статистики, экспорт/импорт настроек. Многоязычный интерфейс (EN/DE/RU) с адаптивным дизайном и неоновыми UI эффектами.",
    project1_role: "Full-Stack разработчик и UX дизайнер",
    project1_impact:
      "Оптимизация расчётов через Web Workers, обработка 365+ дней симуляции в реальном времени, 500+ активных пользователей",
    project2_title: "Smart-Contract Dashboard",
    project2_description:
      "Интерактивная обучающая панель для работы со смарт-контрактами и мини-блокчейн-цепочкой. В проекте реализованы ключевые блокчейн-концепты: генерация ключей и адресов (ECDSA), транзакции, подписи, mempool, блоки и PoW-майнинг. Дополнительно — базовый frontend для взаимодействия со смарт-контрактами через ethers.js (чтение и запись переменных). Проект оформлен как портфолио-репозиторий с тестами, документацией и дорожной картой развития.",
    project2_role: "Full-Stack Blockchain Developer",
    project2_impact:
      "Практическая реализация PoW-цепочки + UI для работы со смарт-контрактами, готовый фундамент для дальнейшей dApp-архитектуры",
    project3_title: "Freelance Project & Billing Manager",
    project3_description:
      "Freelance Project & Billing Manager — full-stack веб-приложение для фрилансеров и небольших команд, помогающее структурировать рабочий процесс. Платформа позволяет управлять клиентами, проектами, задачами и счетами в одном интерфейсе, создавая чёткое и удобное представление о работе и доходах. Система включает аналитический дашборд, статусы проектов, управление счетами и понятный UX/UI, который избавляет от необходимости использовать Excel или множество отдельных инструментов.",
    project3_role: "Full-Stack разработчик и UX/UI дизайнер",
    project3_impact:
      "Заменяет хаотичное ручное ведение данных централизованным рабочим пространством, повышая продуктивность и прозрачность финансов",
    project_view_code: "Посмотреть код",
    project_live_demo: "Демо",
    project_open_app: "Открыть App",
    contact_title: "Связаться со мной",
    contact_description: "Есть проект или хотите сотрудничать? Свяжитесь со мной!",
    contact_name: "Имя",
    contact_email: "Email",
    contact_message: "Сообщение",
    contact_send: "Отправить",
    contact_sending: "Отправка...",
    contact_success_title: "Спасибо!",
    contact_success_message: "Отвечу в течение 24 часов",
    download_resume: "Скачать резюме",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
