import { useEffect, useState } from 'react';

const useDebounce = (userInput: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(userInput);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedValue(userInput);
        }, delay);

        //cancel timer if either dependency changes
        return () => {
            clearTimeout(debounceTimer);
        };
    }, [userInput, delay]);

    return debouncedValue;
};

export default useDebounce;
