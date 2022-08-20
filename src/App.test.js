import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

const renderApp = () => {
  render(<GoogleOAuthProvider clientId={googleClientId}><App /></GoogleOAuthProvider>);
}

test('renders app', () => {
  renderApp();

  expect(screen.getByText('Welcome, try out oAuth below by logging in:')).toBeTruthy();
});

test('renders error button', () => {
  renderApp();

  expect(screen.getByText('Fake a problem with oAuth')).toBeTruthy();
});


test('renders error', async() => {
  renderApp();

  const errorBtn = screen.getByText('Fake a problem with oAuth')

  fireEvent(
    errorBtn,
    new MouseEvent('click')
  )

  await waitFor(() => {
    // eslint-disable-next-line testing-library/await-async-query
    expect(screen.findByText('There was an error logging you in with Google.')).toBeTruthy();
  })
});
