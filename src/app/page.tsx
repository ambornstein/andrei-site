import PreviewPanel from "@/components/PreviewPanel";
import { getProjects } from "@/lib/util";
const IMAGE_REGEX = /^\.(png|gif|ico|jpg|jpeg)$/

export default async function Home() {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
    window.scrollBy(0, 0);
  }

  return <div className="column-view w-full">
    <section className="column-view max-w-md m-auto my-8">
      <h1>Welcome to my Portfolio Site</h1>
      <h2>I’m Andrei, a full-stack developer and game designer/developer. This portfolio is a collection of the projects and works I have created so far.</h2>
    </section>
    <section className="column-view panel">
      <h2>Website Projects</h2>
      <div className="preview-grid">
        {getProjects("website", 2).map((project =>
          <PreviewPanel srcUrl={project.imagePath} label={project.label} linkRoute={project.pagePath}/>
         ))}
      </div>
      <p className="ml-auto">
        <a href="/websites">
          See All {'>>'}
        </a>
      </p>
    </section>
    <section className="column-view panel">
      <h2>Game and VR Projects</h2>
      <div className="preview-grid">
        {getProjects("game", 2).map((project =>
          <PreviewPanel srcUrl={project.imagePath} label={project.label} linkRoute={project.pagePath}/>
         ))}
      </div>
      <p className="ml-auto">
        <a href="/games-and-vr">
          See All {'>>'}
        </a>
      </p>
    </section>
  </div>
}
