import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import data from '../data.json';

interface TimeContextProps {
  children: ReactNode;
}

interface ITimeContext {
  time: string;
  setTime: (value: string) => void;
}

export const TimeContext = createContext({} as ITimeContext);

export const TimeProvider = ({ children }: TimeContextProps) => {
  const [time, setTime] = useState('daily');

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
