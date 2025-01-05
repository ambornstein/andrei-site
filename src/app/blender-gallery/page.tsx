import Image from "next/image";

export default () => {
    return (
        <div className="container p-4 m-auto flex flex-col gap-2 items-center">
            <Image
                src="/house-2.PNG"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/cutout.PNG"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/experimental-cube.PNG"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/blender-model.PNG"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/marble-desk.PNG"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
        </div>
    )
}