"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t("about_title")}</h2>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <p
                className="text-lg lg:text-2xl text-[#00B7FF] italic mb-8 leading-relaxed"
                style={{ textShadow: "0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(0, 183, 255, 0.3)" }}
              >
                {t("about_tagline")}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{t("about_para1")}</p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{t("about_para2")}</p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{t("about_para3")}</p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <Card className="p-6 text-center hover:border-primary hover:-translate-y-1 transition-all">
              <div
                className="text-4xl font-bold text-[#00B7FF] mb-2"
                style={{ textShadow: "0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(0, 183, 255, 0.3)" }}
              >
                20+
              </div>
              <div className="text-sm text-muted-foreground">{t("about_stat_experience")}</div>
            </Card>
            <Card className="p-6 text-center hover:border-primary hover:-translate-y-1 transition-all">
              <div
                className="text-4xl font-bold text-[#00B7FF] mb-2"
                style={{ textShadow: "0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(0, 183, 255, 0.3)" }}
              >
                50+
              </div>
              <div className="text-sm text-muted-foreground">{t("about_stat_projects")}</div>
            </Card>
            <Card className="p-6 text-center hover:border-primary hover:-translate-y-1 transition-all">
              <div
                className="text-4xl font-bold text-[#00B7FF] mb-2"
                style={{ textShadow: "0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(0, 183, 255, 0.3)" }}
              >
                25+
              </div>
              <div className="text-sm text-muted-foreground">{t("about_stat_technologies")}</div>
            </Card>
            <Card className="p-6 text-center hover:border-primary hover:-translate-y-1 transition-all">
              <div
                className="text-4xl font-bold text-[#00B7FF] mb-2"
                style={{ textShadow: "0 0 15px rgba(0, 183, 255, 0.5), 0 0 30px rgba(0, 183, 255, 0.3)" }}
              >
                100%
              </div>
              <div className="text-sm text-muted-foreground">{t("about_stat_satisfaction")}</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
