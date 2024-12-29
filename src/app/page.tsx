'use client'
import Image from "next/image";

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
    window.scrollBy(0, 0);
  }

  return (
    <div className="min-h-screen p-4 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="m-auto">
        <div className="w-fit m-auto bg-stone-300 dark:bg-neutral-800 ring-2 p-2 rounded-md ring-neutral-700">
          <h1 className="text-4xl">Andrei Bornstein</h1>
        </div>
        <ul className="flex flex-row justify-space w-fit max-w-full bg-[--highlight] rounded-2xl p-2 m-auto my-4 text-nowrap
        *:text-md *:p-1 *:rounded-full">
          <a className="hover-chip" tabIndex={0} onClick={() => scrollTo("about")}>About</a>
          <a className="hover-chip" tabIndex={0} onClick={() => scrollTo("sites")}>Websites</a>
          <a className="hover-chip" tabIndex={1} onClick={() => scrollTo("games")}>Games</a>
          <a className="hover-chip" tabIndex={2} onClick={() => scrollTo("art")}>2D/3D Art</a>
        </ul>
      </header>
      <main className="flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory *:snap-center *:scroll-mt-10">
        <div id="about" className="min-w-full h-full items-center">
          <div className="sm:w-7/12 flow-root m-auto text-lg">
            <p className="pb-8 text-3xl text-center">Hi, I'm Andrei, I am a:</p>
            <img src="/andrei-crop.jpg" className="float-start me-4 sm:w-2/5 w-3/5"></img>
            <div className="tracking-wide leading-7">
              <ul className="inline w-fit">
                <li className="m-auto bg-[--highlight] p-1 my-2 rounded-sm">Fullstack Developer</li>
                <li className="m-auto bg-[--highlight] p-1 my-2 rounded-sm">Game Dev</li>
                <li className="m-auto bg-[--highlight] p-1 my-2 rounded-sm">Digital & 3D Artist</li>
              </ul>
              <p>I have been fascinated by software ever since I was young, when I started playing video games.
                Game development workshops, robotics camps, and especially Minecraft modding camps helped me get a foundational understanding of coding
                and the technical aspects of games. Ever since then, I have been teaching myself coding and working on my own games and software projects.
                <br /><br />
                For me it was a no brainer that I would study computer science when I finished high school. In May of 2024 I finally got my B.S. in
                Computer Science from <a href="https://www.wpi.edu/">Worcester Polytechnic Institute</a>
              </p>
            </div>
          </div>
        </div>
        <div id="sites" className="vert-arrangement">
          <a className="group hover:bg-[--highlight]">
            <p className="hover-label">Embedded Finance-based Tuition Portal for WPI and Citizens Bank</p>
            <Image src="/dashboard-exp.png"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </a>
          <a className="group hover:bg-[--highlight]">
            <p className="hover-label">
              <b>Grey Matter Boyz</b> Band Site
            </p>
            <Image src="/grey-matter-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </a>
          <a className="group hover:bg-[--highlight]">
            <p className="hover-label">
              Kevin the Carpenter's Comedy Site
            </p>
            <Image src="/kevin-site-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </a>
          <a className="group hover:bg-[--highlight]" href="/projects">
            <p className="hover-label">
              Aquarium Jellyfish Exhibit Review Map
            </p>
            <Image src="/aquarium-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </a>
        </div>
        <div id="games" className="vert-arrangement">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div id="art" className="vert-arrangement">
          <a className="group hover:bg-[--highlight]" href="https://www.thingiverse.com/ambornstein/designs">
            <p className="hover-label">SOLIDWORKS Designs on Sketchfab</p>
            <Image
              src="/GUIDE-COMP.png"
              alt="Next.js logo"
              width={600}
              height={600}
              priority
            />
          </a>
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        Operation Asymmetry
      </footer>
    </div>
  );
}
