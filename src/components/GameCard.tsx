import { Game } from "../entities/Game"
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/getCroppedImageUrl'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' mb={3}>
                    <PlatformIconList key={game.id} platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={'/games/' + game.slug}>{game.name} </Link>

                    <Emoji rating={game.rating_top}></Emoji>
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard