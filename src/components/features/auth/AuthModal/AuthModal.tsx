import { Formik } from 'formik';
import { FaGoogle } from 'react-icons/fa';
import { Button, Input, Modal, Typography } from '@/components/ui';
import { useAuthModal } from '@/hooks';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from '@/validation';
import {
  AuthModalContent,
  AuthCard,
  TitleWrapper,
  SubtitleWrapper,
  StyledForm,
  Divider,
  SocialButton,
  FooterLink,
  ErrorWrapper,
} from './styled';

export type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signup' | 'signin';
};

export const AuthModal = ({
  isOpen,
  onClose,
  defaultMode = 'signup',
}: AuthModalProps) => {
  const {
    mode,
    error,
    handleGoogleAuth,
    handleEmailSignIn,
    handleEmailSignUp,
    switchToSignIn,
    switchToSignUp,
  } = useAuthModal(isOpen, defaultMode, onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthModalContent>
        <AuthCard>
          {mode === 'signup' ? (
            <>
              <TitleWrapper>
                <Typography name="display">Create account</Typography>
              </TitleWrapper>
              <SubtitleWrapper>
                <Typography name="subtitle">Join Café and Brew with email or Google</Typography>
              </SubtitleWrapper>
              <SocialButton type="button" onClick={handleGoogleAuth}>
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
                Already have an account?{' '}
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={switchToSignIn}
                >
                  Sign in
                </button>
              </FooterLink>
            </>
          ) : (
            <>
              <TitleWrapper>
                <Typography name="display">Welcome back</Typography>
              </TitleWrapper>
              <SubtitleWrapper>
                <Typography name="subtitle">Sign in to your account</Typography>
              </SubtitleWrapper>
              <SocialButton type="button" onClick={handleGoogleAuth}>
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
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={switchToSignUp}
                >
                  Sign up
                </button>
              </FooterLink>
            </>
          )}
        </AuthCard>
      </AuthModalContent>
    </Modal>
  );
};
