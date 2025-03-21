import React from "react";

export function useModal(defaultProp = false) {
  const [isOpen, setIsOpen] = React.useState<boolean>(defaultProp);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}
