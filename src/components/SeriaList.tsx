import useSeries from "@/hooks/useSeries";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const SeriaList = () => {
  const { data } = useSeries();

  return (
    <List.Root style={{ listStyleType: "none", padding: 0 }}>
      {data.map((seria) => {
        const imageUrl = `${seria.thumbnail.path}.${seria.thumbnail.extension}`;

        // Proveri da li je slika placeholder
        if (seria.thumbnail.path.includes("image_not_available")) {
          return null; // Ne prikazuj strip ako nema pravu sliku
        }

        return (
          <List.Item key={seria.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={imageUrl}
                alt={seria.title}
              />
              <Text fontSize="lg">{seria.title}</Text>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default SeriaList;
