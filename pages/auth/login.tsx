import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Stack,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { showNotification, updateNotification } from '@mantine/notifications';
import { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { login } from '../../api/index';

function LoginPage() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof login>['0']
  >(login, {
    onSuccess: () => {
      updateNotification({
        id: 'login',
        title: 'Success',
        message: 'Login success',
        loading: false,
      });

      router.push('/');
    },
    onError: () => {
      updateNotification({
        id: 'login',
        title: 'Error',
        message: 'Login Error',
        loading: false,
      });
    },
  });

  return (
    <>
      <Head>
        <title>Login User</title>
      </Head>
      <Container>
        <Title>Login</Title>
        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
            <Stack>
              <TextInput
                label='Email'
                placeholder='emaxple@example.com'
                required
                {...form.getInputProps('email')}
              />{' '}
              <PasswordInput
                label='Password'
                placeholder='enter your password'
                required
                {...form.getInputProps('password')}
              />{' '}
              <Button type='submit'>Login</Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default LoginPage;
