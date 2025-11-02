import { BlenderChip, ExpressChip, GodotChip, JavaChip, MapboxChip, MongoChip, NextChip, PrismaChip, ReactChip, SpatialChip, UnityChip } from "./icons/chips"
import PreviewPanel from "./PreviewPanel"

export function getIconChip(techName: string) {
    switch (techName) {
        case "Unity":
            return <UnityChip />
        case "Godot":
            return <GodotChip />
        case "Blender":
            return <BlenderChip />
        case "Spatial.io":
            return <SpatialChip />
        case "React.js":
            return <ReactChip />
        case "Next.js":
            return <NextChip />
        case "Express.js":
            return <ExpressChip />
        case "MongoDB":
            return <MongoChip />
        case "Mapbox API":
            return <MapboxChip />
        case "Java":
            return <JavaChip />
        case "Prisma ORM":
            return <PrismaChip />
    }
}

export default function ProjectPanel(props: { srcUrl: string, label: string, description: string, linkRoute: string, children: React.ReactNode }) {
    return <div className="space-y-2">
        <PreviewPanel srcUrl={props.srcUrl} label={props.label} linkRoute={props.linkRoute} />
        <div className="flex flex-row flex-wrap gap-2">
            {props.children}
        </div>
        <p>{props.description}</p>
    </div>
}