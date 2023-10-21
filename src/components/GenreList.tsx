
import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/getCroppedImageUrl';

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, error } = useGenres();

    if (error) return;

    return (
        <>
            <Heading fontSize='2xl' mb={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' objectFit='cover' borderRadius={1} src={getCroppedImageUrl(genre.image_background)} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' onClick={() => onSelectGenre(genre)} fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    )
}

export default GenreList