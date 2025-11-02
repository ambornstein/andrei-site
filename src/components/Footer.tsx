import Image from "next/image"

export default function Footer() {
    return <footer className="max-w-md w-[25%] h-full m-auto pb-12 mt-auto flex flex-row items-end justify-around">
        <a href="https://www.instagram.com/andrei_bornstein/">
            <Image
                className="invert dark:invert-0"
                src="/icons/instagram.svg"
                alt="Instagram"
                width={40}
                height={40} />
        </a>
        <a href="https://www.linkedin.com/in/andrei-b-6542a1142/">
            <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40} />
        </a>
        
        <a href="https://github.com/ambornstein">
            <Image
                src="/icons/github-mark-white.png"
                alt="GitHub"
                width={40}
                height={40} />
        </a>
    </footer>
}