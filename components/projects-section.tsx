"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "project1_title",
      descriptionKey: "project1_description",
      roleKey: "project1_role",
      team: "Solo Project",
      impactKey: "project1_impact",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Recharts", "Web Workers", "SWR", "Vercel"],
      github: "https://github.com/CrystalGalaxy777/Mining-Race-Calculator-PRO-Version",
      demo: "https://mining-race-calculator-pro-version-1-2-2.vercel.app",
      image: "/financial-calculator-dashboard.jpg",
      useOpenApp: true,
    },
    {
      titleKey: "project2_title",
      descriptionKey: "project2_description",
      roleKey: "project2_role",
      team: "Solo Project",
      impactKey: "project2_impact",
      technologies: ["Node.js", "JavaScript", "Solidity", "Ethers.js", "React"],
      github: "https://github.com/CrystalGalaxy777/my-solidity",
      demo: "#",
      image: "/modern-web-app-design.jpg",
    },
    {
      titleKey: "project3_title",
      descriptionKey: "project3_description",
      roleKey: "project3_role",
      team: "Solo Project",
      impactKey: "project3_impact",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "REST API",
        "Docker",
      ],
      github: "#",
      demo: "#",
      image: "/web-application-interface.png",
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">{t("projects_title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.titleKey}
              className="overflow-hidden hover:border-primary hover:-translate-y-1 transition-all hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{t(project.titleKey)}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{t(project.descriptionKey)}</p>

                <div className="space-y-2 text-xs">
                  <div className="flex gap-2">
                    <span className="text-[#00B7FF] font-semibold">Role:</span>
                    <span className="text-gray-400">{t(project.roleKey)}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#00B7FF] font-semibold">Team:</span>
                    <span className="text-gray-400">{project.team}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#00B7FF] font-semibold">Impact:</span>
                    <span className="text-gray-400">{t(project.impactKey)}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[120px] gap-2 border-white/20 bg-transparent text-white hover:!bg-[#00ff88] hover:!text-black hover:!border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:scale-105 transition-all"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      {t("project_view_code")}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="min-w-[120px] gap-2 hover:bg-[#00B7FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,183,255,0.5)] hover:scale-105 transition-all"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      {project.useOpenApp ? t("project_open_app") : t("project_live_demo")}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
