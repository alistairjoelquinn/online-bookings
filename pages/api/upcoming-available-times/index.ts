import { getFirstDayOfWeek } from 'lib/dates';
import connectToDatabase from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection('available')
    .find({ start: { $gt: new Date(getFirstDayOfWeek()).toISOString() } })
    .toArray();

  return res.json(data);
}
