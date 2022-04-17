import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getNumItemsFound,
    updateCurrentPage,
    updateItemsPerPage,
} from './paginationSlice';

interface Props {
    itemsPerPage: number;
}

const Pagination = ({ itemsPerPage }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateItemsPerPage(itemsPerPage));
    }, [itemsPerPage, dispatch]);

    const numItems = useSelector(getNumItemsFound);

    function calcTotalBoxes(numItems: number, itemsPerPage: number) {
        let adjustedItems = numItems;
        if (numItems >= 100) {
            adjustedItems = 100;
        }
        return Math.ceil(adjustedItems / itemsPerPage);
    }

    const getTotalBoxes = () => {
        const numBoxes = calcTotalBoxes(numItems, itemsPerPage);
        const totalBoxes = [];
        for (let i = 1; i <= numBoxes; i++) {
            totalBoxes.push(i);
        }
        return totalBoxes;
    };

    const totalBoxes = getTotalBoxes();

    const onClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        const newPageValue = Number(target.outerText);
        dispatch(updateCurrentPage(newPageValue));
        console.log(target.outerText);
    };

    return (
        <nav role="navigation" aria-label="Pagination Navigation">
            <ul>
                {totalBoxes.map((box, index) => {
                    return (
                        <li key={index}>
                            <button
                                aria-label={`Goto Page ${box}`}
                                onClick={onClickHandler}
                            >
                                {box}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
