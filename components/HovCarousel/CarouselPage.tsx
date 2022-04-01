import { FC } from 'react';

import { Flex } from '@chakra-ui/react';

interface CarouselPageProps {
  isActive: boolean;
}

const CarouselPage: FC<CarouselPageProps> = ({ isActive }) => {
  return (
    <>
      <Flex width="8px" height="24px" alignContent="center" alignItems="center" justifyContent="center">
        <Flex borderRadius="50%" width="8px" height="8px" bg={`${isActive ? '#ECC94B' : '#FAF089'}`} />
      </Flex>
    </>
  );
};

export default CarouselPage;
