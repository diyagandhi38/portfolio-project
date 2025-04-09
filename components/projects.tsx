import ProjectCard from "@/components/project-card"

const projectsData = [
  {
    title: "PCOS Detection using ML",
    description:
      "A machine learning model to detect Polycystic Ovary Syndrome (PCOS) from medical data, improving early diagnosis rates.",
    tags: ["Machine Learning", "Healthcare", "Python"],
    imageUrl: "https://conquerpcos.org/wp-content/uploads/2020/04/PCOS-Symptoms-min.jpg",
  },
  {
    title: "Portfolio Optimization Bot",
    description:
      "An automated system that analyzes and optimizes investment portfolios based on risk tolerance and market conditions.",
    tags: ["Finance", "Algorithms", "Data Analysis"],
    imageUrl:
      "https://www.shutterstock.com/image-vector/financial-report-reviewing-investment-portfolio-260nw-2171894367.jpg",
  },
  {
    title: "Financial Analysis Dashboard",
    description:
      "Interactive dashboard for visualizing financial data and generating insights for business decision-making.",
    tags: ["Data Visualization", "React", "Finance"],
    imageUrl:
      "https://www.shutterstock.com/image-vector/financial-report-reviewing-investment-portfolio-260nw-2171894367.jpg",
  },
]

export default function Projects() {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${
              projectsData.length % 2 !== 0 && index === projectsData.length - 1
                ? "md:col-span-2 md:max-w-md md:mx-auto"
                : ""
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
