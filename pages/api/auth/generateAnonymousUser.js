import { createUser } from '@/prisma/helpers/auth';
import jwt from 'jsonwebtoken';

// GET /api/posts
export default async (req, res) => {
  // Create user in our database
  if (req.method === 'POST') {
    const user = await createUser();

    // Create token
    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET
    );

    res.json({ token });
  }
};
