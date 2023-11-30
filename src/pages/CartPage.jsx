import React, { useEffect } from 'react';
import { Container } from 'common/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from 'redux/carSlice/selectors';
import CarList from 'components/CarList/CarList';
import { fetchAllCars } from 'redux/carSlice/carsThunk';

function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const cart = useSelector(state => state.cart.cart);
  const allCars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);

  const cartCars = allCars.filter(car => cart.includes(car.id));
  const totalAmount = cartCars.reduce((total, car) => total + car.price, 0);

  return (
    <Container>
      <section>
        {loading && <p>Loading...</p>}
        {!loading && cartCars.length === 0 && (
          <p>Your shopping list is empty.</p>
        )}
        {!loading && cartCars.length > 0 && (
          <>
            <h2>Your shopping list</h2>
            <CarList cars={cartCars} />
            <p>Summary price: $ {totalAmount}</p>
          </>
        )}
      </section>
    </Container>
  );
}

export default CartPage;
