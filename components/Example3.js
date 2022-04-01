import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import { useViewportWidth } from './useViewportWidth';

/**
 * This is an example of a shared drag gesture in Framer Motion 2.
 *
 * When the box is dragged from one half to the other, it gets
 * removed from one component and added in the other. This isn't
 * the same box - it is two seperate components that share a layoutId.
 */

export default function Example3() {
  const viewportWidth = useViewportWidth();
  const [activeHalf, setActiveHalf] = useState('a');

  const onViewportBoxUpdate = ({ x }) => {
    const halfViewport = viewportWidth.current / 2;

    if (activeHalf === 'a' && x.min > halfViewport) {
      setActiveHalf('b');
    } else if (activeHalf === 'b' && x.max < halfViewport) {
      setActiveHalf('a');
    }
  };

  return (
    <AnimateSharedLayout>
      <div className="container2">
        <Zone color="#f107a3" isSelected={activeHalf === 'a'} onViewportBoxUpdate={onViewportBoxUpdate} />
        <Zone color="#7b2ff7" isSelected={activeHalf === 'b'} onViewportBoxUpdate={onViewportBoxUpdate} />
      </div>
    </AnimateSharedLayout>
  );
}

function Zone({ color, isSelected, onViewportBoxUpdate }) {
  return (
    <div className="half-container">
      <motion.div className="overlay2" />
      {isSelected && (
        <motion.div
          className="box2"
          layoutId="box2"
          initial={false}
          animate={{ backgroundColor: color }}
          drag
          // Snap the box back to its center when we let go
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          // Allow full movememnt outside constraints
          dragElastic={1}
          onViewportBoxUpdate={onViewportBoxUpdate}
        />
      )}
    </div>
  );
}
