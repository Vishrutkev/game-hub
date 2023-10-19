import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //array of objects, where each object has a property called platform of typr Platform
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGame = () => useData<Game>("/games");

export default useGame;
