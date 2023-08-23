"use client"
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/AdminSideBar';
import  Typography  from 'funuicss/component/Typography';
import  RowFlex  from 'funuicss/component/RowFlex';
import {FunGet , FunRequest} from 'funuicss/js/Fun'
import { EndPoint } from '@/Functions/Functions';
import Loader from '@/components/Loader';
import Modal from 'funuicss/component/Modal'
import ModalHeader from 'funuicss/component/ModalHeader'
import CloseModal from 'funuicss/component/CloseModal'
import ModalContent from 'funuicss/component/ModalContent'
import ModalAction from 'funuicss/component/ModalAction'
import Icon from 'funuicss/component/Icon'
import Div from 'funuicss/component/Div'
import Button from 'funuicss/component/Button'
import InfoModal from '@/components/Modals/InfoModal';    

export default function Staffs() {
  const [search, setsearch] = useState('')
  const [docs , set_docs] = useState('')
  const [create_staff , setcreate_staff] = useState(false)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')

  const Submit = () => {
    setcreate_staff(false)
   const email = FunGet.val("#email")
   const password = FunGet.val("#password")
   const username = FunGet.val("#username")
   const contact = FunGet.val("#contact")
   const staff_id = FunGet.val("#staff_id")
   const department = FunGet.val("#department")
   const address = FunGet.val("#address")
   const role = FunGet.val("#role")
   const closing_time = FunGet.val("#closing_time")
   const reporting_time = FunGet.val("#reporting_time")
    let doc 

    doc = {
        username,
        contact,
        staff_id,
        department,
        address,
        email,
        password,
        role,
        reporting_time,
        closing_time
      }
console.log(doc)
      if(
        email &&
        username &&
        password &&
        contact &&
        staff_id &&
        department &&
        address &&
        role &&
        closing_time &&
        reporting_time 
      ){

        setloading(true)
        FunRequest.post(EndPoint + '/staffs' , doc)
        .then( (res) => {
            setloading(false)
            set_docs('')
            if(res.status == 'ok'){
                set_docs('')
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
      }else{
        setloading(false)
        seterror({
            title:"Invalid Fields" ,
            message:"Make sure to enter all fields"
          })
          setTimeout(() => {
            seterror(false)
          }, 3000);
      }
  }

  // yearly
  useEffect(() => {
    if(!docs){
        setloading(true)
      let url = EndPoint + '/all/staffs';
      FunRequest.get(`${url}`)
      .then( (res) => {
        setloading(false)
        set_docs(res.data)
      } )
      .catch( err => {
        setloading(false)
        console.log(err)
       } )
    }
  })


  
  return (
    <div>
                  {
      loading && <Loader />
    }
    {
      error && <InfoModal header={error.title}  message={error.message}/>
    }
<Modal 
animation="ScaleUp" 
duration={0.4} 
open={create_staff}
backdrop
maxWidth="600px"
>
<ModalHeader>
    New Staff
<CloseModal  onClick={()=>setcreate_staff(false)}/>
</ModalHeader>
<ModalContent funcss="padding">
 <div className='width-500-max center fit'>
 <RowFlex gap="2rem">
 <input id='email' className='input full-width section' type="email" placeholder='Email'/>
 <input id='username' className='input full-width section' type="text" placeholder='Full Name'/>
    </RowFlex>
 <RowFlex gap="2rem">
 <input id='contact' className='input full-width section' type="number" placeholder='Contact'/>
 <input id='staff_id' className='input full-width section' type="text" placeholder='Staff ID'/>
    </RowFlex>
 <RowFlex gap="2rem">
 <input id='department' className='input full-width section' type="text" placeholder='Department'/>
 <input id='address' className='input full-width section' type="text" placeholder='Address'/>
    </RowFlex>
 <RowFlex gap="2rem">
 <select  id='reporting_time' className='input full-width section'>
          <option value="">Reporting Time</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select>
 <select  id='closing_time' className='input full-width section'>
          <option value="">Closing Time</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
        </select>
    </RowFlex>
 <RowFlex gap="2rem">
 <select  id='role' className='input full-width section'>
          <option value="">Role</option>
          <option value="staff">staff</option>
          <option value="admin">Admin</option>

        </select>
        <input id='password' className='input full-width section' type="password" placeholder='Password'/>
    </RowFlex>
 <RowFlex gap="2rem">

    </RowFlex>
</div>
</ModalContent>
<ModalAction>
<Button text="Submit" bg="primary" onClick={Submit}/>
</ModalAction>
</Modal>
      <Nav />

      <AdminSideBar active={'staff'} />
      <div className="admin_content">
        <div className="container">
        <Typography
        text="Dashboard"
        lighter
        heading='h2'
        />
        <div>manage and view data relating to all attendances</div>
        
       
          <div className="margin-top-50">
            <div className="t_card">
              <div className="padding">
               <RowFlex justify='space-between'>
               <input type="text" placeholder='Staff Id | Name' className='input' onChange={ (e) => (setsearch(e.target.value)) }/>

               <div className='row-flex' style={{gap:'1rem'}}>
                <button className="secondary  button"   onClick={()=>setcreate_staff(true)}>
                  Create Staff
                </button>
                <div className='h2'>
               { docs &&
                docs.filter( doc => {
                    if(search){
                        if(
                            search.toString().trim().toLowerCase().includes(doc.staff_id.toString().trim().toLowerCase().slice(0 , search.length))
                            ||
                            search.toString().trim().toLowerCase().includes(doc.username.toString().trim().toLowerCase().slice(0 , search.length))
                            ){
                                return doc
                        }
                    }else{
                        return docs
                    }
                } ).length
                }
                </div>
               </div>
          
               </RowFlex>
              </div>
            <table className='table stripped text-small'>
              <thead>
                <th>Staff Id</th>
                <th>Full Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Reporting Time</th>
                <th>Closing Time</th>
              </thead>
              <tbody>
              { docs &&
                docs.filter( doc => {
                    if(search){
                        if(
                            search.toString().trim().toLowerCase().includes(doc.staff_id.toString().trim().toLowerCase().slice(0 , search.length))
                            ||
                            search.toString().trim().toLowerCase().includes(doc.username.toString().trim().toLowerCase().slice(0 , search.length))
                            ){
                                return doc
                        }
                    }else{
                        return docs
                    }
                } )
                .map(res => (
<tr key={res.id}>
    <td>{res.staff_id}</td>
    <td>{res.username}</td>
    <td>{res.department}</td>
    <td>{res.role}</td>
    <td>{res.contact}</td>
    <td>{res.reporting_time}</td>
    <td>{res.closing_time}</td>
</tr>
                ) )
              }
              </tbody>

            </table>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}
