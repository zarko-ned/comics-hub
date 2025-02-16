import useSeries, { Seria } from "@/hooks/useSeries";
import {
  HStack,
  List,
  Image,
  Text,
  Spinner,
  Highlight,
  Link,
  Stack,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectSeria: (seria: Seria) => void;
  selectedSeria: Seria | null;
}

const SeriaList = ({selectedSeria, onSelectSeria }: Props) => {
  const { data, isLoading, error } = useSeries();

  if (error) return null;
  if (isLoading)
    return (
      <HStack justifyContent="center" alignItems="center" height="10vh">
        <Spinner size="xl" />
      </HStack>
    );

  return (
    <>
      <Stack>
        <Heading size="2xl" letterSpacing="tight">
          <Highlight query="stripova" styles={{ color: "teal.600" }}>
            Serije stripova
          </Highlight>
        </Heading>
    
      </Stack>

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
                <Link fontWeight={seria.id===selectedSeria?.id? 'bold' : 'normal'} onClick={() => onSelectSeria(seria)} fontSize="lg">
                  {" "}
                  {seria.title}
                </Link>
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
};

export default SeriaList;
