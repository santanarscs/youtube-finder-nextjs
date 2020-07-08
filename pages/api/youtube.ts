import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;
  const googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY 
    },
    scopes: ['https://www.googleapis.com/auth/youtube.readonly']
  })

  const youtube = google.youtube({
    auth: googleAuth,
    version: 'v3'
  })
  const { data } = await youtube.search.list({
    q: String(search),
    part: ['id']
  });
  const channelId = data.items[0]?.id.channelId;

  const response = await youtube.channels.list({
    id: [channelId],
    part: ['snippet', 'statistics', 'contentDetails']
  });

  const channelInformation = response.data.items[0];

  return res.status(200).json(channelInformation)
}