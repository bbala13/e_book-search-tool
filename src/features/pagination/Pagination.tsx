import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, StyledButton, StyledUL } from './Pagination.styles';
import {
    getCurrentActivePage,
    getNumItemsFound,
    updateCurrentActivePage,
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

    const scrollToTop = () => {
        setTimeout(() => {
            window.scroll({ top: 0, behavior: 'smooth' });
        }, 20);
    };

    const onClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        scrollToTop();
        const target = e.target as HTMLButtonElement;
        const newPageValue = Number(target.outerText);

        dispatch(updateCurrentPage(newPageValue));
        dispatch(updateCurrentActivePage(newPageValue));
    };

    const currentActivePage = useSelector(getCurrentActivePage);

    return (
        <Container>
            <nav role="navigation" aria-label="Pagination Navigation">
                <StyledUL>
                    {totalBoxes.map((box, index) => {
                        return (
                            <li key={index}>
                                <StyledButton
                                    aria-label={
                                        currentActivePage === box
                                            ? `Current Page, Page ${box}`
                                            : `Goto Page ${box}`
                                    }
                                    onClick={onClickHandler}
                                    active={
                                        currentActivePage === box ? true : false
                                    }
                                >
                                    {box}
                                </StyledButton>
                            </li>
                        );
                    })}
                </StyledUL>
            </nav>
        </Container>
    );
};

export default Pagination;
