import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[]; //array of objects, where each object has a property called platform of typr Platform
  metacritic: number;
  rating_top: number;
}
