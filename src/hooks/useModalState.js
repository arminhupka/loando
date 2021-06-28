import { useState } from 'react';

const useModalState = (init = false) => {
  const [isOpen, setIsOpen] = useState(init);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return { onOpen, onClose, isOpen, onToggle };
};

export default useModalState;
