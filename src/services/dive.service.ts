import { Dive } from "../pages/dive/dive.type"

export const createDive = (): number => {
  console.log("coucou")
  return 1
}

export const getDives = async (): Promise<Dive[]> => {
  const dives = await fetch("http://localhost:8080/v1/dive/list", {
    method: "GET"
  })

  if (!dives.ok) {
    throw new Error(`Response status: ${dives.status}`);
  }

  return dives.json()
}