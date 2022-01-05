import { Grid, Flex, GridItem } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';

export function Dashboard() {
  return (
    <Flex
      bgColor='neutral.veryDarkBlue'
      width='100vw'
      height='100vh'
      align='center'
      justify='center'
    >
      <Grid
        width='990px'
        maxWidth={1480}
        bgColor='red'
        height={470}
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(2, fr)'
        gap={6}
      >
        <GridItem w='100%'>
          <Sidebar />
        </GridItem>
        <GridItem w='100%' bg='green' />
        <GridItem w='100%' bg='pink' />
        <GridItem w='100%' bg='violet' />
      </Grid>
    </Flex>
  );
}
