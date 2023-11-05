import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll, // whatever response we get from this method, we're gonna save this in cache against the above queryKey.
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
