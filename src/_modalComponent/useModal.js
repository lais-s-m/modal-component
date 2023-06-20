import { useState } from 'react';

const useModal = (stateName = 'isOpen', functionName = 'toggle') => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return { [`${stateName}`]: isOpen, [`${functionName}`]: toggle };
};

export default useModal;
