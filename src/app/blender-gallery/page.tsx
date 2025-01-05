import Image from "next/image";

export default () => {
    return (
        <div className="container p-4 m-auto flex flex-col gap-2 items-center">
            <Image
                src="/blender/house-2.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                priority
            />
            <Image
                src="/blender/cutout.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                priority
            />
            <Image
                src="/blender/experimental-cube.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                priority
            />
            <Image
                src="/blender/blender-model.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                priority
            />
            <Image
                src="/blender/marble-desk.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                priority
            />
        </div>
    )
}