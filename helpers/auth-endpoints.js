import baseUrl from './base-url';
import fetcher from './fetcher';

export async function generateAnonymousUser() {
  const response = await fetcher(
    `${baseUrl()}/api/auth/generateAnonymousUser`,
    {
      method: 'POST',
    }
  );
  return response;
}
