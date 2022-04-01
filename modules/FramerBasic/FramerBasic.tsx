import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import MainLayout from '@components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { FC } from 'react';

const FramerBasics: FC = () => {
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

  const itemLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const itemRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const variants = {
    visible: (i: number): any => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  const showHide = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <MainLayout>
      <Box maxW="lg" marginBottom={16}>
        <Heading>What is Framer Motion</Heading>
        <Text>
          {' '}
          Motion is a production-ready motion library for React from Framer. It brings declarative animations,
          effortless layout transitions and gestures while maintaining HTML and SVG semantics.{' '}
        </Text>

        <motion.div animate={{ rotate: 360, x: 900 }} transition={{ duration: 2, repeat: Infinity }} className="box" />
      </Box>

      <Box maxW="lg" marginBottom={8}>
        <Heading>Animation</Heading>
        <Text>
          Animations in Framer Motion are controlled via the <b>motion</b> component's flexible <b>animate</b> property.
          It can be used in a number of ways, scaling to the complexity of your needs.
        </Text>

        <motion.div animate={{ x: 500 }} transition={{ duration: 2, repeat: Infinity }} className="box" />
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Key Frames
        </Heading>
        <Text>
          Values in animate can also be set as a series of keyframes. This will animate through each value in sequence.
        </Text>

        <motion.div animate={{ x: [0, 500, 0] }} transition={{ duration: 2, repeat: Infinity }} className="box" />
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Variants
        </Heading>
        <Text>
          Target objects are useful for simple, single-component animations. But sometimes we want to create animations
          that propagate throughout the DOM, and orchestrate those animations in a declarative way. We can do so with
          variants. Variants are sets of pre-defined target objects.
        </Text>
        <br />
        <Text>In this example we give an initial animation of hidden then visible from a varitant object</Text>

        <Box borderRadius="2xl" bg="#D3D3D3" padding="10px" marginBottom={8}>
          <pre>
            {`
              const variants = {
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }
          `}
          </pre>
        </Box>
        <motion.div
          variants={showHide}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, repeat: Infinity }}
          className="box"
        />
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Dynamic
        </Heading>
        <Text>
          Each variant can be defined as a function that resolves when a variant is accessed. These variant functions
          are provided a single argument, which can be set in a component's <b>custom</b> prop.
        </Text>
        <ul className="ul">
          <motion.li className="li" variants={variants} />
          <motion.li className="li" variants={variants} />
          <motion.li className="li" variants={variants} />
        </ul>
      </Box>
      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Propagation
        </Heading>
        <Text>
          If a <b>motion</b> component has children, changes in variant will flow down through the component hierarchy.
          These changes in variant will flow down until a child component defines its own <b>animate</b> property.
        </Text>
        <motion.ul initial="hidden" animate="visible" variants={list} className="ul">
          <motion.li className="li" variants={itemLeft} />
          <motion.li className="li" variants={itemRight} />
          <motion.li className="li" variants={itemLeft} />
        </motion.ul>
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Component animation controls
        </Heading>
        <Text>
          Declarative animations are ideal for most UI interactions. But sometimes we need to orchestrate more complex
          sequences. The useAnimation hook can be used to create a set of imperative AnimationControls with a start and
          stop method. These controls can be passed to one or more motion components via the animate prop.
        </Text>

        <Box borderRadius="2xl" bg="#D3D3D3" padding="10px" marginBottom={8}>
          <pre>
            {`
          const MyComponent = () => {
            const controls = useAnimation()

            return <motion.div animate={controls} />
          }
          `}
          </pre>
        </Box>
        <motion.ul initial="hidden" animate="visible" variants={list} className="ul">
          <motion.li className="li" variants={itemLeft} />
          <motion.li className="li" variants={itemRight} />
          <motion.li className="li" variants={itemLeft} />
        </motion.ul>
      </Box>

      <Box maxW="lg" marginBottom={8}>
        <Heading>Transition</Heading>
        <Text>
          A Transition defines how values animate from one state to another. A Transition is an object which can contain
          Orchestration props like delay, that schedule the animation as a whole.
        </Text>
      </Box>

      <Heading marginBottom={8}>Types of transitions</Heading>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Delay
        </Heading>
        <Text>
          The amount of time before we start an animation. Example we have a delay of 3 seconds before animating a box.
        </Text>
        <motion.div animate={{ x: 500 }} transition={{ delay: 3, repeat: Infinity }} className="box" />
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Repeat Types:
        </Heading>
        <Text>
          Animations can be repeated by the following types
          <List>
            <ListItem>
              <b>loop</b>: Repeats the animation from the start
            </ListItem>

            <motion.div animate={{ x: 500 }} transition={{ delay: 3, repeat: Infinity }} className="box" />
            <ListItem>
              <b>reverse</b>: Alternates between forward and backwards playback
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ delay: 3, repeat: 5, repeatType: 'reverse' }}
              className="box"
            />

            <ListItem>
              <b>mirror:</b> Switches from and to alternately
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ delay: 3, repeat: 10, repeatType: 'mirror', from: 2, to: 4 }}
              className="box"
            />
          </List>
        </Text>
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Transition Types:
        </Heading>
        <Text>
          Animation transitions differ by the following types
          <List>
            <ListItem>
              <b>Tween</b>: Set type to "tween" to use a duration-based tween animation. If any non-orchestration
              transition values are set without a type property, this is used as the default animation.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ duration: 2, type: 'tween', repeat: Infinity }}
              className="box"
            />
            <ListItem>
              <b>Ease</b>:The easing function to use. Set as one of the below. The name of an existing easing function.
              An array of four numbers to define a cubic bezier curve. An easing function, that accepts and returns a
              value 0-1. If the animating value is set as an array of multiple values for a keyframes animation, ease
              can be set as an array of easing functions to set different easings between each of those values.
            </ListItem>

            <motion.div
              animate={{ opacity: 0 }}
              transition={{ ease: [0.17, 0.67, 0.83, 0.67], repeat: 5 }}
              className="box"
            />

            <ListItem>
              <Text fontSize="1.5em">
                <b>from:</b>
              </Text>{' '}
              The value to animate from. By default, this is the current state of the animating value.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ delay: 3, repeat: 10, repeatType: 'mirror', from: 2, to: 4 }}
              className="box"
            />

            <ListItem>
              <Text fontSize="1.5em">
                <b>Spring:</b>
              </Text>{' '}
              The value to animate from. By default, this is the current state of the animating value.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ type: 'spring', duration: 0.8, repeat: Infinity }}
              className="box"
            />

            <ListItem>
              <b>Spring Bounce:</b> determines the "bounciness" of a spring animation.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ type: 'spring', duration: 0.25, repeat: Infinity }}
              className="box"
            />

            <ListItem>
              <b>spring damping:</b> Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to
              10 by default.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ type: 'spring', duration: 300, repeat: Infinity }}
              className="box"
            />

            <ListItem>
              <b>spring mass:</b> Mass of the moving object. Higher values will result in more lethargic movement. Set
              to 1 by default.
            </ListItem>

            <motion.div
              animate={{ x: 500 }}
              transition={{ type: 'spring', mass: 0.5, repeat: Infinity }}
              className="box"
            />

            <ListItem>
              <b>spring stiffness:</b> Stiffness of the spring. Higher values will create more sudden movement. Set to
              100 by default.
            </ListItem>

            <motion.div animate={{ x: 500 }} transition={{ type: 'spring', stiffness: 50 }} className="box" />

            <ListItem>
              <Text fontSize="1.5em">
                <b>Inertia:</b>{' '}
              </Text>{' '}
              An animation that decelerates a value based on its initial velocity, usually used to implement inertial
              scrolling.
            </ListItem>

            <motion.div animate={{ x: 500 }} transition={{ type: 'spring', stiffness: 50 }} className="box" />
          </List>
        </Text>
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Gestures
        </Heading>
        <Text>
          Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture
          recognisers. It currently has support for hover, tap, pan, viewport and drag gesture detection. Each gesture
          has a series of event listeners that you can attach to your motion component.
          <br />
          motion components provide multiple gesture animation props: whileHover, whileTap, whileFocus, whileDrag and
          whileInView. These can define animation targets to temporarily animate to while a gesture is active.
        </Text>

        <b>whileHover:</b>
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.5 } }} className="box" />

        <b>whileTap:</b>
        <motion.div whileTap={{ scale: 1.2, transition: { duration: 0.5 } }} className="box" />

        <b>whileDrag:</b>
        <motion.div whileDrag={{ scale: 0.7, transition: { duration: 0.1, repeat: Infinity } }} className="box" />

        <b>whileInView:</b>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="box"
        />

        <Heading as="h2" fontSize={24}>
          {' '}
          Drag
        </Heading>

        <Text>
          The drag gesture follows the rules of the pan gesture but applies pointer movement to the x and/or y axis of
          the component.
        </Text>
        <motion.div drag className="box" />

        <Text>
          You can also set if you can only drag for <b>x</b> or <b>y</b> axis
        </Text>

        <b>Drag x:</b>
        <motion.div drag="x" className="box" />

        <b>Drag y:</b>
        <motion.div drag="y" className="box" />

        <Text>
          <b>dragConstraints:</b>
          Can be used to limit drag motion by giving values from left, top, right and bottom measured in pixels. If you
          move past the constrain value it returns to it your disignated value.
        </Text>
        <motion.div drag dragConstraints={{ left: 0, right: 300 }} className="box" />

        <Text>
          <b>dragSnapToOrigin:</b>
          If true, the draggable element will animate back to its center/origin when released.
        </Text>
        <motion.div drag dragSnapToOrigin className="box" />

        <Text>
          <b>dragMomentum:</b>
          Apply momentum from the pan gesture to the component when dragging finishes. Set to true by default.
        </Text>
        <motion.div drag dragSnapToOrigin className="box" />

        <Text>
          <b>dragTransition:</b>
          Allows you to change dragging inertia parameters. When releasing a draggable Frame, an animation with type
          inertia starts. The animation is based on your dragging velocity. This property allows you to customize it.
        </Text>
        <motion.div drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="box" />
      </Box>

      <Box maxW="lg" marginBottom={8} marginLeft={4}>
        <Heading as="h2" fontSize={24}>
          {' '}
          Duration
        </Heading>
        <Text>
          Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture
          recognisers. It currently has support for hover, tap, pan, viewport and drag gesture detection. Each gesture
          has a series of event listeners that you can attach to your motion component.
        </Text>
        <motion.div
          animate={{ x: 500 }}
          transition={{ type: 'spring', stiffness: 100, repeat: Infinity }}
          className="box"
        />
      </Box>
    </MainLayout>
  );
};

export default FramerBasics;
