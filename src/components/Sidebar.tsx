import { Flex, Avatar, Text, Heading, Box } from '@chakra-ui/react';

import jeremyImg from '../images/image-jeremy.png';
import { ActiveLink } from './ActiveLink';

export function Sidebar() {

  return (
    <Box height='100%' bgColor='neutral.darkBlue' borderRadius='15'>
      <Flex
        padding='8'
        bgColor='primary.blue'
        width='100%'
        height='70%'
        direction='column'
        borderRadius='15'
      >
        <Avatar
          src={jeremyImg}
          size='lg'
          showBorder={true}
          borderColor='white'
          mb='35'
        />
        <Box>
          <Text fontSize='xs' color='neutral.paleBlue'>
            Report for
          </Text>
          <Heading fontSize='36' fontWeight='300' color='white'>
            Jeremy Robson
          </Heading>
        </Box>
      </Flex>
      <Flex
        width='100%'
        height='30%'
        pb={4}
        pt={4}
        pr={8}
        pl={8}
        align='flex-start'
        direction='column'
        gap='8px'
      >
        <ActiveLink>Daily</ActiveLink>
        <ActiveLink>Weekly</ActiveLink>
        <ActiveLink>Monthly</ActiveLink>
      </Flex>
    </Box>
  );
}
