
import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    if (error) return;

    return (
        <>
            <Heading fontSize='2xl' mb={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' objectFit='cover' borderRadius={1} src={getCroppedImageUrl(genre.image_background)} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link' onClick={() => setSelectedGenreId(genre.id)} fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    )
}

export default GenreList