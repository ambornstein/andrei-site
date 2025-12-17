import { UnityChip } from "@/components/icons/chips";
import ProjectPanel, { getIconChip } from "@/components/ProjectPanel";
import { getProjects } from "@/lib/util";

export default async function GamesAndVRPage() {
    return <>
        <h2>Games and VR Projects</h2>
        <div className="grid grid-cols-2 gap-8">
            {getProjects("game", 6).map((project =>
                <ProjectPanel srcUrl={project.imagePath} label={project.label} description={project.description} linkRoute={project.pagePath}>
                    {project.techStack.map(getIconChip)}
                </ProjectPanel>
            ))}
        </div>
    </>
}