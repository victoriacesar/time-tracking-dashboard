import { Grid, GridItem } from '@chakra-ui/react';
import { CardItem } from './CardItem';

import data from '../data.json';

export function Monthly() {
  const userData = [...data];

  return (
    <Grid
      height={{base: 'auto', md: 'auto', lg: 450}}
      maxWidth={1000}
      templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}}
      templateRows='repeat(2, 1fr)'
      columnGap={6}
      rowGap={6}
    >
      {userData.map((data) => {
        return (
          <GridItem key={data.title}>
            <CardItem
              title={data.title}
              hoursThisMonth={data.timeframes.monthly.current}
              hoursPastMonth={data.timeframes.monthly.previous}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
