import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot ,useRecoilValue,useSetRecoilState} from "recoil"
import { isUserLoading, userState } from 'store'
import axios from 'axios'
import {useEffect} from 'react'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>
    </div>
      )
}
function App2({Component,pageProps}){
  const userLoading=useRecoilValue(isUserLoading);
  if(userLoading){
    return <>
    Loading...
    <InitUser/>
    </>
  }
  return <div>
    {/* <Appbar/> */}
    <div>
      USER LOGGED IN
    </div>
    <Component {...pageProps}/>
   </div>
}

function InitUser(){
  const setUser=useSetRecoilState(userState);

  const init=async()=>{
    try{
      const response=await axios.get(`/api/auth/me`,{
        headers: {
          "Authorization": "Bearer "+localStorage.getItem("token")
        }
      })

      if(response.data.user){
          setUser({
            isLoading:false,
            userEmail:response.data.user.username
          })
      }else{
        setUser({
          isLoading:false,
          userEmail:null
        })
      }
    }catch(err){
      setUser({
        isLoading:false,
        userEmail:null
      })
    }
  };

  useEffect(()=>{
    init();
  })

  return <> </>
   
  
}
