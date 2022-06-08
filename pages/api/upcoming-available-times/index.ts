import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const data = await db
        .collection('available')
        .find({ created: { $gt: ISODate('2016-04-09T08:28:47') } })
        .toArray();

    return res.json(data);
};
