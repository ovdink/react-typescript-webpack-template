import { useEffect, useState } from 'react';

export const useCopyText = () => {
    const [copyText, setCopyText] = useState('Copy text');

    useEffect(() => {
        const timout =
            copyText !== 'Copy text' &&
            setTimeout(() => {
                setCopyText('Copy text');
            }, 3000);

        return () => {
            !!timout && clearTimeout(timout);
        };
    }, [copyText]);

    return { copyText, setCopyText };
};
