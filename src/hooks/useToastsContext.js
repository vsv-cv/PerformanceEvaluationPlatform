import { useContext } from 'react';
import { ToastsContext } from '../providers/ToastsProvider';

export const useToastsContext = () => useContext(ToastsContext);
