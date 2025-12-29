import { Metadata } from 'next';
import LoginView from './LoginView';
import ROUTES from '@/constants/routes';

export const metadata: Metadata = {
  title: ROUTES.LOGIN.title,
  description: ROUTES.LOGIN.description
};

const Login = () => {
  return <LoginView />;
};

export default Login;
