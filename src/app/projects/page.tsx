export default () => {
    return (
        <div className="m-auto container">
            <div className="mx-4 py-12">
                <h1 className="text-2xl">Aquarium Site</h1>
                <div className="inline-flex gap-8">
                    <a href="../#sites">Back</a>
                    <a href="https://thc-aquariumratings.com">Live Site</a>
                    <a href="https://github.com/ambornstein/JellyfishMap">Source Code</a>
                </div>
                <div>
                    <h2>FAQs</h2>
                    <h3>What frameworks was this site build with?</h3>
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
            </div>
        </div>
    )
}