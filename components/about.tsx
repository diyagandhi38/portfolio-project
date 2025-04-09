import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section className="py-16" id="about">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      <Card className="max-w-3xl mx-auto shadow-md">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed">
            I'm an MS student in Information Systems with experience in machine learning, data analytics, and full-stack
            development. My passion lies at the intersection of technology and business, where I leverage data-driven
            approaches to solve complex problems. With a strong foundation in both technical and analytical skills, I
            strive to create impactful solutions that drive meaningful results.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
