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

  return <div className="column-view">
    <section className="column-view max-w-md m-auto mb-4">
      <h2>Welcome to my Portfolio Site</h2>
      <h3>I’m Andrei, a full-stack developer and game designer/programmer. This portfolio is a collection of the projects and works I have created so far.</h3>
    </section>
    <section className="column-view panel">
      <h2>Website Projects</h2>
      <div className="preview-grid">
        {getProjects("website", 2).map((project =>
          <PreviewPanel key={project.label} srcUrl={project.imagePath} label={project.label} linkRoute={project.pagePath}/>
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
          <PreviewPanel key={project.label} srcUrl={project.imagePath} label={project.label} linkRoute={project.pagePath}/>
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
