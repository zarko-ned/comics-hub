import { Card, CardBody, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from "@/components/ui/skeleton"
import React from 'react'

const ComicCardSkeleton = () => {
  return (
    <Card.Root
      maxWidth="300px" // Dodaj maxWidth kako bi kartica imala fiksnu širinu
      borderRadius="lg" // Dodaj border-radius za zaobljene ivice
      boxShadow="md" // Dodaj box-shadow za lepši izgled
      overflow="hidden" // Osiguraj da se sadržaj ne prelije iz kartice
    >
      <Skeleton height="470px" />
      <CardBody>
        <SkeletonText noOfLines={2} gap="4" />
      </CardBody>
    </Card.Root>
  );
};

export default ComicCardSkeleton
