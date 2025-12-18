export default function Navbar() {
  return <nav className="flex md:flex-row md:items-center flex-col items-baseline w-full pt-4 mb-4 gap-4">
    <h1><a href="/">Andrei Bornstein</a></h1>
    <ul className="flex md:ml-auto gap-4">
      <li className="group">Projects
        <ul className="fixed top-11 -translate-x-2 bg-[--highlight] rounded-lg py-1 px-2 space-y-1 z-10 group-hover:block hover:block hidden">
          <li><a href="/websites">Websites</a></li>
          <li><a href="/games-and-vr">Games and VR</a></li>
        </ul>
      </li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
}