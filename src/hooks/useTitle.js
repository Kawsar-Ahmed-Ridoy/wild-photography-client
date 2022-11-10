import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Wild Photography`;
    }, [title])
}

export default useTitle;