import useTrailers from "../hooks/useTrailers"

interface Props {
    gameId: number
}
const GameTRailer = ({ gameId }: Props) => {

    const { data, error, isLoading } = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error; // if error, react router catches it and display ErrorPage
    const first = data?.results[0];
    return first ?
        <video
            src={first.data[480]}
            poster={first.preview}
            controls
        />
        : null;
}

export default GameTRailer