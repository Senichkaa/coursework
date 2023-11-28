import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authSlice/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
  };
};
