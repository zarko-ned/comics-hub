import { Card, CardBody, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from "@/components/ui/skeleton"
import React from 'react'

 const ComicCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="400px"/>
        <CardBody  width="300px">
            <SkeletonText/>
        </CardBody>
    </Card.Root>
  )
}

export default ComicCardSkeleton
