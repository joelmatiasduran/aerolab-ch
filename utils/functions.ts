export const fetcher = async (url: string): Promise<any> =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  }).then((res) => res.json())
