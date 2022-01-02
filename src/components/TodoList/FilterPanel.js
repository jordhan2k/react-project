import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeFilter } from '../../store/actions/todoActions';
import { todoFilters } from '../../utils/constants';

const Container = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;
const FilterItem = styled.div`
    margin: 0 5px;
    padding: 5px 10px;
    background-color: ${props => props.bg ? props.bg : "rgba(210, 210, 210)"};
    font-size : 16px;
    border-radius: 10px;
    font-weight: ${props => props.bg && "600"};
    box-shadow: ${props => props.bg && "0 0 5px 1px rgba(0,0,0,.1)"};
    cursor: pointer;


`;

const FilterPanel = () => {

    const currentFilter = useSelector(state => state.todo.filter);
    const dispatch = useDispatch();

    const onFilterClick = status => {
        dispatch(changeFilter(status));
    }

    return (
        <Container>
            {todoFilters.map((item, index) => (
                <FilterItem
                    key={index}
                    bg={currentFilter === item.status && item.color}
                    onClick={onFilterClick.bind(this, item.status)}
                >
                    {item.status}
                </FilterItem>
            ))}
        </Container>
    )
}

export default FilterPanel
