import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Example3d from '@components/animationExample/src/Example3d';
import Example1 from '@components/Example1';
import HovCarousel from '@components/HovCarousel';
import MainLayout from '@components/Layout/MainLayout';
import { MotionBox, MotionFlex, MotionStack } from '@components/motion';
import Scroll from '@components/scroll/App';
import { FC } from 'react';

const Framer: FC = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  return (
    <MainLayout>
      <VStack alignContent="start" alignItems="start" justifyContent="start" marginBottom={16}>
        <HStack marginT={16} h="100vh">
          <MotionBox w="50%" initial={{ x: -500 }} whileInView={{ x: 0 }}>
            <Heading>What is Framer Motion?</Heading>

            <br></br>
            <Text>
              {' '}
              Framer Motion is a production-ready motion library for React from Framer. It brings declarative
              animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.{' '}
            </Text>

            <br></br>
            <Text>
              {' '}
              Framer Motion Can be used to animate almost anything from <b>fade-in</b>, <b>fade-outs</b>, <b>sliders</b>
              , <b>dragables, and many more! </b>
            </Text>
          </MotionBox>

          <MotionFlex w="50%" initial={{ x: 500 }} whileInView={{ x: 0 }}>
            <MotionBox mt="20" ml="10" w={400} h={400} bg="#412">
              <MotionBox
                w={200}
                h={200}
                borderRadius="100%"
                bg="#316"
                transition={{ duration: 10, times: [0, 0.2, 0.5, 0.9] }}
                animate={{
                  x: [23, 51, 67, 40, 165, 90, 27, 87, 55],
                  y: [50, 120, 50, 102, 201, 157, 90, 27, 87],
                }}
              ></MotionBox>
            </MotionBox>
          </MotionFlex>
        </HStack>

        <HStack marginT={16}>
          <MotionStack
            w="50%"
            pl="10"
            pr="40"
            h={400}
            variants={list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <MotionBox
              background="linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)"
              borderRadius=" 30px"
              width=" 150px"
              height=" 150px"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </MotionStack>

          <MotionBox w="50%" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Heading>
              <MotionBox
                display="inline-block"
                color="#1723d1"
                initial={{ x: 0 }}
                animate={{
                  x: 5,
                }}
                transition={{ repeat: Infinity }}
              >
                Animations that
              </MotionBox>{' '}
              work like{' '}
              <MotionBox
                display="inline-block"
                opacity={{ x: 1 }}
                animate={{
                  opacity: [0.5, 1],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                magic{' '}
              </MotionBox>
            </Heading>

            <br></br>
            <Text>
              {' '}
              When animating between two separate components, Framer Motion will take care of everything in between.{' '}
            </Text>
          </MotionBox>
        </HStack>

        <HStack marginT={16}>
          <MotionBox w="40%" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}>
            <Heading>Complex events and gestures.</Heading>

            <br></br>
            <Text>
              {' '}
              Framer Motion offers more advanced listeners and also extends the basic set of React event listeners.{' '}
            </Text>
            <br></br>
            <Text>
              {' '}
              You can create seemless accordion with framer's advanced listeners. Click any <b>box</b>.{' '}
            </Text>
          </MotionBox>
          <MotionStack
            w="50%"
            pl="10"
            pr="40"
            h={400}
            variants={list}
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Example1 />
          </MotionStack>
        </HStack>

        <HStack marginT={16} mb={10}>
          <MotionStack
            w="50%"
            pl="10"
            pr="40"
            h={400}
            variants={list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <HovCarousel
              images={[
                '/images/demo-slider/dr-step1.png',
                '/images/demo-slider/dr-step2.png',
                '/images/demo-slider/dr-step3.png',
                '/images/demo-slider/dr-step4.png',
                '/images/demo-slider/dr-step5.png',
                '/images/demo-slider/dr-step6.png',
                '/images/demo-slider/dr-step7.png',
              ]}
              bg="/images/demo-slider/bg.png"
            />
          </MotionStack>

          <MotionBox w="50%" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}>
            <Heading>With Real life applications</Heading>

            <br></br>
            <Text>
              {' '}
              We've implemented a cool <b>carousel</b> inside <b>identifi</b>. Daily Review Slides new steps beautifully
              with framer motion.{' '}
            </Text>
          </MotionBox>
        </HStack>
        <HStack marginT={16} mb={10}>
          <MotionStack
            w="50%"
            h={400}
            pt={40}
            variants={list}
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Example3d />
          </MotionStack>
          <MotionBox w="50%" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}>
            <Heading>Framer Motion 3D</Heading>

            <br></br>
            <Text>
              {' '}
              Framer Motion 3D is a simple yet powerful animation library for React Three Fiber. It offers most of the
              same functionality as Framer Motion for declarative 3D scenes.{' '}
            </Text>
          </MotionBox>
        </HStack>

        <Box mt="50px" w="full">
          <Heading>Landing beautiful Scroll animations</Heading>
          <Scroll />
        </Box>
      </VStack>
    </MainLayout>
  );
};

export default Framer;
