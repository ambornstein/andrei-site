import Image from "next/image"

export default function Panel(props: { pointURL: string, imgUrl: string, labelText: string }) {
    return (
        <div className="group flex flex-col align-top">
            <a href={props.pointURL} className="flex flex-col items-center">
                <label className="hover-label">
                    {props.labelText}</label>
                <Image src={props.imgUrl}
                    alt="Next.js logo"
                    className="lg:h-[340px] object-scale-down w-fit"
                    width={1920}
                    height={920}
                    priority />
            </a>
        </div>
    )
}