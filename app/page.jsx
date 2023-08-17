'use client';
import Image from 'next/image'
import styles from './page.module.css'
import  Typography  from 'funuicss/component/Typography'
import IconicInput from 'funuicss/component/IconicInput'
import Icon from 'funuicss/component/Icon'
import Button from "funuicss/component/Button"
import {FunGet , FunRequest} from 'funuicss/js/Fun'
import { EndPoint } from './../Functions/Functions';
import Loader from './../components/Loader';
import InfoModal from './../components/Modals/InfoModal';
import { useState } from 'react';
export default function Home() {
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')
const Submit = () => {
  let email , password 
  email = FunGet.val("#email")
  password = FunGet.val("#password")

  if(email && password){
    setloading(true)
    FunRequest.post(EndPoint + '/staff/login' , {email , password})
    .then((res)=>{
      setloading(false)
      if(res.status == 'ok'){
        new Promise((resolve, reject) => {
          sessionStorage.setItem(
            'user',
            JSON.stringify(res.data)
          )
          resolve()
        })
        .then( () => window.location.assign("/home") )
      }else{
        seterror({
          title:res.status ,
          message:res.message
        })
        setTimeout(() => {
          seterror(false)
        }, 3000);
      }
    })
    .catch(err => {
      console.log(err)
      setloading(false)
    } )
  }else{
    seterror({
      title:"Invalid Fields" ,
      message:"Make sure to enter all details"
    })
    setTimeout(() => {
      seterror(false)
    }, 3000);
  }
}
  return (
    <main className='login_bg'>
    {
      loading && <Loader />
    }
    {
      error && <InfoModal header={error.title}  message={error.message}/>
    }
    <div className="form">
      <Typography
      text='Welcome Back!'
      heading='h2'
      lighter
      />
      <div>Enter your email and password to login</div>
      <div className="margin-top-30">
      <input id='email' className='input full-width lighter standard ' type="Email" placeholder='Email'/>
      <p>
        <input id='password' className='input full-width lighter standard ' type="password" placeholder='Password' />
      </p>
     <div className="margin-top-40">
      <Button
      text="Login Accoun"
      bg='primary'
      fullWidth
      onClick={Submit}
      />
     </div>
      </div>
    </div>
    </main>
  )
}
