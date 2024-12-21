import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-neutral-800 items-center justify-between overflow-hidden min-h-screen p-4 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <header className="mt-4 w-full mx-auto">
        <div className="w-fit m-auto bg-slate-200 ring-4 p-6 rounded-md">
          <h1 className="text-4xl w-fit m-auto">Andrei Bornstein</h1>
        </div>
      </header>
      <ul className="pt-8 flex w-fit m-auto flex-row *:text-lg gap-8">
        <li>Websites</li>
        <li>Games</li>
        <li>3D Design</li>
      </ul>
      <main className="flex overflow-x-scroll scroll-smooth scroll-m-96 snap-mandatory snap-x flex-row min-h-96 gap-8 row-start-2 py-12 items-center sm:items-start">
        <div className="snap-center min-w-full items-center flex flex-col gap-8">
          <div className="p-4 bg-neutral-300 hover:bg-stone-300">
            <Image src="/aquarium-landing.PNG"
              alt="Next.js logo"
              width={400}
              height={38}
              priority />
          </div>
          <div className="p-4 bg-neutral-300">
            <Image src="/kevin-site-landing.PNG"
              alt="Next.js logo"
              width={400}
              height={38}
              priority />
          </div>
          <div className="p-4 bg-neutral-300">
            <Image src="/dashboard_exp.PNG"
              alt="Next.js logo"
              width={400}
              height={38}
              priority />
          </div>
        </div>
        <div className="snap-center min-w-full items-center flex flex-col gap-8">
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
  );
}
