'use client'
import Image from "next/image"

export default function AboutPage() {
    return <>
        <h1 className="m-auto mb-4">About Me</h1>
        <div className="flex gap-10">
            <Image src="/andrei-crop.jpg" className="inline" width={300} height={200} alt=""></Image>
            <div>
                <p>
                    My name’s Andrei and I’m a fullstack developer with a keen interest in game design, 3D modeling/rendering, as well as XR/VR experiences.
                </p>
                <p>
                    I have been fascinated by software ever since I was young, when I started playing video games. Game development workshops, robotics camps, and especially Minecraft modding camps helped me get a foundational understanding of coding and the technical aspects of games. Ever since then, I have been teaching myself coding and working on my own games and software projects.
                </p>
                <p>
                    For me it was easy to decide that I wanted to study computer science in university. I continued to develop games and hobby projects in my spare time, while learning about algorithms, 3D graphics, and software engineering in school. I was amazed at how many of the classes I took had some application with regards to projects I had been wanting to make. In May of 2024 I finally got my B.S. in Computer Science from Worcester Polytechnic Institute.
                </p>
            </div>
        </div>
        <a className="text-xl w-[30%] button m-auto mt-8" href="/AndreiBornstein-Resume-September2025.pdf">
        Resume
        </a>
    </>
}