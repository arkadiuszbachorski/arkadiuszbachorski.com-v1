import { useEffect } from 'react';

const useKeyboardKey = (key, action, event = 'keyup') => {
    useEffect(() => {
        const handle = (e) => {
            if (e.key === key) {
                action();
            }
        };
        document.addEventListener(event, handle);

        return () => {
            document.removeEventListener(event, handle);
        };
    });
};

export default useKeyboardKey;
