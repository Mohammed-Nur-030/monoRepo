import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button,Mybox } from '@repo/ui'
// import {userState} from '@repo/'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
 <div>
  Hello World
 </div>
 <Button  className='b' appName='Client Next app'>
  Hi Guys
 </Button>
 <Mybox></Mybox>
    </>
  )
}
