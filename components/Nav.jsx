'use client'
import React from 'react'
import {isOnline, logOut} from '../Functions/Functions'
import Link from 'next/link'
import {useState , useEffect} from 'react'
export default function Nav() {
const [me, setme] = useState("")
useEffect(() => {
isOnline()
.then(data=>{
  setme(data)
})
}, [])

// useEffect(() => {
//   const drop = document.querySelector(".myBtn")
//   window.addEventListener("click" ,(e)=>{
//     if(e.target != drop){
//       setdrop1(false)
//     }else{
//         setdrop1(!drop1)
//     }
//   })
// },[])

// useEffect(() => {
//   window.addEventListener('resize' , ()=>{
//     if(screen.width > 800){
//       setsidebar("")
//     }
//   })
// }, [])




  if(me){
    return (
      <div>
        <div className="navBar">
          <div>Staff Attendance</div>
          <div>
          <div className="row-flex gap">
          <div className="width-40 height-40 circle lighter central text-small">
              {me.username.slice(0 , 1)} {" "} {me.username.slice(me.username.indexOf(' ') , me.username.indexOf(' ') + 2)}
            </div>
            <div>
              <div>{me.username}</div>
              <div className='text-small'>{me.department ? me.department : me.role}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }else{
    return ''
  }

}
