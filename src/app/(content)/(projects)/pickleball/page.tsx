import Image from "next/image"

export default () => {
    return (
        <>
            <section>
                <h1>Houston Pickleball Hub</h1>
                <Image className="w-full my-4" src="/projects/pickle-site.png"
                    alt="Next.js logo"
                    width={800}
                    height={400}
                    priority />
                <div className="flex flex-row flex-wrap gap-4">
                    <a className="button" href="https://houston-pickleball-hub.vercel.app/">Live Site</a>
                    <a className="button" href="https://github.com/ambornstein/pickleball-hub">Git Repository</a>
                </div>
            </section>
            <section >
                <p>A proof-of-concept hub site that aggregates many pickleball venues and displays them on an interactive map. Initially it was created to collect pickleball locations in the city of Houston, Texas. At some point, it may be expanded beyond pickleball and beyond the Houston area. </p>
                <br />
                <h2>What tech stack was this site built with?</h2>
                <ul className="list-disc list-inside">
                    <li>Next.js</li>
                    <li>NextAuth</li>
                    <li>TailwindCSS</li>
                    <li>MongoDB</li>
                    <li>MapBox SDK</li>
                </ul>
                <br />
            </section>
            <section>
                <h2>Interactive Map</h2>
                <Image className="max-w-[600px] mx-auto my-4" src="/projects/picklemap.PNG"
                    alt="Next.js logo"
                    width={800}
                    height={800}
                    priority />
                <p>This site uses geocoding to place submitted locations on the interactive map.
                    Both the geocoding API and interactive map API are provided by the Mapbox SDK.
                </p>
            </section>
        </>
    )
}