import { useEffect, useState } from 'react';

export const useSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll'); // Clean up on unmount
        };
    }, [isOpen]);

    return { isOpen, toggleSidebar };
};
