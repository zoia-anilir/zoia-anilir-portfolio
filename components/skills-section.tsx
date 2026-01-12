"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Solidity", level: 70, category: "Blockchain" },
  { name: "Ethers.js", level: 70, category: "Blockchain" },
  { name: "UX/UI Design", level: 85, category: "Design" },
  { name: "Figma", level: 85, category: "Design" },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">{t("skills_title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 hover:border-primary transition-all hover:shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
