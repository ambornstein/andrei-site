'use client'
import Image from "next/image";

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
      <header className="fixed w-fit top-4 left-1/2 sm:transform -translate-x-1/2">
        <div className="w-fit m-auto bg-neutral-300 ring-4 p-2  rounded-md">
          <h1 className="text-4xl w-full m-auto">Andrei Bornstein</h1>
        </div>
        <ul className="bg-slate-500 rounded-2xl p-4 flex m-auto my-4 flex-row  gap-4 text-nowrap
        *:text-lg *:p-2 *:rounded-full">
          <a className="focus:bg-zinc-400" tabIndex={0} onClick={() => scrollTo("sites")}>Websites</a>
          <a className="focus:bg-zinc-400" tabIndex={1} onClick={() => scrollTo("games")}>Games</a>
          <a className="focus:bg-zinc-400" tabIndex={2} onClick={() => scrollTo("games")}>2D/3D Art</a>
        </ul>
      </header>
      <div className="dark:bg-neutral-800 items-center justify-between overflow-auto min-h-screen p-4 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-row overflow-auto scroll-smooth snap-x snap-mandatory pb-8 items-center sm:items-start *:pt-44">
          <div id="sites" className="snap-center min-w-full items-center flex flex-col sm:gap-8 gap-2
          *:border-violet-400 *:border-2 *:rounded-md *:p-2">
            <div className="hover:bg-neutral-300">
              <Image src="/aquarium-landing.PNG"
                alt="Next.js logo"
                width={600}
                height={300}
                priority />
            </div>
            <div className="">
              <Image src="/grey-matter-landing.PNG"
                alt="Next.js logo"
                width={600}
                height={300}
                priority />
            </div>
            <div className="">
              <Image src="/kevin-site-landing.PNG"
                alt="Next.js logo"
                width={600}
                height={300}
                priority />
            </div>
            <div className="">
              <Image src="/dashboard_exp.PNG"
                alt="Next.js logo"
                width={600}
                height={300}
                priority />
            </div>
          </div>
          <div id="games" className="snap-center min-w-full items-center flex flex-col gap-8">
            <Image
              className="snap-center dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </>
  );
}
