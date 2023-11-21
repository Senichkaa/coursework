import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { brands } from './сhooseModel';
import { TfiAngleDoubleDown, TfiAngleDoubleUp } from 'react-icons/tfi';

const Filter = ({
  cars,
  isFiltered,
  inFilter,
  changeIsFiltered,
  filter = {},
  changeFilter,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

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
    <section>
      <div>
        <div>
          <label htmlFor="modelTitle">Brands</label>
          <input
            id="modelTitle"
            readOnly
            placeholder="Choose brand"
            value={selectedBrand}
          />
        </div>
        <button type="button" onClick={() => switchDropdown('brand')}>
          {isDropdownOpen === 'brand' ? (
            <TfiAngleDoubleUp />
          ) : (
            <TfiAngleDoubleDown />
          )}
        </button>
        {isDropdownOpen === 'brand' && (
          <div>
            <ul>
              {brands.map((option, index) => (
                <li
                  key={index}
                  className={filter && filter.brand === option ? 'active' : ''}
                  onClick={() => selectHandle(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" onClick={searchHandle}>
          Search
        </button>
        {isFiltered && (
          <button type="button" onClick={resetHandle}>
            Reset
          </button>
        )}
      </div>
    </section>
  );
};

export default Filter;
