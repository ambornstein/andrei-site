export default function Navbar() {
  return <nav className="flex pt-4 items-center w-full">
    <h1>Andrei Bornstein</h1>
    <ul className="flex ml-auto gap-4">
      <li><a href="/">Home</a></li>

      <li className="group">Projects
        <ul className="fixed top-12 -translate-x-2 bg-zinc-800 border-4 border-neutral-700 p-2 z-10 group-hover:block hover:block hidden">
          <li>Websites</li>
          <li>Games and VR</li>
        </ul>
      </li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
}