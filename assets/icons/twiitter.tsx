import { createIcon, Icon } from '@chakra-ui/icons';
import { FC } from 'react';

const Twitter: FC = () => (
  <Icon viewBox="0 0 20 20" width="20px" height="20px">
    <TwitterIcon />
  </Icon>
);

export default Twitter;

const TwitterIcon = createIcon({
  displayName: 'TwitterIcon',
  viewBox: '0 0 20 20',
  path: (
    <>
      <path
        d="M6.29 16.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 1.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 1.392.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 .8 5.715v.052A4.105 4.105 0 0 0 4.092 9.79a4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 0 14.41a11.616 11.616 0 0 0 6.29 1.84"
        fill="#9CA3AF"
      />
    </>
  ),
});
