import { Metadata } from 'next';
import SignupView from './SignupView';
import ROUTES from '@/constants/routes';

export const metadata: Metadata = {
  title: ROUTES.SIGNUP.title,
  description: ROUTES.SIGNUP.description
};

const SignupPage = () => {
  return <SignupView />;
};

export default SignupPage;
