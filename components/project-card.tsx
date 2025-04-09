import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectProps {
  project: {
    title: string
    description: string
    tags: string[]
    imageUrl: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] border border-transparent hover:border-gray-100 will-change-transform">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="font-normal">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
