import { Grid, GridItem } from '@chakra-ui/react';
import { CardItem } from './CardItem';

import data from '../data.json';

export function Weekly() {
  const userData = [...data];

  return (
    <Grid
      height={450}
      maxWidth={1000}
      templateColumns='repeat(3, 1fr)'
      templateRows='repeat(2, 1fr)'
      columnGap={6}
      rowGap={6}
    >
      {userData.map((data) => {
        return (
          <GridItem key={data.title}>
            <CardItem
              title={data.title}
              hoursThisMonth={data.timeframes.weekly.current}
              hoursPastMonth={data.timeframes.weekly.previous}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
