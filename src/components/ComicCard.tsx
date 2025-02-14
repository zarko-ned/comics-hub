import { Comic } from "@/hooks/useComics";
import { Button, Card, Image, Text, Flex, Box } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";

interface Props {
  comic: Comic;
}

const ComicCard = ({ comic }: Props) => {
  const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <Card.Root  maxW="sm" overflow="hidden" borderRadius="md" shadow="lg" position="relative">
      <Image
        src={imageUrl}
        alt={comic.title}
        width="100%"
        height="auto"
        style={{ borderRadius: "8px" }}
      />
      <Card.Body gap="2" paddingBottom="40px"> {/* Dodajemo padding da ostavimo prostor za dno */}
        <Card.Title fontSize="lg" fontWeight="bold" textAlign="center">
          {comic.title}
        </Card.Title>
      </Card.Body>
      <Box position="absolute" bottom="0" width="100%" padding="2">
        <Flex align="center" justify="flex-start" gap="2">
          <FaBookOpen />
          <Text fontSize="sm" color="gray.600">
            {comic.pageCount ? `${comic.pageCount} strana` : "Nema informacija"}
          </Text>
        </Flex>
      </Box>
    </Card.Root>
  );
};

export default ComicCard;
