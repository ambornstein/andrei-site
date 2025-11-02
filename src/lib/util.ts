import projectJSON from "../projects.json"

export function getProjects(type: "website" | "game", limit: number): any[] {
    return projectJSON.entries.filter((entry: any) => entry.type == type).slice(0, limit)
}