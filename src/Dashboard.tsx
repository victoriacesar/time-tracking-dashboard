import { Grid, Flex, GridItem } from '@chakra-ui/react';
import { Daily } from './components/Daily';
import { Monthly } from './components/Monthly';
import { Sidebar } from './components/Sidebar';
import { Weekly } from './components/Weekly';
import { useTime } from './contexts/TimeContext';

export function Dashboard() {
  const { time } = useTime();

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
        height={450}
        templateColumns='repeat(2, 22% 78%)'
        gap={6}
      >
        <GridItem w='100%'>
          <Sidebar />
        </GridItem>
        <GridItem w='100%'>
          { time === 'daily' && <Daily />}
          { time === 'weekly' && <Weekly />}
          { time === 'monthly' && <Monthly />}
        </GridItem>
      </Grid>
    </Flex>
  );
}
