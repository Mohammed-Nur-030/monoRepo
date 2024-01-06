// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import type { NextApiRequest, NextApiResponse } from 'next'

import { User, Admin, Course } from "db";
import jwt from "jsonwebtoken"
import { ensureDbConnect } from '@/lib/dbConnect';


type Data = {
  token?: string,
  message?:string,
}
const SECRET="SECRET"

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
console.log("Inside the func")

  await ensureDbConnect()
 
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (admin) {
        console.log("Admin already exsits")
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      console.log("Just b4 the result")
      res.json({ message: 'Admin created successfully', token });
    }


}
