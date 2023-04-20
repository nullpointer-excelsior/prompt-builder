import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';


dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export function generateToken(payload: any) {

  const signInOptions: SignOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    // algorithm: 'RS256',
    expiresIn: '1h'
  };

  // generate JWT
  return jwt.sign(payload, JWT_SECRET, signInOptions);
};


export function verifyToken(req: Request, res: Response, next: NextFunction) {
  
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET!);
    req.body.userId = (decodedToken as any).id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

