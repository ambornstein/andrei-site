import Image from "next/image"
import ProjectPage from "../../template/ProjectPage"

export default () => {
    return (
        <ProjectPage>
            <div className="flex flex-col items-center gap-4">
                <Image src="/exo-prototype.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
                <Image src="/exo-inventory.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
                <Image src="/exo-skills.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
            </div>
        </ProjectPage>
    )
}