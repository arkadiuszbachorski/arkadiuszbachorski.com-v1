import { useEffect, useState } from 'react';

const useTypewriter = (text, time = 100, delay = undefined) => {
    const [state, setState] = useState(() => ({
        position: 0,
        content: '',
        isCurrentlyTyping: true,
        isDelayed: delay === undefined,
    }));

    useEffect(() => {
        if (delay !== undefined && state.isDelayed === false) {
            setTimeout(() => {
                setState((oldState) => ({ ...oldState, isDelayed: true }));
            }, delay);
        } else if (state.content !== text) {
            setTimeout(() => {
                setState((oldState) => ({
                    ...oldState,
                    position: oldState.position + 1,
                    content: text.substr(0, oldState.position + 1),
                    isCurrentlyTyping: true,
                }));
            }, time);
        } else {
            setState((oldState) => ({
                ...oldState,
                isCurrentlyTyping: false,
            }));
        }
    }, [text, state.content, time, state.isDelayed]);

    return {
        content: state.content,
        isTyping: state.isCurrentlyTyping && state.isDelayed,
    };
};

export default useTypewriter;
