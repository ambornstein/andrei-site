'use client'
import Panel from "@/components/Panel";
import Image from "next/image";

const IMAGE_REGEX = /^\.(png|gif|ico|jpg|jpeg)$/

export default function Home() {
  /*const allBlend = mapFiles(require.context('./public/blender', true, IMAGE_REGEX))
  function mapFiles(context: any) {
    const keys = context.keys();
    const values = keys.map(context);
    return keys.reduce((accumulator: any, key: any, index: number) => ({
      ...accumulator,
      [key]: values[index],
    }), {});
  }*/

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
    window.scrollBy(0, 0);
  }

  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] light-grad dark:dark-grad">
      <header className="md:max-w-md mx-auto pt-4">
        <div className="bg-background text-center ring-2 p-2 mx-2 rounded-md ring-neutral-700">
          <h1>Andrei Bornstein</h1>
        </div>
        <ul className="flex flex-row justify-around text-center bg-[--highlight] rounded-2xl p-2 mx-4 mt-4 text-nowrap
        *:text-md *:rounded-full">
          <a className="hover-chip" tabIndex={0} onClick={() => scrollTo("about")}>About</a>
          <a className="hover-chip" tabIndex={0} onClick={() => scrollTo("sites")}>Websites</a>
          <a className="hover-chip" tabIndex={1} onClick={() => scrollTo("games")}>Games</a>
          <a className="hover-chip" tabIndex={2} onClick={() => scrollTo("art")}>2D/3D Art</a>
        </ul>
      </header>
      <main className="flex flex-row mb-4 mt-2 mx-2 md:mx-0 overflow-x-auto scroll-smooth snap-x snap-mandatory *:snap-center *:scroll-mt-10 ">
        <div id="about" className="min-w-full h-full items-center">
          <div className="sm:w-7/12 flow-root m-auto text-lg">
            <h2 className="pt-4 pb-8 text-center">Hi, I'm Andrei, I am a:</h2>
            <img src="/andrei-crop.jpg" className="float-start me-4 sm:w-2/5 w-3/5"></img>
            <div>
              <ul className="inline w-fit">
                <li className="m-auto bg-[--highlight] p-1 my-2">Fullstack Developer</li>
                <li className="m-auto bg-[--highlight] p-1 my-2">Game Dev</li>
                <li className="m-auto bg-[--highlight] p-1 my-2">Digital & 3D Artist</li>
              </ul>
              <p>I have been fascinated by software ever since I was young, when I started playing video games.
                Game development workshops, robotics camps, and especially Minecraft modding camps helped me get a foundational understanding of coding
                and the technical aspects of games. Ever since then, I have been teaching myself coding and working on my own games and software projects.
              </p>
              <p>
                For me it was a no brainer that I would study computer science when I finished high school. In May of 2024 I finally got my B.S. in
                Computer Science from <a href="https://www.wpi.edu/">Worcester Polytechnic Institute.</a>
              </p>
            </div>
            <div className="flex flex-row justify-around">
              <a href="https://www.instagram.com/andrei_bornstein/">
                <Image
                  className="invert dark:invert-0"
                  src="/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40} />
              </a>
              <a href="https://www.linkedin.com/in/andrei-b-6542a1142/">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40} />
              </a>
              <a className="panel-link" href="/Andrei-B-Custom-Resume.pdf" download>Resume</a>
            </div>
          </div>
        </div>
        <div id="sites" className="vert-arrangement h-fit overflow-y-hidden">
          <Panel pointURL="/embedded-finance" labelText="Embedded Finance-based Tuition Portal for WPI and Citizens Bank" imgUrl="/dashboard-exp.png" />
          <Panel pointURL="/projects" labelText="Aquarium Jellyfish Exhibit Review Map" imgUrl="/aquarium-landing.PNG" />
          <Panel pointURL="http://kevinthecarpenter.com" labelText="Kevin the Carpenter's Comedy Site" imgUrl="/kevin-site-landing.PNG" />
          <Panel pointURL="https://grey-matter-site--kevin-carpenter-app.us-central1.hosted.app/" labelText="Grey Matter Boyz Band Site" imgUrl="/grey-matter-landing.PNG" />
        </div>
        <div id="games" className="vert-arrangement">
          <Panel pointURL="/evo-prototype" labelText="Top-Down ARPG Prototype" imgUrl="/exo-prototype.png" />
          <Panel pointURL="/dmh" labelText="Real-time Squad Tactics Prototype" imgUrl="/game-banner.PNG" />
          <Panel pointURL="https://github.com/ambornstein/ASCII-Game-Framework" labelText="ASCII Roguelike Framework" imgUrl="/roguelike-demo.gif" />
        </div>
        <div id="art" className="vert-arrangement">
          <Panel pointURL="https://www.thingiverse.com/ambornstein/designs" labelText="SOLIDWORKS Designs on Sketchfab" imgUrl="/GUIDE-COMP.png" />
          <Panel pointURL="/blender-gallery" labelText="Blender Designs and Game Assets" imgUrl="/house-2.PNG" />
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
