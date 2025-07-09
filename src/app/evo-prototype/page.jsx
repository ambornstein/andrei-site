import Image from "next/image"

export default () => {
    return (
        <div className="container m-auto p-4">
            <div className="mx-auto py-12 px-4 space-y-8 md:max-w-lg max-w-md">
                <a className="panel-link" href="../#games">Back</a>
                <Image src="/exo-prototype.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized/>
                <Image src="/exo-inventory.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized/>
                <Image src="/exo-skills.png"
                    alt="Next.js logo"
                    width={600}
                    height={300} unoptimized/>
            </div>
        </div>
    )
}