import Image from "next/image"

export default () => {
    return (
        <>
            <section>
                <h1>Enchantech 2025</h1>
                <Image className="w-full my-4" src="/projects/enchantech.jpg"
                    alt="Next.js logo"
                    width={800}
                    height={400}
                    priority />
            </section>
            <section >
                <p>Enchantech has been a yearly event hosted by the Reality ColLab. This year, I was invited to create a new space for the event.</p>
                <p>In collaboration with developers at HCC's Reality ColLab, we developed a virtual space using Unity3D and Spatial SDK for HCC’s Enchantech Halloween Event.
                    As a team, we designed areas and quests to engage and immerse students in the virtual world while informing them about HCC Cares services.
                    This newly created space, called Enchantech City, invited students to learn about developing XR environments while learning about HCC Cares — HCC's food pantry, emergency financial assistance, health care, and emergency housing resources.</p>

                <h2>Technical Details</h2>
                <p>
                    This space was created with premade assets from the Unity Store, including the substantial and excellently executed modular city scene. This asset was compatible with
                    Unity's Universal Render Pipeline for rendering and lighting, allowing high quality graphics to be acheived, including particle system visual effects.
                    Spatial SDK was used to deploy the Unity-created space to be accessed through the web client and VR headsets. Also, the quest feature and interactive elements from the Spatial SDK
                    were used to create a narrative for the space with player interaction.
                </p>
            </section> 
        </>
    )
}