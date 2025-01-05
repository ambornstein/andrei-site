import Image from "next/image";

export default () => {
    return (
        <div className="container p-4 m-auto flex flex-col gap-2 items-center">
            <Image
                src="/house-2.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/cutout.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/experimental-cube.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/blender-model.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
            <Image
                src="/marble-desk.png"
                alt="Blender Gallery"
                width={600}
                height={600}
                unoptimized
            />
        </div>
    )
}