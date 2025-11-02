import Image from "next/image"

export default () => {
    return (
        <>
            <h1>Aquarium Site</h1>
            <Image src="/aquarium-landing.PNG"
                alt="Next.js logo"
                width={800}
                height={300}
                priority />
            <div className="flex flex-row flex-wrap gap-4">
                <a className="button" href="https://thc-aquariumratings.com">Live Site</a>
                <a className="button" href="https://github.com/ambornstein/JellyfishMap">Source Code</a>
            </div>
            <div>
                <h2>FAQs</h2>
                <h3>What frameworks was this site built with?</h3>
                <p>This site uses React.JS, Node.JS, and Express.JS, and MongoDB, making it a MERN stack project.</p>

                <h3>How is authentication handled?</h3>
                <p>I have created a custom authentication system to implement this functionality.</p>

                <h3>How are reviews stored?</h3>
                <p>MongoDB stores each review and keeps track of the time it was made and the aquarium it's attached to.</p>

                <h3>How are images stored?</h3>
                <p>Each uploaded image goes to a Google Cloud Bucket with the use of Multer.</p>

                <h3>Who can add reviews and images?</h3>
                <p>While anyone can view the reviews, only privileged users and the site owner have the credentials to log in and add media. </p>
            </div>
        </>
    )
}