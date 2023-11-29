import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../../redux/authSlice/authThunk';
import {
  CenteredContainer,
  AuthForm,
  TitleSpan,
  Title,
  FormLabel,
  FormInput,
  FormButton,
} from '../Forms.styled';
import { Container } from 'common/Container.styled';

export const LoginForm = () => {
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
      await dispatch(login(formData));
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Container>
      <CenteredContainer>
        <Title>
          <TitleSpan>Log in</TitleSpan>&nbsp;to our system <br /> for your
          further actions
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
          <FormButton type="submit">Log In</FormButton>
        </AuthForm>
      </CenteredContainer>
    </Container>
  );
};
