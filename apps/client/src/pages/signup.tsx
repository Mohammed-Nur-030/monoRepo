
import {Signup} from '@repo/ui'
import axios from "axios"
import {RecoilRoot} from "recoil"
// import { isUserLoading } from 'store'

export default function SigninPage(){
  
    return(

             <div>
            <Signup
             onClick={async(username,password)=>{
                // alert(username)
                // alert(password)

               const response=await axios.post("/api/signup",{
                username,
                password,
               })
               localStorage.setItem("token",response.data.token);
            }}
            />
        </div>
     
       
    )
}