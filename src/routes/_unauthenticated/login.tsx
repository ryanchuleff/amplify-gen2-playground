import { ALLOW_SIGNUPS } from '@/config';
import { Logo, Splash } from '@/components/common';
import { Button, Card } from '@/components/ui';
import { clientQueryOptionsBySlug } from '@/services/client';
import { useRouteContext } from '@tanstack/react-router'
import {
  createFileRoute,
  redirect,
} from '@tanstack/react-router'
import { 
  signIn, 
  SignInInput, 
  confirmSignUp, 
  ConfirmSignUpInput, 
  resetPassword, 
  ResetPasswordInput, 
  confirmResetPassword,
  ConfirmResetPasswordInput
} from 'aws-amplify/auth';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { z } from 'zod'

export const Route = createFileRoute('/_unauthenticated/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth === 'authenticated') {
      throw redirect({ to: search.redirect || '/' })
    }
  },
  component: LoginComponent,
})

let clientId : string | undefined;

const customComponents = {
  Header() {
    const { queryClient } = useRouteContext({ from: '__root__' });
    const client = queryClient.getQueryData(clientQueryOptionsBySlug().queryKey);
    clientId = client?.id;

    return (
      <>
        <Logo />
        <div className={`m-5 text-3xl text-center`}>
          {client?.name}
        </div>
      </>
    );
  },
  Footer() {
    const { route, toSignUp, toSignIn } = useAuthenticator((context) => [context.route]);

    return ALLOW_SIGNUPS ? (
      <Card className='text-center'>
        {route === 'signIn' ? (
          <Button onClick={toSignUp}>Become a Member!</Button>
        ) : (
          <Button onClick={toSignIn}>Login Now</Button>
        )}
      </Card>
    ) : null;
  },
};

const parseEmail = (email: string): string => {
  const parts = email.toLowerCase().split('@');
  return `${parts[0]}+${clientId}@${parts[1]}`;
}

const customServices = {

  async handleSignIn(input: SignInInput) {
    const { username, options } = input
    const uname = parseEmail(username); // read from the global var
    return signIn({
      ...input,
      username: uname,
      options: {
        ...options,
        userAttributes: {
          email: username.toLowerCase(),
        }
      }
    });
  },

  async handleConfirmSignUp(input: ConfirmSignUpInput) {
    const uname = parseEmail(input.username); // read from the global var
    return confirmSignUp({
      ...input,
      username: uname
    });
  },

  async handleForgotPassword(input: ResetPasswordInput) {
    const uname = parseEmail(input.username); // read from the global var
    return resetPassword({
      ...input,
      username: uname
    });
  },

  async handleForgotPasswordSubmit(input: ConfirmResetPasswordInput) {
    const uname = parseEmail(input.username); // read from the global var
    return confirmResetPassword({
      ...input,
      username: uname
    })
  }
};

function LoginComponent() {
  const { queryClient } = useRouteContext({ from: '__root__' });
  const client = queryClient.getQueryData(clientQueryOptionsBySlug().queryKey);

  return (
    <div>
      {client ? (
        <Authenticator
          variation="modal" 
          services={customServices}
          components={customComponents} 
          hideSignUp={!ALLOW_SIGNUPS} 
          loginMechanisms={['email']}
        />
      ) : (
        <Splash />
      )}
    </div>
  );
}
