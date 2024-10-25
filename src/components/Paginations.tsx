import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTodoStore } from '../state';

const Paginations = () => {
    const [searchParams, setSearchParams] = useSearchParams({ skip: '0' });
    const limitRef = useRef<HTMLInputElement>(null);
    const setFilters = useTodoStore(state => state.setFilters)
    const filters = useTodoStore(state => state.filters)

    const currentSkip = parseInt(searchParams.get("skip") || '0', 10);
    const limit = parseInt(limitRef.current?.value || '0', 10);

    const handleNextClick = () => {
        setFilters({
            ...filters,
            skip: currentSkip + limit,
        })
        setSearchParams({ skip: filters.skip.toString() });
    };

    const handleBackClick = () => {
        setFilters({
            ...filters,
            skip: currentSkip - limit,
        })
        setSearchParams({ skip: filters.skip.toString() });
    };

    return (
        <div>
            <input type="hidden" ref={limitRef} defaultValue="10" />
            <button onClick={handleBackClick}>Back</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Paginations;
