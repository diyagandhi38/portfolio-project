import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
      <Card className="max-w-3xl mx-auto shadow-md">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
              <a href="mailto:gandhi.di@northeastern.edu" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>gandhi.di@northeastern.edu</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
              <a
                href="https://linkedin.com/in/diya-gandhi-3735321b9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
              <a
                href="https://github.com/diya02327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
