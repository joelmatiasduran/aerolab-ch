import { NextApiRequest, NextApiResponse } from 'next'

const me = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const headers = {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE3OTZiNzlhODU2MjAwMjE3MDliYWEiLCJpYXQiOjE2MzgzNzMwNDh9.cKdurrAmUDnT3823nGi3JoCPNw2J1k3VgjuRnO8vllE',
    'Content-type': 'application/json',
  }

  const data = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    method: 'GET',
    headers: headers,
  }).then((res) => res.json())

  res.status(200).send(data)
}

export default me
