import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFilter } from '../../reduxe/filter/filterSlice';
import { getFilter } from '../../reduxe/selectors';
import { FilterLabel, FilterInput, FilterWrap } from './Filter.styled';

const Filter = () => {

    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => {
        dispatch(changeFilter(event.target.value.trim()));
    };
    
    return (
        <FilterWrap>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <br />
            <FilterInput
                onChange={onChangeFilter}
                type="text"
                value={value}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Search username"
            />
        </FilterWrap>
    )
};
    
export default Filter;

Filter.propTypes = {
    inputLabel: PropTypes.string,
    onChangeFilter: PropTypes.func,
    value: PropTypes.string,
};