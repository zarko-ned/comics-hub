import useComics from "@/hooks/useComics";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ComicCard from "./ComicCard";

const ComicGrid = () => {
  const { comics, error } = useComics();

  return (
    <>
      <h1>ComicBooks</h1>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10}>
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
