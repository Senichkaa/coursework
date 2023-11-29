import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/authSlice/authThunk';
import { Container } from 'common/Container.styled';
import {
  CenteredContainer,
  AuthForm,
  TitleSpan,
  Title,
  FormLabel,
  FormInput,
  FormButton,
} from '../Forms.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(register(formData));
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Container>
      <CenteredContainer>
        <Title>
          <TitleSpan>Register</TitleSpan>&nbsp;your account <br /> for further
          new discoveries
        </Title>
        <AuthForm onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Email
            <FormInput
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Password
            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormLabel>
          <FormButton type="submit">Register</FormButton>
        </AuthForm>
      </CenteredContainer>
    </Container>
  );
};
