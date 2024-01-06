import { ensureDbConnect } from "@/lib/dbConnect";
import { getUser } from "@/lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";


type Data = {
    user?: string,
    message?:string,
  }
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data>
){
    await ensureDbConnect();
    const authHeader=req.headers.authorization;
    if(authHeader){
        const token=authHeader.split(' ')[1];
        getUser(token,(userId)=>{
            if(!userId){
                res.status(403).json({});
                return;
            }
            res.json({user:userId});
        })
    }
}