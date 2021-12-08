export const formatDate = (date: string): string => {
  const newDate = new Date(Date.parse(date))
  return newDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export const formatNumbers = (value: number): string =>
  value.toLocaleString('en-US')

export const fetcher = async (url: string): Promise<any> =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  }).then((res) => res.json())
