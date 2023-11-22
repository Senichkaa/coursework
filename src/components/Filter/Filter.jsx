import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { brands } from './сhooseModel';
import { TfiAngleDoubleDown, TfiAngleDoubleUp } from 'react-icons/tfi';
import {
  FilterSection,
  FilterBlock,
  FilterInput,
  FilterButton,
  Label,
  Input,
  BrandsDropdown,
  BrandsUl,
  BrandsLi,
  FilterSubmitButton,
  FilterResetButton,
  ButtonsSubmit,
} from './Filter.styled';

const Filter = ({
  cars,
  isFiltered,
  inFilter,
  changeIsFiltered,
  filter = {},
  changeFilter,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const isFilterEmpty = useCallback(() => {
    for (const key in filter) {
      if (filter.hasOwnProperty(key) && filter[key]) {
        return false;
      }
    }
    return true;
  }, [filter]);

  useEffect(() => {
    if (isFilterEmpty()) {
      setSearchParams({});
    } else {
      setSearchParams({ ...filter });
    }
  }, [filter, isFilterEmpty, setSearchParams]);

  const switchDropdown = dropdownType => {
    if (isDropdownOpen === dropdownType) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(dropdownType);
    }
  };

  const filterCars = (car, filter) => {
    console.log('Filtering car:', car, 'with filter:', filter);
    if (!car) {
      return false;
    }

    if (filter && filter.brand !== undefined) {
      return !filter.brand || car.brand === filter.brand;
    }
    return true;
  };

  const resetHandle = () => {
    setSelectedBrand('');
    dispatch(changeFilter({ ...filter, brand: '' }));
    dispatch(changeIsFiltered(false));
  };

  const searchHandle = () => {
    console.log('All cars:', cars);
    const filteredCars = cars.filter(car => filterCars(car, filter));
    console.log('filteredCars:', filteredCars);
    inFilter(filteredCars);
    dispatch(changeIsFiltered(true));
  };

  const [selectedBrand, setSelectedBrand] = useState('');

  const selectHandle = selectedBrand => {
    changeFilter({ brand: selectedBrand });
    setIsDropdownOpen(false);
    setSelectedBrand(selectedBrand);
  };

  return (
    <FilterSection>
      <FilterBlock>
        <FilterInput>
          <Label htmlFor="modelTitle">Vehicle Brands</Label>
          <Input
            id="modelTitle"
            readOnly
            placeholder="Select a brand"
            value={selectedBrand}
          />

          <FilterButton type="button" onClick={() => switchDropdown('brand')}>
            {isDropdownOpen === 'brand' ? (
              <TfiAngleDoubleUp />
            ) : (
              <TfiAngleDoubleDown />
            )}
          </FilterButton>
        </FilterInput>
        {isDropdownOpen === 'brand' && (
          <BrandsDropdown>
            <BrandsUl>
              {brands.map((option, index) => (
                <BrandsLi
                  key={index}
                  className={filter && filter.brand === option ? 'active' : ''}
                  onClick={() => selectHandle(option)}
                >
                  {option}
                </BrandsLi>
              ))}
            </BrandsUl>
          </BrandsDropdown>
        )}
        <ButtonsSubmit>
          <FilterSubmitButton type="button" onClick={searchHandle}>
            Search
          </FilterSubmitButton>
          {isFiltered && (
            <FilterResetButton type="button" onClick={resetHandle}>
              Reset Selection
            </FilterResetButton>
          )}
        </ButtonsSubmit>
      </FilterBlock>
    </FilterSection>
  );
};

export default Filter;
