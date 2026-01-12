"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">{t("contact_title")}</h2>
        <p className="text-center text-gray-300 mb-12 text-pretty">{t("contact_description")}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t("contact_name")}
                  </label>
                  <Input id="name" name="name" required placeholder="John Doe" className="w-full" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t("contact_email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t("contact_message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00B7FF] border-[#00B7FF] hover:bg-[#00B7FF] hover:border-[#00B7FF] hover:shadow-[0_0_20px_rgba(0,183,255,0.6)] hover:text-black hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("contact_sending") : t("contact_send")}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-12">
                <CheckCircle2
                  size={64}
                  className="text-[#00B7FF] animate-pulse"
                  style={{ filter: "drop-shadow(0 0 20px rgba(0,183,255,0.6))" }}
                />
                <h3 className="text-2xl font-bold text-[#00B7FF]">{t("contact_success_title")}</h3>
                <p className="text-gray-300 text-center">{t("contact_success_message")}</p>
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover:border-primary hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300">
                  <Mail
                    className="text-muted-foreground group-hover:text-[#00B7FF] group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:zoia@anilir.de"
                    className="text-sm text-gray-300 hover:text-[#00B7FF] transition-colors"
                  >
                    zoia@anilir.de
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300">
                  <Github
                    className="text-muted-foreground group-hover:text-[#00B7FF] group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">GitHub</h3>
                  <a
                    href="https://github.com/CrystalGalaxy777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-[#00B7FF] transition-colors"
                  >
                    github.com/CrystalGalaxy777
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300">
                  <Linkedin
                    className="text-muted-foreground group-hover:text-[#00B7FF] group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)] transition-all"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/zoia-anilir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-[#00B7FF] transition-colors"
                  >
                    linkedin.com/in/zoia-anilir
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
