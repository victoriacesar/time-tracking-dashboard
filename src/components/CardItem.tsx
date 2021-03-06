import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';

import { BiDotsHorizontalRounded } from 'react-icons/bi';

import play from '../images/icon-play.svg';
import work from '../images/icon-work.svg';
import study from '../images/icon-study.svg';
import exercise from '../images/icon-exercise.svg';
import social from '../images/icon-social.svg';
import selfCare from '../images/icon-self-care.svg';

interface CardItemProps {
  title: string;
  hoursThisMonth: number;
  hoursPastMonth: number;
}

export function CardItem({
  title,
  hoursThisMonth,
  hoursPastMonth,
}: CardItemProps) {
  if (title === 'Self Care') {
    const titleToLowerCase = title.toLowerCase();
    const titleSplit = titleToLowerCase.split(' ');
    const secondNameManipulation =
      titleSplit[1].charAt(0).toUpperCase() + titleSplit[1].slice(1);
    const joinNames = titleSplit[0] + secondNameManipulation;
    title = joinNames;
  } else {
    title = title.toLowerCase();
  }

  return (
    <Box
      height='100%'
      width='100%'
      pb={{ base: '1rem' }}
      borderTopRadius={15}
      borderBottomRightRadius={20}
      borderBottomLeftRadius={20}
      bgColor={
        title === 'play'
          ? 'primary.lightBlue'
          : title === 'work'
          ? 'primary.lightRed'
          : title === 'study'
          ? 'primary.red'
          : title === 'exercise'
          ? 'primary.limeGreen'
          : title === 'social'
          ? 'primary.violet'
          : 'primary.softOrange'
      }
    >
      <Box
        bgColor={
          title === 'play'
            ? 'primary.lightBlue'
            : title === 'work'
            ? 'primary.lightRed'
            : title === 'study'
            ? 'primary.red'
            : title === 'exercise'
            ? 'primary.limeGreen'
            : title === 'social'
            ? 'primary.violet'
            : 'primary.softOrange'
        }
        height='20%'
        bgImage={
          title === 'play'
            ? play
            : title === 'work'
            ? work
            : title === 'study'
            ? study
            : title === 'exercise'
            ? exercise
            : title === 'social'
            ? social
            : selfCare
        }
        bgRepeat='no-repeat'
        bgPosition='top 30% left 92%'
        bgSize={{ base: '20%', md: '20%', lg: '30%' }}
        borderTopRadius={15}
      />
      <Box
        bgColor='neutral.darkBlue'
        borderTopRadius={15}
        height={{ base: '100%', md: '100%', lg: '90%' }}
        borderBottomRadius={15}
        width={{ base: '100%', md: '100%', lg: '100%' }}
        _hover={{ bgColor: 'neutral.desaturatedBlue', cursor: 'pointer' }}
      >
        <Flex
          pt={6}
          pr={{ base: 6, md: 6, lg: 8 }}
          pl={{ base: 6, md: 6, lg: 8 }}
          pb={4}
          justifyContent='space-between'
          align='center'
        >
          <Text color='white'>
            {title === 'play'
              ? 'Play'
              : title === 'work'
              ? 'Work'
              : title === 'study'
              ? 'Study'
              : title === 'exercise'
              ? 'Exercise'
              : title === 'social'
              ? 'Social'
              : 'Self Care'}
          </Text>
          <Icon
            as={BiDotsHorizontalRounded}
            color='neutral.paleBlue'
            fontSize='26'
            _hover={{ cursor: 'pointer', color: 'white' }}
          />
        </Flex>
        <Flex
          pl={{ base: 6, md: 6, lg: 8 }}
          pr={{ base: 6, md: 6, lg: 8 }}
          width={{ base: '100%', md: '100%', lg: '200px' }}
          flexDir={{ base: 'row', md: 'row', lg: 'column' }}
          justify={{ base: 'space-between' }}
          pb={{ base: 6, md: 6, lg: 0 }}
          align={{ base: 'center', md: 'center', lg: 'flex-start' }}
        >
          <Heading
            fontSize={{ base: '28', md: '28', lg: '52' }}
            fontWeight={300}
            color='white'
          >
            {hoursThisMonth}hrs
          </Heading>
          <Text color='neutral.paleBlue' fontSize={{ base: '15', md: '15' }}>
            Last Week - {hoursPastMonth}hrs
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
