import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <Card className="mx-auto max-w-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Diya Gandhi</h1>
          <p className="text-xl text-muted-foreground mb-8">Data Scientist | Software Developer</p>
          <Button size="lg" className="px-8">
            View My Work
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
