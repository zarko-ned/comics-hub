import { Button, HStack, Image } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import useCharacters, { Character } from "@/hooks/useCharacters";

interface Props{
  onSelectCharacter: (character: Character) => void;
  selectedCharacter: Character | null;
}

const CharacterSelectotr = ({onSelectCharacter, selectedCharacter}:Props) => {
  const { data, error } = useCharacters();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap="2">
            {selectedCharacter?.name || 'Strip Karakteri'}
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
            <MenuItem onClick={()=>onSelectCharacter(character)}
              key={character.id}
              value={`${character.id}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <span>{character.name}</span>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={imageUrl}
                alt={character.name}
              />
            </MenuItem>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default CharacterSelectotr;
