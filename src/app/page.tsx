'use client'
import Panel from "@/components/Panel";
import Showcase from "@/components/Showcase";
import Image from "next/image";

const IMAGE_REGEX = /^\.(png|gif|ico|jpg|jpeg)$/

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
    <main>
      <section className="mobile-op mx-auto min-h-screen h-fit align-middle">
        <div>
          <header className="mx-auto pt-4">
            <h1 className="text-center p-2 mx-2">Andrei Bornstein</h1>
          </header>
          <div id="about">
            <div className="flow-root m-auto text-lg">
              <h2 className="pt-4 pb-8 text-center">Hi, I'm Andrei, I am a:</h2>
              <img src="/andrei-crop.jpg" className="float-start me-4 w-[50%] max-h-[650px] object-cover"></img>
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
        </div>
      </section>
      <section className="flex flex-col bg-gradient-to-b from-[--background] to-[--foreground] pt-8">
        <h1 className="m-auto mb-8 w-fit">Showcase</h1>
        <ul className="flex flex-row justify-center gap-4 text-center mx-4 text-nowrap">
          <a className="hover-chip" tabIndex={0} onClick={() => scrollTo("sites")}>Websites</a>
          <a className="hover-chip" tabIndex={1} onClick={() => scrollTo("games")}>Games</a>
          <a className="hover-chip" tabIndex={2} onClick={() => scrollTo("art")}>Gallery</a>
        </ul>
        <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <Showcase id="sites">
            <Panel pointURL="/embedded-finance" labelText="Embedded Finance Tuition Portal (Capstone)" imgUrl="/dashboard-exp.png" />
            <Panel pointURL="/projects" labelText="Aquarium Jellyfish Exhibit Review Map" imgUrl="/aquarium-landing.PNG" />
            <Panel pointURL="http://kevinthecarpenter.com" labelText="Kevin the Carpenter's Comedy Site" imgUrl="/kevin-site-landing.PNG" />
          </Showcase>
          <Showcase id="games">
            <Panel pointURL="/evo-prototype" labelText="Top-Down ARPG Prototype" imgUrl="/exo-prototype.png" />
            <Panel pointURL="/dmh" labelText="Real-time Squad Tactics Prototype" imgUrl="/game-banner.PNG" />
            <Panel pointURL="https://github.com/ambornstein/ASCII-Game-Framework" labelText="ASCII Roguelike Framework" imgUrl="/roguelike-demo.gif" />
          </Showcase>
          <Showcase id="art">
            <Panel pointURL="https://www.thingiverse.com/ambornstein/designs" labelText="SOLIDWORKS Designs on Sketchfab" imgUrl="/GUIDE-COMP.png" />
            <Panel pointURL="/blender-gallery" labelText="Blender Designs and Game Assets" imgUrl="/house-2.PNG" />
          </Showcase>
        </div>
        <footer className="flex flex-wrap mx-24">
          <p className="text-background">
            <span>amborn02@gmail.com</span>  •  <span><a href="https://github.com/ambornstein">github.com/ambornstein</a></span></p>
        </footer>
      </section>
    </main>
  );
}
