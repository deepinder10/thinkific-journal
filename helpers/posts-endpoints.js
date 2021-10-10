import baseUrl from './base-url';
import fetcher from './fetcher';

export async function sendCreatePostRequest(body) {
  const response = await fetcher(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return response;
}

export async function fetchPostsFromServer() {
  const response = await fetcher(`${baseUrl()}/api/posts`);
  return response;
}
