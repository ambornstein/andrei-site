import Image from "next/image"

export default function PreviewPanel(props: { srcUrl: string, label: string, linkRoute: string }) {
    return <a href={props.linkRoute}>
        <div className={`project-preview hover:opacity-70 transition-all bg-slate-700`}>
            <Image src={props.srcUrl} width={500} height={500} alt={props.label} className="h-full w-full object-cover drop-shadow-sm" />
            <h2 className={`absolute bg-slate-600 p-2 m-2 rounded-lg drop-shadow-lg`}>{props.label}</h2>
        </div>
    </a>
}