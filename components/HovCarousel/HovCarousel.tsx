import { Box, Flex, HStack, IconButton, Image, VStack } from '@chakra-ui/react';
import { MotionFlex } from '@components/motion';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { FC, useState } from 'react';
import CarouselPage from './CarouselPage';

interface HovCarouselProps {
  images: string[];
  bg?: string;
}

const HovCarousel: FC<HovCarouselProps> = ({ images, bg }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const selectedIndex = selectedItem / 400;

  return (
    <>
      <VStack>
        <Box
          bg={`url("${bg}")`}
          background-position="center"
          background-size="cover"
          overflow="hidden"
          width="420px"
          height="420px"
        >
          <Flex
            justifyContent="center"
            transform={`translate3d(${selectedItem}px, 0px, 0px)`}
            alignItems="center"
            overflow="hidden"
            width={images.length * 400}
          >
            {images.map((image, i) => (
              <MotionFlex
                key={i}
                width="425px"
                justifyContent="center"
                alignItems="center"
                initial={{ x: i * 400 }}
                animate={{ x: i * 400 + selectedItem, transition: { type: 'spring', duration: 0.5 } }}
              >
                <Image src={image} />
              </MotionFlex>
            ))}
          </Flex>
        </Box>
        <Flex width="190px" justifyContent="space-between">
          <IconButton
            cursor="pointer"
            justifySelf=""
            boxSize="6"
            aria-label="arrow-left"
            disabled={selectedItem === 0}
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            onClick={() => {
              if (selectedItem === 0) return;
              setSelectedItem(selectedItem + 400);
            }}
            as={ArrowNarrowLeftIcon}
            variant="outline-icon-button"
          />
          <HStack spacing={1}>
            {[...Array(images.length)].map((e, i) => (
              <>
                <CarouselPage key={e} isActive={i === selectedIndex * -1} />
              </>
            ))}
          </HStack>
          <IconButton
            cursor="pointer"
            boxSize="6"
            aria-label="arrow-right"
            disabled={selectedItem === (images.length - 1) * 400 * -1}
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            onClick={() => {
              if (selectedItem === (images.length - 1) * 400 * -1) return;
              setSelectedItem(selectedItem - 400);
            }}
            as={ArrowNarrowRightIcon}
            variant="outline-icon-button"
          />
        </Flex>
      </VStack>
    </>
  );
};

export default HovCarousel;
