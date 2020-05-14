import { useEffect, useState } from 'react';

const useMatchMedia = (query) => {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        setMatch(window.matchMedia(query).matches);
    }, [query]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = (ev) => setMatch(ev.matches);

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return match;
};

export default useMatchMedia;
