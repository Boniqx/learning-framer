import { createIcon, Icon } from '@chakra-ui/icons';
import { FC } from 'react';

const Logo: FC = () => (
  <Icon viewBox="0 0 143 32" width={143} height={32}>
    <LogoIcon />
  </Icon>
);

export default Logo;

const LogoIcon = createIcon({
  displayName: 'logoIcon',
  viewBox: '0 0 143 32',
  path: (
    <>
      <path
        d="M14.985 28.438c.195-.501.287-1.036.273-1.573a9.017 9.017 0 0 1 1.158-4.244 8.968 8.968 0 0 1 3.024-3.183 3.902 3.902 0 0 0 1.504-5.442 3.874 3.874 0 0 0-1.504-1.431 11.613 11.613 0 0 1-1.024-.798l-.817-.8a8.52 8.52 0 0 1-2.347-5.832 4.024 4.024 0 0 0-2.445-3.818 3.99 3.99 0 0 0-4.431.901 4.042 4.042 0 0 0-1.133 2.918 3.975 3.975 0 0 0 2.026 3.413c2.459 1.556 4.17 4.531 4.17 7.457a8.495 8.495 0 0 1-2.304 5.793l-1.86 1.652a3.97 3.97 0 0 0-2.027 3.414 4.028 4.028 0 0 0 2.445 3.818 3.992 3.992 0 0 0 4.432-.901c.373-.387.666-.844.86-1.344ZM20.417 7.36a4.036 4.036 0 0 1 .499-5.082 3.994 3.994 0 0 1 5.058-.501 4.02 4.02 0 0 1 1.476 1.806 4.042 4.042 0 0 1-.869 4.386 3.99 3.99 0 0 1-4.366.873 4.01 4.01 0 0 1-1.798-1.482ZM21.522 23.518a3.997 3.997 0 0 1 2.226-.678v-.002a3.999 3.999 0 0 1 2.832 1.18 4.04 4.04 0 0 1 .5 5.082 4.01 4.01 0 0 1-1.799 1.484 3.99 3.99 0 0 1-4.366-.873 4.042 4.042 0 0 1-.869-4.387 4.021 4.021 0 0 1 1.476-1.806ZM33.325 13.758a4.04 4.04 0 0 1-.5 5.081 4.004 4.004 0 0 1-2.832 1.18 3.993 3.993 0 0 1-2.226-.678 4.02 4.02 0 0 1-1.476-1.806 4.041 4.041 0 0 1 .869-4.387 3.99 3.99 0 0 1 4.367-.873 4.01 4.01 0 0 1 1.798 1.483Z"
        fill="#4F46E5"
      />
      <path
        d="M2.781 12.647a3.994 3.994 0 0 1 2.226-.678 4.005 4.005 0 0 1 2.831 1.181 4.038 4.038 0 0 1 .5 5.08 4.011 4.011 0 0 1-1.798 1.483 4 4 0 0 1-4.366-.873 4.042 4.042 0 0 1-.869-4.386 4.02 4.02 0 0 1 1.476-1.807Z"
        fill="#4F46E5"
      />
      <path
        d="m58.664 11.136-2.04 7.392-2.184-7.392h-2.928l-2.184 7.368-2.04-7.368H44l3.816 12h2.952l2.208-7.272 2.208 7.272h2.952l3.816-12h-3.288Zm10.2 12.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312ZM80.498 13.2v-2.064h-3.096v12h3.096V17.4c0-2.52 2.04-3.24 3.648-3.048v-3.456c-1.512 0-3.024.672-3.648 2.304Zm16.522 9.936-4.967-6.072 4.824-5.928H93.18l-4.128 5.28V6.336h-3.096v16.8h3.096v-5.448l4.368 5.448h3.6ZM105.022 6c-3.816 0-5.64 1.704-5.64 5.016v.12h-1.728v2.976h1.728v9.024h3.096v-9.024h1.992v-2.976h-1.992v-.12c0-1.632.936-2.304 2.544-2.304.312 0 .648 0 .984.024v14.4h3.096V6.504c-1.32-.264-2.568-.504-4.08-.504Zm12.615 17.472c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312Zm21.582-9.312-2.04 7.392-2.184-7.392h-2.928l-2.184 7.368-2.04-7.368h-3.288l3.816 12h2.952l2.208-7.272 2.208 7.272h2.952l3.816-12h-3.288Z"
        fill="#1F2937"
      />
    </>
  ),
});