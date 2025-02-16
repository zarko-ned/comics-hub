import useComics from "@/hooks/useComics";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ComicCard from "./ComicCard";
import ComicCardSkeleton from "./ComicCardSkeleton";
import { Seria } from "@/hooks/useSeries";

interface Props{
  selectedSeria: Seria | null;
}

const ComicGrid = ({selectedSeria}: Props) => {
  const { data, error, isLoading } = useComics(selectedSeria);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <h1></h1>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10} paddingRight='10px' paddingLeft="10px" paddingTop="10px">
        {isLoading &&
          skeletons.map((skeleton) => <ComicCardSkeleton key={skeleton} />)}
        {data.map((comic) => {
          // Proveri da li je slika placeholder
          if (comic.thumbnail.path.includes("image_not_available")) {
            return null; // Ne prikazuj strip ako nema pravu sliku
          }

          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default ComicGrid;
