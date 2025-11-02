import Image from "next/image"

export function UnityChip() {
    return <div className="chip">
        <Image src="/icons/unity.png" width={32} height={32} alt="Unity"/>
        <h3>Unity</h3>
    </div>
}

export function SpatialChip() {
    return <div className="chip">
        <Image src="/icons/spatial.png" width={32} height={32} alt="Spatial.io"/>
        <h3>Spatial</h3>
    </div>
}


export function GodotChip() {
    return <div className="chip">
        <Image src="/icons/Godot_icon.svg" width={32} height={32} alt="Godot"/>
        <h3>Godot</h3>
    </div>
}

export function BlenderChip() {
    return <div className="chip">
        <Image src="/icons/blender.png" width={32} height={32} alt="Blender" unoptimized/>
        <h3>Blender</h3>
    </div>
}

export function NextChip() {
    return <div className="chip">
        <Image src="/icons/next.svg" width={64} height={32} alt="Next.js"/>
    </div>
}

export function ReactChip() {
    return <div className="chip">
        <Image src="/icons/react.png" width={32} height={32} alt="React"/>
        <h3>React.js</h3>
    </div>
}

export function ExpressChip() {
    return <div className="chip">
        <Image src="/icons/expressjs.svg" width={32} height={32} alt="Express.js"/>
        <h3>Express.js</h3>
    </div>
}
export function MongoChip() {
    return <div className="chip">
        <Image src="/icons/mongodb.svg" width={32} height={32} alt="MongoDB"/>
        <h3>MongoDB</h3>
    </div>
}

export function MapboxChip() {
    return <div className="chip">
        <Image src="/icons/mapbox-icon.svg" width={32} height={32} alt="Mapbox"/>
        <h3>Mapbox API</h3>
    </div>
}

export function JavaChip() {
    return <div className="chip">
        <Image src="/icons/java.svg" width={32} height={32} alt="Java" unoptimized/>
        <h3>Java</h3>
    </div>
}

export function PrismaChip() {
    return <div className="chip">
        <Image src="/icons/prisma.svg" width={32} height={32} alt="Prisma ORM" unoptimized/>
        <h3>Prisma ORM</h3>
    </div>
}


