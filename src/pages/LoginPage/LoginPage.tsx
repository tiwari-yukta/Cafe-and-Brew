import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Button, Input, Typography } from '@/components/ui';
import { useLoginPage } from '@/hooks';
import { signInValidationSchema } from '@/validation';
import { ROUTES } from '@/constants/routes';
import {
  PageWrapper,
  AuthCard,
  TitleWrapper,
  SubtitleWrapper,
  StyledForm,
  Divider,
  SocialButton,
  FooterLink,
  ErrorWrapper,
} from './styled';

export const LoginPage = () => {
  const { error, handleEmailSignIn, handleGoogleSignIn } = useLoginPage();

  return (
    <PageWrapper>
      <AuthCard>
        <TitleWrapper>
          <Typography name="display">Welcome back</Typography>
        </TitleWrapper>
        <SubtitleWrapper>
          <Typography name="subtitle">Sign in to your account</Typography>
        </SubtitleWrapper>

        <SocialButton type="button" onClick={handleGoogleSignIn}>
          <FaGoogle />
          Continue with Google
        </SocialButton>

        <Divider>or sign in with email</Divider>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInValidationSchema}
          onSubmit={handleEmailSignIn}
        >
          {({ errors, touched, getFieldProps, isSubmitting, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...getFieldProps('email')}
                error={touched.email ? errors.email : undefined}
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                {...getFieldProps('password')}
                error={touched.password ? errors.password : undefined}
              />
              {error && (
                <ErrorWrapper>
                  <Typography name="error">{error}</Typography>
                </ErrorWrapper>
              )}
              <Button type="submit" buttonSize="lg" fullWidth disabled={isSubmitting}>
                Sign In
              </Button>
            </StyledForm>
          )}
        </Formik>

        <FooterLink>
          Don&apos;t have an account? <Link to={ROUTES.SIGNUP}>Sign up</Link>
        </FooterLink>
      </AuthCard>
    </PageWrapper>
  );
};
