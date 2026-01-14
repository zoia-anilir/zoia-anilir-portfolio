"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { useState } from "react"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [dialogType, setDialogType] = useState<"demo" | "code" | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleProjectClick = (type: "demo" | "code", projectIndex: number) => {
  // Третий проект (index 2) - показываем диалог
    if (projectIndex === 2) {
      setDialogType(type)
      setIsDialogOpen(true)
      return
    }
  // Для других проектов - ничего не делаем, открывается по ссылке
  }

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
                  {/* View Code button */}
                  {projects.indexOf(project) === 2 ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="min-w-[120px] gap-2 border-white/20 bg-transparent text-white hover:!bg-[#00ff88] hover:!text-black hover:!border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:scale-105 transition-all"
                      onClick={() => handleProjectClick("code", projects.indexOf(project))}
                    >
                      <Github size={16} />
                      {t("project_view_code")}
                    </Button>
                  ) : (
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
                  )}

                  {/* Live Demo / Open App button */}
                  {projects.indexOf(project) === 2 ? (
                    <Button
                      size="sm"
                      className="min-w-[120px] gap-2 hover:bg-[#00B7FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,183,255,0.5)] hover:scale-105 transition-all"
                      onClick={() => handleProjectClick("demo", projects.indexOf(project))}
                    >
                      <ExternalLink size={16} />
                      {project.useOpenApp ? t("project_open_app") : t("project_live_demo")}
                    </Button>
                  ) : (
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
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Development Status Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#0a0a0a] border-[#00B7FF]/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#00B7FF] flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              {t("project_in_dev_title")}
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-left pt-4 space-y-3">
              <p className="leading-relaxed">{t("project_in_dev_description")}</p>
              {dialogType === "code" && (
                <p className="text-sm text-gray-400 pt-2 border-t border-gray-700">
                  {t("project_code_not_ready")}
                </p>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border-[#00B7FF]/50 text-[#00B7FF] hover:bg-[#00B7FF] hover:text-black transition-all"
              >
                {t("project_in_dev_close")}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
