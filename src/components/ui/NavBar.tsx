import { HStack, Image , Text} from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <HStack>
      <Image src="https://i.postimg.cc/RFLdsGjy/comic-art-logo-design-template-809f8d829625a202af0365baf94832d5-screen-removebg-preview.png"
      boxSize='60px'
      alt="3D style image" />
      <Text>NavBar</Text>
    </HStack>
  );
};
