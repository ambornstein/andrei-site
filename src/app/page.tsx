'use client'
import Image from "next/image";

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
    window.scrollBy(0,0)
  }

  return (
    <div className="dark:bg-neutral-800 min-h-screen p-4 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="m-auto">
        <div className="w-fit m-auto bg-stone-300 ring-2 p-2 rounded-md ring-neutral-700">
          <h1 className="text-4xl">Andrei Bornstein</h1>
        </div>
        <ul className="flex flex-row justify-space w-fit max-w-full bg-neutral-400 rounded-2xl p-2 m-auto my-4 text-nowrap
        *:text-md *:p-1 *:rounded-full">
          <a className="focus:bg-stone-500 hover:text-gray-300" tabIndex={0} onClick={() => scrollTo("about")}>About</a>
          <a className="focus:bg-stone-500 hover:text-gray-300" tabIndex={0} onClick={() => scrollTo("sites")}>Websites</a>
          <a className="focus:bg-stone-500 hover:text-gray-300" tabIndex={1} onClick={() => scrollTo("games")}>Games</a>
          <a className="focus:bg-stone-500 hover:text-gray-300" tabIndex={2} onClick={() => scrollTo("games")}>2D/3D Art</a>
        </ul>
      </header>
      <main className="flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory *:snap-center *:scroll-mt-10">
        <div id="about" className="min-w-full h-full items-center">
          <div className="w-fit flow-root m-auto ">
            <img src="public/andrei-crop.jpg" className="float-start me-4 w-5/12"></img>
            <p className="inline text-lg">My name is Andrei and I am a</p>
              <ul className="inline w-fit">
                <li className="m-auto bg-neutral-300 p-1 my-2 rounded-sm">Fullstack Developer</li>
                <li className="m-auto bg-neutral-300 p-1 my-2 rounded-sm">Game Dev</li>
                <li className="m-auto bg-neutral-300 p-1 my-2 rounded-sm">Digital & 3D Artist</li>
              </ul>
            
          </div>
        </div>
        <div id="sites" className="min-w-full items-center flex flex-col sm:gap-8 gap-2
          *:border-fuchsia-950 *:border-4 *:rounded-md *:p-2">
          <div className="hover:bg-neutral-300">
            <Image src="public/aquarium-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </div>
          <div className="hover:bg-neutral-300">
            <Image src="public/grey-matter-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </div>
          <div className="hover:bg-neutral-300">
            <Image src="public/kevin-site-landing.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </div>
          <div className="hover:bg-neutral-300">
            <Image src="public/dashboard_exp.PNG"
              alt="Next.js logo"
              width={600}
              height={300}
              priority />
          </div>
        </div>
        <div id="games" className="min-w-full items-center flex flex-col gap-8">
          <Image
            className="dark:invert"
            src="public/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        Operation Asymmetry
      </footer>
    </div>
  );
}
