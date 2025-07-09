import ProjectPage from "../../../template/ProjectPage"

export default () => {
    return (
        <ProjectPage>
            <h1>Squad Tactics Prototype</h1>
            <iframe className="mx-auto aspect-video max-w-full" width="512" src="https://www.youtube.com/embed/036747BSopQ?si=xd7icRiEaa6X61O0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2 className="mb-14">Special thanks to the creators of these assets</h2>
            <div className="grid grid-cols-2 gap-8">
                <a href="https://assetstore.unity.com/packages/3d/animations/basic-motions-free-154271">
                    <h2>Basic Motions</h2>
                    — Kevin Iglesias, Unity Store
                </a>
                <a href="https://assetstore.unity.com/packages/3d/props/guns/low-poly-customizable-weapons-sight-shader-123046">
                    <h2>LOW POLY Customizable Weapons</h2>
                    — Aurelien Durier, Unity Store
                </a>
                <a href="https://github.com/pickles976/RTS_selection/blob/master/global_selection.cs">
                    <h2>RTS Selection</h2>
                    — pickles976, GitHub
                </a>
                <a href="https://assetstore.unity.com/packages/3d/characters/humanoids/humans/free-scavenger-261065">
                    <h2>Free Scavenger</h2>
                    — Paul N, Unity Store
                </a>
                <a href="https://www.youtube.com/watch?v=2ajD1GDbEzA">
                    <h2>Grid Inventory System</h2>
                    — Greg Dev Stuff, Youtube
                </a>
                <a href="https://assetstore.unity.com/packages/tools/particles-effects/quick-outline-115488">
                    <h2>Quick Outline</h2>
                    — Chris Nolet, Unity Store
                </a>
            </div>
        </ProjectPage>
    )
}