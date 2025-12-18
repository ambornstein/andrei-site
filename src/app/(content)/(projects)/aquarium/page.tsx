import Image from "next/image"

export default () => {
    return (
        <>
            <h1>Aquarium Site</h1>
            <Image className="w-full my-4" src="/projects/aquarium/aquarium-landing.PNG"
                alt="Next.js logo"
                width={800}
                height={300}
                priority />
            <div className="flex flex-row flex-wrap gap-4">
                <a className="button" href="https://thc-aquariumratings.com">Live Site</a>
                <a className="button" href="https://github.com/ambornstein/JellyfishMap">Git Repository</a>
            </div>
            <div>
                <p>This is project created to host reviews of aquariums all over the US.
                    Each aquarium can have multiple reviews including overall quality rating and jellyfish exhibit rating, as well as a gallery of user-uploaded photos.
                    The reviews are only posted with permission but available to be viewed publicly by anyone.
                    This site implements a custom JWT authentication mechanism without using any frameworks. </p>

                <br />

                <h2>What tech stack was this site built with?</h2>
                <p>This site uses React.JS, Node.JS, and Express.JS, and MongoDB.</p>

                <ul className="list-disc list-inside">
                    <li><span className="font-semibold underline">Backend:</span> Express.js, Node.js</li>
                    <li><span className="font-semibold underline">Frontend:</span> React.js</li>
                    <li><span className="font-semibold underline">Database:</span> MongoDB</li>
                    <li><span className="font-semibold underline">Map API:</span> MapBox SDK</li>
                    <li><span className="font-semibold underline">Image Hosting and Uploads:</span> Google Cloud Buckets, Multer</li>
                    <li><span className="font-semibold underline">Cloud Deployment:</span> Google Cloud Run</li>
                </ul>

                <br />

                <h2>Site Features</h2>
                <ul className="list-disc list-inside">
                    <li>Interactive Map with over 100 aquarium locations in the US</li>
                    <li>JWT User authentication from scratch</li>
                    <li>Ability for verified users to post reviews of aquariums</li>
                    <li>Image uploading for verified users</li>
                </ul>
            </div>
        </>
    )
}