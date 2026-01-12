"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Mail, Download, Globe, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getCVPath = () => {
    if (language === "de") return "/Zoia_Anilir_CV_DE_Full_Stack_Developer.pdf"
    if (language === "en") return "/Zoia_Anilir_CV_EN_Full_Stack_Developer.pdf"
    if (language === "ru") return "/Zoia_Anilir_CV_RU_Full_Stack_Developer.pdf"
    return null
  }

  const cvPath = getCVPath()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-[1.4fr_0.6fr] lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div className="flex justify-center md:hidden">
            <div className="relative w-64 h-64">
              <Image
                src="/profile-photo.png"
                alt="Zoia Anilir - Full-Stack & Blockchain Developer"
                width={256}
                height={256}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-foreground">{t("hero_name")}</span>
            </h1>

            <div className="text-lg md:text-lg lg:text-2xl text-[#00B7FF] font-medium">
              <p>{t("hero_profession_line1")}</p>
              <div className="relative my-2">
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00B7FF] to-transparent animate-pulse"></div>
              </div>
              <p>{t("hero_profession_line2")}</p>
            </div>

            <p className="text-base md:text-sm lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed pt-4">
              <span className="inline lg:hidden">
                {t("hero_description_line1")} {t("hero_description_line2")}
              </span>
              <span className="hidden lg:inline">
                {t("hero_description_line1")} {t("hero_description_line2")}
              </span>
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
              <span>JavaScript</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>PHP</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>React</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>Next.js</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>Node.js</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>Solidity</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>Python</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>UX/UI</span>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center md:justify-start gap-3 pt-4">
              {cvPath ? (
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-primary hover:bg-[#00ff88] hover:border-[#00ff88] hover:shadow-[0_0_15px_rgba(0,255,136,0.6)] hover:text-black hover:scale-105 transition-all duration-300"
                >
                  <a href={cvPath} download>
                    <Download size={18} />
                    {t("hero_download_cv")}
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled className="w-full md:w-auto gap-2 opacity-50 cursor-not-allowed">
                  <Download size={18} />
                  {t("hero_download_cv")}
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="w-full md:w-auto gap-2 border-white/20 text-white bg-transparent hover:!bg-[#00ff88] hover:!border-[#00ff88] hover:!text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.8)] hover:scale-105 transition-all duration-300"
              >
                {t("hero_view_projects")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full md:w-auto gap-2 border-white/20 text-white bg-transparent hover:!bg-[#00ff88] hover:!border-[#00ff88] hover:!text-black hover:shadow-[0_0_15px_rgba(0,255,136,0.6)] hover:scale-105 transition-all duration-300"
              >
                {t("hero_get_in_touch")}
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-400 pt-4">
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-[#00B7FF]" />
                {t("hero_remote")}
              </span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span>{t("hero_languages")}</span>
              <span className="text-[#00B7FF] font-bold text-base opacity-40">·</span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-[#00B7FF]" />
                {t("hero_response")}
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://github.com/CrystalGalaxy777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-[#00B7FF] hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zoia-anilir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-[#00B7FF] hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:zoia@anilir.de"
                aria-label="Email Contact"
                className="text-muted-foreground hover:text-[#00B7FF] hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex md:justify-end">
            <div className="relative md:w-72 md:h-72 lg:w-96 lg:h-96">
              <Image
                src="/profile-photo.png"
                alt="Zoia Anilir - Full-Stack & Blockchain Developer"
                width={384}
                height={384}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
