import useComics from "@/hooks/useComics";
import { Text } from "@chakra-ui/react";

const ComicGrid = () => {
  const { comics, error } = useComics();

  return (
    <>
      <h1>ComicBooks</h1>
      {error && <Text>{error}</Text>}
      <ul>
        {comics.map((comic) => {
          const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

          // Proveri da li je slika placeholder
          if (comic.thumbnail.path.includes("image_not_available")) {
            return null; // Ne prikazuj strip ako nema pravu sliku
          }

          return (
            <li key={comic.id}>
              <h2>{comic.title}</h2>
              <img src={imageUrl} alt={comic.title} width="200" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ComicGrid;
