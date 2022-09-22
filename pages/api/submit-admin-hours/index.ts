import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) return res.status(401);

  const { db } = await connectToDatabase();

  const { acknowledged } = await db.collection('available').insertOne(req.body);

  return res.status(acknowledged ? 200 : 400).json({ success: !!acknowledged });
}
