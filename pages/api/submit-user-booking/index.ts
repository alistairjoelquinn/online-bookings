import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

import validateFormValues from '../../../lib/validate-form-values';
import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const error = validateFormValues(req.body);

    if (error) return res.status(400).json({ error });

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('booked').insertOne(req.body);

    return res.status(acknowledged ? 200 : 400).json({ success: !!acknowledged });
};
