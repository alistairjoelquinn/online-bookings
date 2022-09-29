import connectToDatabase from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

  const data = await db.collection('available').find().toArray();

  return res.json(data);
}
