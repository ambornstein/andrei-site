import Image from "next/image"

export default function Panel(props: { pointURL: string, imgUrl: string, labelText: string })  {
    return (
        <div className="group">
            <a href={props.pointURL}>
                <label className="hover-label">{props.labelText}</label>
                <Image src={props.imgUrl}
                    alt="Next.js logo"
                    width={600}
                    height={300}
                    priority />
            </a>
        </div>
    )
}