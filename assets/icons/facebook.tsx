import { createIcon, Icon } from '@chakra-ui/icons';
import { FC } from 'react';

const Facebook: FC = () => (
  <Icon viewBox="0 0 20px 20px" width="20px" height="20px">
    <FacebookIcon />
  </Icon>
);

export default Facebook;

const FacebookIcon = createIcon({
  displayName: 'FacebookIcon',
  viewBox: '0 0 20px 20px',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10Z"
        fill="#9CA3AF"
      />
    </>
  ),
});
