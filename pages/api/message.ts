// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Pusher from 'pusher'

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: 'eu',
  useTLS: true,
})

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  pusher.trigger('chat', 'message', req.body).catch((e) => console.log(e))
  res.status(200).json({})
}
