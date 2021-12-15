import { NextApiRequest, NextApiResponse } from 'next'

const redeem = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const headers = {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE3OTZiNzlhODU2MjAwMjE3MDliYWEiLCJpYXQiOjE2MzgzNzMwNDh9.cKdurrAmUDnT3823nGi3JoCPNw2J1k3VgjuRnO8vllE',
    'Content-type': 'application/json',
  }

  const { productId, cost } = req.body

  // if (productId.length !== 24) return res.status(400).end()

  const userPoints = await fetch(
    'https://coding-challenge-api.aerolab.co/user/me',
    {
      method: 'GET',
      headers: headers,
    }
  ).then((res) => res.json())

  if (userPoints < cost) return res.status(400).end()

  await fetch('https://coding-challenge-api.aerolab.co/redeem', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ productId: productId }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (Object.keys(response)[0] === 'error') {
        res.status(400).end()
      } else if (Object.keys(response)[0] === 'message') {
        res.status(200).end()
      }
    })
}

export default redeem
