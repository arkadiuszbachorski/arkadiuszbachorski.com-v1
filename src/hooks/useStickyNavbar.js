import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useStickyNavbar = (ref) => {
    const [headerState, setHeaderState] = useState({
        isStuck: false,
        isAnimating: false,
    });

    useEffect(() => {
        const checkIfScrolled = debounce(() => {
            if (ref?.current) {
                const shouldBeStuck = window.scrollY > ref?.current.getBoundingClientRect().height;
                setHeaderState((oldState) => {
                    if (oldState.isStuck !== shouldBeStuck) {
                        setTimeout(() => {
                            setHeaderState({
                                isStuck: shouldBeStuck,
                                isAnimating: false,
                            });
                        }, 300);
                        return {
                            isStuck: shouldBeStuck,
                            isAnimating: true,
                        };
                    }
                    return oldState;
                });
            }
        }, 100);
        window.addEventListener('scroll', checkIfScrolled);

        return () => {
            window.removeEventListener('scroll', checkIfScrolled);
        };
    }, [ref]);

    return headerState;
};

export default useStickyNavbar;
