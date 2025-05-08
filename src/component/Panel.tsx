import Image from "next/image"

export default (props: { pointURL: string, imgUrl: string, labelText: string }) => {
    return (
        <a className="group hover:bg-[--background] hover:scale-105 transition-all" href={props.pointURL}>
            <label className="hover-label">{props.labelText}</label>
            <Image src={props.imgUrl}
                alt="Next.js logo"
                width={600}
                height={300}
                priority />
        </a>
    )
}