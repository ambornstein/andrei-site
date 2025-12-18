import ProjectPanel, { getIconChip } from "@/components/ProjectPanel";
import { getProjects } from "@/lib/util";

export default async function WebsitesPage() {
    return <>
        <h2>Websites</h2>
        <div className="grid grid-cols-2 gap-6">
            {getProjects("website", 6).map((project =>
                <ProjectPanel key={project.label} srcUrl={project.imagePath} label={project.label} description={project.description} linkRoute={project.pagePath}>
                    {project.techStack.map(getIconChip)}
                </ProjectPanel>
            ))}
        </div>
    </>
}