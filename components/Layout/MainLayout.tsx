import { Box, Container } from '@chakra-ui/react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { FC } from 'react';

const MainLayout: FC = ({ children }) => (
  <Box minHeight="100vh">
    <Header />
    <Container maxW="container.xl" flexDirection="column" as="main" flexGrow={1} flexShrink={0}>
      {children}
    </Container>
    <Footer />
  </Box>
);

export default MainLayout;
