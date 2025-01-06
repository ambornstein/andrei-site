import Image from "next/image";

export default () => {
    return (
        <div className="container m-auto p-4">
            <div className="mx-auto py-12 px-4 space-y-8 md:max-w-lg max-w-md">
                <a className="panel-link" href="../#sites">Back</a>
                <Image
                    src="/house-2.PNG"
                    alt="Blender Gallery"
                    width={600}
                    height={300}
                    unoptimized
                />
                <Image
                    src="/cutout.PNG"
                    alt="Blender Gallery"
                    width={600}
                    height={300}
                    unoptimized
                />
                <Image
                    src="/experimental-cube.PNG"
                    alt="Blender Gallery"
                    width={600}
                    height={300}
                    unoptimized
                />
                <Image
                    src="/blender-model.PNG"
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
        </div>
    )
}