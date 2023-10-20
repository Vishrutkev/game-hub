
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/getCroppedImageUrl';

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, error } = useGenres();

    if (error) return;

    return (
        <>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={1} src={getCroppedImageUrl(genre.image_background)} />
                            <Button variant='link' onClick={() => onSelectGenre(genre)} fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    )
}

export default GenreList