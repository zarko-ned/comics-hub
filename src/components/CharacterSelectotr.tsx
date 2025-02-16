import { Button, HStack, Image } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import useCharacters from "@/hooks/useCharacters";

const CharacterSelectotr = () => {
  const { data } = useCharacters();
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap="2">
            Karakteri
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((character) => {
          const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          // Proveri da li je slika placeholder
          if (character.thumbnail.path.includes("image_not_available")) {
            return null; // Ne prikazuj strip ako nema pravu sliku
          }
          return (
            <MenuItem
              key={character.id}
              value={`${character.id}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <span>{character.name}</span>
              <Image boxSize="32px" borderRadius={8} src={imageUrl} alt={character.name} />
            </MenuItem>
          );
          
         
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default CharacterSelectotr;
