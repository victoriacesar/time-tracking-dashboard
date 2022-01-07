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
      width='100%'
      height={{ base: 'auto', md: 'auto', lg: '100vh' }}
      align='center'
      justify='center'    >
      <Grid
        padding={{ base: '1rem' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 22% 78%)' }}
        gap={{ base: '4', lg: '6' }}
      >
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          {time === 'daily' && <Daily />}
          {time === 'weekly' && <Weekly />}
          {time === 'monthly' && <Monthly />}
        </GridItem>
      </Grid>
    </Flex>
  );
}
