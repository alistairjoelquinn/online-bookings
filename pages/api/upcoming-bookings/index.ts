import { getFirstDayOfWeek } from 'lib/dates';
import connectToDatabase from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection('booked')
    .find({ start: { $gt: new Date(getFirstDayOfWeek()).toISOString() } })
    .toArray();

  return res.json(data);
}
