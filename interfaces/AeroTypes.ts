export interface UserTypes {
  points: number | null
}

export interface UserObj {
  points: number | null
  name: string | null
}

export interface ProductsTypes {
  cost: number
  id: string
  name: string
  category: string
  img: ImageTypes
}

export interface ImageTypes {
  hdUrl: string
  url: string
}
