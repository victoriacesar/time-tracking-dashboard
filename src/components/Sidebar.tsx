import { Flex, Avatar, Text, Heading, Box } from '@chakra-ui/react';

import jeremyImg from '../images/image-jeremy.png';
import { ActiveLink } from './ActiveLink';

export function Sidebar() {
  return (
    <Box height='100%' bgColor='neutral.darkBlue' borderRadius='15'>
      <Flex
        padding={{ base: '4', md: '4', lg: '8' }}
        bgColor='primary.blue'
        height='70%'
        direction={{ base: 'row', md: 'row', lg: 'column' }}
        borderRadius='15'
      >
        <Avatar
          src={jeremyImg}
          size='lg'
          showBorder={true}
          borderColor='white'
          mb={{ base: 0, md: 0, lg: '35' }}
          marginTop={2}
        />
        <Flex
          paddingLeft={{ base: '1rem', md: '1rem', lg: '0' }}
          flexDir='column'
          justify='center'
        >
          <Text fontSize='x-small' color='neutral.paleBlue'>
            Report for
          </Text>
          <Heading
            fontSize={{ base: '24', md: '24', lg: '36' }}
            fontWeight='300'
            color='white'
          >
            Jeremy Robson
          </Heading>
        </Flex>
      </Flex>
      <Flex
        width='100%'
        height='30%'
        pb={4}
        pt={{base: 1, md: 1, lg: 4}}
        pr={8}
        pl={8}
        align='flex-start'
        justify='space-between'
        direction={{ base: 'row', md: 'row', lg:'column'}}
        gap='8px'
      >
        <ActiveLink>Daily</ActiveLink>
        <ActiveLink>Weekly</ActiveLink>
        <ActiveLink>Monthly</ActiveLink>
      </Flex>
    </Box>
  );
}
