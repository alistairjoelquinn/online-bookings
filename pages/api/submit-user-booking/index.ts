import connectToDatabase from 'lib/mongodb';
import { validateFormValues } from 'lib/validation/form-validation';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  if (!session) return res.status(401);

  const error = validateFormValues(req.body);

  if (error) return res.status(400).json({ error });

  const { db } = await connectToDatabase();

  const { acknowledged } = await db.collection('booked').insertOne(req.body);

  return res.status(acknowledged ? 200 : 400).json({ success: !!acknowledged });
}
