import type { NextApiRequest, NextApiResponse } from 'next';
import getFirstDayOfWeek from '../../../lib/get-first-day-of-week';

import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const data = await db
        .collection('booked')
        .find({ start: { $gt: new Date(getFirstDayOfWeek()).toISOString() } })
        .toArray();

    return res.json(data);
};
