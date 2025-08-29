import { useEffect } from "react";

export const useBurgerMenuState = () => {
  useEffect(() => {
    const handleMenuState = (event: CustomEvent) => {
      if (event.detail.isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('menuStateChange', handleMenuState as EventListener);
    
    return () => {
      window.removeEventListener('menuStateChange', handleMenuState as EventListener);
    };
  }, []);
};
