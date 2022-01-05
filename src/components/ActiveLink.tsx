import { Button } from '@chakra-ui/react';
import { useTime } from '../contexts/TimeContext';
interface ActiveLinkProps {
  children: string;
}

export function ActiveLink({ children }: ActiveLinkProps) {
  const { time, setTime } = useTime();

  function handleClick() {
    switch (children.toLowerCase()) {
      case 'daily':
        setTime('daily');
        return;
      case 'weekly':
        setTime('weekly');
        return;
      case 'monthly':
        setTime('monthly');
        return;
      default:
        return;
    }
  }

  return (
    <Button
      bg='transparent'
      color='neutral.paleBlue'
      padding={0}
      fontWeight='400'
      isActive={children.toLowerCase() === time ? true : false}
      _hover={{ color: 'white' }}
      _active={{ color: 'white' }}
      onClick={handleClick}
      _focus={{ textDecoration: 'underline' }}
    >
      {children}
    </Button>
  );
}
