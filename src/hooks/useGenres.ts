import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll, // whatever response we get from this method, we're gonna save this in cache against the above queryKey.
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;
