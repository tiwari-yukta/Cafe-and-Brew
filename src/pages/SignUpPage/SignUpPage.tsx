import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Button, Input, Typography } from '@/components/ui';
import { useSignUpPage } from '@/hooks';
import { signUpValidationSchema } from '@/validation';
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

export const SignUpPage = () => {
  const { error, handleEmailSignUp, handleGoogleSignUp } = useSignUpPage();

  return (
    <PageWrapper>
      <AuthCard>
        <TitleWrapper>
          <Typography name="display">Create account</Typography>
        </TitleWrapper>
        <SubtitleWrapper>
          <Typography name="subtitle">Join Café and Brew with email or Google</Typography>
        </SubtitleWrapper>

        <SocialButton type="button" onClick={handleGoogleSignUp}>
          <FaGoogle />
          Continue with Google
        </SocialButton>

        <Divider>or sign up with email</Divider>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={handleEmailSignUp}
        >
          {({ errors, touched, getFieldProps, isSubmitting, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Input
                label="Name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                {...getFieldProps('name')}
                error={touched.name ? errors.name : undefined}
              />
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
                autoComplete="new-password"
                {...getFieldProps('password')}
                error={touched.password ? errors.password : undefined}
              />
              <Input
                label="Confirm password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                {...getFieldProps('confirmPassword')}
                error={touched.confirmPassword ? errors.confirmPassword : undefined}
              />
              {error && (
                <ErrorWrapper>
                  <Typography name="error">{error}</Typography>
                </ErrorWrapper>
              )}
              <Button type="submit" buttonSize="lg" fullWidth disabled={isSubmitting}>
                Create Account
              </Button>
            </StyledForm>
          )}
        </Formik>

        <FooterLink>
          Already have an account? <Link to={ROUTES.LOGIN}>Sign in</Link>
        </FooterLink>
      </AuthCard>
    </PageWrapper>
  );
};
