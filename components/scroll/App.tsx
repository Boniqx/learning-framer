import { motion, Variants } from 'framer-motion';

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Card({ emoji }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ['👋', 340, 10],
  ['✋', 20, 40],
  ['🖖', 60, 90],
  ['✌', 80, 120],
  ['🤞', 100, 140],
  ['🤟', 205, 245],
  ['🤘', 260, 290],
  ['🤙', 290, 320],
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Scroll(): JSX.Element {
  return (
    <>
      {food.map(([emoji]) => (
        <Card emoji={emoji} key={emoji} />
      ))}
    </>
  );
}
