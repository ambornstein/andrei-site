import Image from "next/image"

export default () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <Image src="/projects/evo/exo-prototype.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
                <Image src="/projects/evo/exo-inventory.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
                <Image src="/projects/evo/exo-skills.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized />
            </div>
        </>
    )
}