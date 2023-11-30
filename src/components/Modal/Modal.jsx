import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from 'redux/cartSlice/slice';
import { createPortal } from 'react-dom';
import modalIcons from '../../assets/modal-icons.svg';
import { TbShoppingCartDollar } from 'react-icons/tb';
import { FcCancel } from 'react-icons/fc';
import { Notify } from 'notiflix';

import {
  BackdropWindow,
  ModalContainer,
  ImagePicture,
  ModalContent,
  ContentTitle,
  ContentDescription,
  ContentWrapper,
  ContentConfiguration,
  Span,
  FeaturesWrapper,
  FeatureText,
  PriceText,
  WarningText,
  ButtonWrapper,
  WarningWrapper,
  PurchaseButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal');

const toggleOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'auto';
};

const Modal = ({ car, onClose }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    type,
    engine,
    transmission,
    description,
    features,
    price,
  } = car;

  const clickOnOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    toggleOverflow(true);
    const onButtonPress = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onButtonPress);
    return () => {
      toggleOverflow(false);
      window.removeEventListener('keydown', onButtonPress);
    };
  });

  const cart = useSelector(state => state.cart.cart);
  const cartIncluded = cart.includes(id);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleCart = () => {
    if (isLoggedIn) {
      if (cartIncluded) {
        dispatch(removeCart(id));
        Notify.failure('Car removed from the cart.');
      } else {
        dispatch(addToCart(id));
        Notify.success('Car added to the cart.');
      }
    } else {
      Notify.warning('You need to be logged in to make a purchase.');
    }
  };

  return createPortal(
    <BackdropWindow onClick={clickOnOverlay}>
      <ModalContainer>
        <ModalContent>
          <ButtonWrapper type="button" onClick={onClose}>
            <svg width={24} height={24}>
              <use href={`${modalIcons}#icon-cancel`} />
            </svg>
          </ButtonWrapper>
          <ImagePicture src={img} alt={`${brand} ${model} ${year}`} />
          <ContentWrapper>
            <ContentTitle>
              {brand} {model}&nbsp;<span>,</span>&nbsp;{year}
            </ContentTitle>
            <ContentDescription>{description}</ContentDescription>
            <ContentConfiguration>
              <Span>Configuration: </Span> {type}, {engine}, {transmission}.
            </ContentConfiguration>
            <FeaturesWrapper>
              <Span>Features: </Span>
              {features.map((feature, index) => (
                <FeatureText key={index}>{feature} </FeatureText>
              ))}
            </FeaturesWrapper>
            <PriceText>
              <Span>Price: </Span>$ {price}
            </PriceText>

            <PurchaseButton onClick={handleCart}>
              {cartIncluded ? (
                <>
                  Remove <FcCancel width={20} height={20} />
                </>
              ) : (
                <>
                  Purchase
                  <TbShoppingCartDollar width={20} height={20} />
                </>
              )}
            </PurchaseButton>
            <WarningWrapper>
              <svg width={18} height={18} fill="#d3d3d3">
                <use href={`${modalIcons}#icon-warning`} />
              </svg>
              <WarningText>
                To learn more, contact us for further communication.
              </WarningText>
            </WarningWrapper>
          </ContentWrapper>
        </ModalContent>
      </ModalContainer>
    </BackdropWindow>,
    modalRoot
  );
};
export default Modal;
