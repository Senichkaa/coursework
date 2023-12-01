import React, { useEffect } from 'react';
import { Container } from 'common/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectCars, selectIsLoading } from 'redux/carSlice/selectors';
import CarList from 'components/CarList/CarList';
import { fetchAllCars } from 'redux/carSlice/carsThunk';
import { clearCart } from 'redux/cartSlice/slice';
import { Notify } from 'notiflix';
import {
  LoadingText,
  CartSection,
  EmptyCartText,
  CartTextSpan,
  CartListHeader,
  Summary,
  AcceptButton,
} from './Cart.styled';
import CarImage from '../../assets/audirs.png';
import AutoImage from '../../assets/rsq8.png'

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const [isPurchaseCompleted, setPurchaseCompleted] = useState(false);

  const cart = useSelector(state => state.cart.cart);
  const allCars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);

  const cartCars = allCars.filter(car => cart.includes(car.id));
  const totalAmount = cartCars.reduce((total, car) => total + car.price, 0);

  const handlePurchase = () => {
    if (cartCars.length > 0) {
      Notify.success(
        'Purchase successful! Thank you for shopping with us. Wait for our response via email.'
      );
      setPurchaseCompleted(true);
      dispatch(clearCart());
    } else {
      Notify.warning(
        'Your shopping cart is empty. Please add items before purchasing.'
      );
    }
  };

  return (
    <CartSection>
      <Container>
        {loading && <LoadingText>Loading...</LoadingText>}
        {!loading && isPurchaseCompleted && (
          <>
            <EmptyCartText>
              Your shopping cart is empty. <br /> Please, make your&nbsp;
              <CartTextSpan>decisions</CartTextSpan> and visit this page again.
            </EmptyCartText>
            <div>
              <img src={AutoImage} alt="RSQ8" />
            </div>
          </>
        )}
        {!loading && !isPurchaseCompleted && cartCars.length === 0 && (
          <>
            <EmptyCartText>
              Your shopping cart is empty. <br /> Please, make your&nbsp;
              <CartTextSpan>decisions</CartTextSpan> and visit this page again.
            </EmptyCartText>
            <div>
              <img src={CarImage} alt="RS6" />
            </div>
          </>
        )}
        {!loading && !isPurchaseCompleted && cartCars.length > 0 && (
          <>
            <CartListHeader>
              <CartTextSpan>Your</CartTextSpan> shopping list
            </CartListHeader>
            <CarList cars={cartCars} />
            <Summary>Summary price: $ {totalAmount}</Summary>

            <AcceptButton type="button" onClick={handlePurchase}>
              Purchase
            </AcceptButton>
          </>
        )}
      </Container>
    </CartSection>
  );
}

export default Cart;
