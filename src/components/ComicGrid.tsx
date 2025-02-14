import useComics from "@/hooks/useComics";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ComicCard from "./ComicCard";
import ComicCardSkeleton from "./ComicCardSkeleton";

const ComicGrid = () => {
  const { comics, error, isLoading } = useComics();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h1>ComicBooks</h1>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10}>
        {isLoading &&
          skeletons.map((skeleton) => <ComicCardSkeleton key={skeleton} />)}
        {comics.map((comic) => {
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
