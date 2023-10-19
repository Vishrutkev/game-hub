
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const { data, error, isLoading } = useGame();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];  // creating 6 skeleton card

    return (
        <>
            {error && <Text>{error} </Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} padding='10px'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                )}
                {data.map(game =>
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid