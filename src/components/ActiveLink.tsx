import { Button } from '@chakra-ui/react';

interface ActiveLinkProps {
  children: string;
}

export function ActiveLink({ children }: ActiveLinkProps) {
  return (
    <Button
      bg='transparent'
      color='neutral.paleBlue'
      padding={0}
      fontWeight='300'
      _hover={{ color: 'white' }}
    >
      {children}
    </Button>
  );
}
