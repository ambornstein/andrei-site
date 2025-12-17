export default function Navbar() {
  return <nav className="flex pt-4 items-center w-full">
    <h1>Andrei Bornstein</h1>
    <ul className="flex ml-auto gap-4">
      <li><a href="/">Home</a></li>

      <li className="group">Projects
        <ul className="fixed top-11 -translate-x-3 bg-[--highlight] rounded-lg py-1 px-2 space-y-1 z-10 group-hover:block hover:block hidden">
          <li><a href="/websites">Websites</a></li>
          <li><a href="/games-and-vr">Games and VR</a></li>
        </ul>
      </li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
}