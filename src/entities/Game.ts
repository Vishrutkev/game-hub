import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[]; //array of objects, where each object has a property called platform of typr Platform
  metacritic: number;
  rating_top: number;
}
