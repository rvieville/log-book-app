export interface Dive {
  name: string
  depth: number
  country: string
  island: string
  weight: number
  description: string
  fishes: Fish[]
  medias: Media[]
  duration: number
  user: number
}

export interface Fish {
  id: number
  name: string
}

export interface Media {
  id: number
  url: string
}