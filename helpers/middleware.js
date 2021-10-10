import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

export async function getUserInfoFromJWT(req) {
  const { token } = cookie.parse(req.headers.cookie || '');
  if (!token) {
    throw new Error('User information not present.');
  }
  const user = await jwt.verify(token, process.env.JWT_SECRET);
  return user;
}
