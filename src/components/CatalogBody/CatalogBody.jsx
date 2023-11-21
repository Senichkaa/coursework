import React from 'react';
import { useEffect } from 'react';
import { Container } from 'common/Container.styled';
import CarList from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/carSlice/carsThunk';
import {
  selectCars,
  selectFilteredCars,
  selectFilters,
  selectIsFiltered,
  selectIsLoading,
} from 'redux/carSlice/selectors';

import {
  setFilter,
  setFilteredCars,
  setIsCarsFiltered,
} from 'redux/carSlice/slice';
import Filter from 'components/Filter/Filter';

function CatalogBody() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilters);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  const isFiltered = useSelector(selectIsFiltered);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  console.log('Parent component filter:', filter);

  return (
    <section>
      <Container>
        <Filter
          cars={cars}
          filter={filter}
          isFiltered={isFiltered}
          inFilter={value => dispatch(setFilteredCars(value))}
          changeIsFiltered={value => dispatch(setIsCarsFiltered(value))}
          changeFilter={value => dispatch(setFilter(value))}
        />
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <CarList cars={isFiltered ? filteredCars : cars} />
        )}
        {isFiltered && !filteredCars.length && <span>Not found</span>}
      </Container>
    </section>
  );
}
export default CatalogBody;
