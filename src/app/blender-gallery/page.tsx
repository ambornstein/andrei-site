import Image from "next/image";
import ProjectPage from "../../template/ProjectPage";

export default () => {
    return (
        <ProjectPage>
            <div className="flex gap-2 my-24 flex-wrap flex-shrink justify-center">
                <Image className="max-w-[346px] sm:max-w-lg"
                    src="/house-2.PNG"
                    alt="Blender Gallery"
                    width={948}
                    height={684}
                    unoptimized
                />
                <Image className="max-w-[346px] sm:max-w-lg"
                    src="/cutout.PNG"
                    alt="Blender Gallery"
                    width={1170}
                    height={730}
                    unoptimized
                />
                <Image
                    src="/diner-scale.PNG"
                    alt="Blender Gallery"
                    width={993}
                    height={503}
                />
                <Image
                    src="/church.png"
                    alt="Blender Gallery"
                    width={600}
                    height={300}
                    unoptimized
                />
                <Image
                    src="/marble-desk.PNG"
                    alt="Blender Gallery"
                    width={600}
                    height={300}
                    unoptimized
                />
            </div>
        </ProjectPage>
    )
}