'use client'
import Nav from '@/components/Nav'
import React from 'react'
import  Typography  from 'funuicss/component/Typography'
import IconicInput from 'funuicss/component/IconicInput'
import Icon from 'funuicss/component/Icon'
import Button from "funuicss/component/Button"
import  RowFlex  from 'funuicss/component/RowFlex';
import List from 'funuicss/component/List'
import ListItem from 'funuicss/component/ListItem'
import Link from 'next/link'
export default function Register() {
  return (
    <div>
        <Nav />

        <div className="">
          <div className="admin_bar">
          <List>
            <ListItem funcss="h6">Admin</ListItem>
            <ListItem funcss='margin-top-10'>
              <Link href="/">
              <> 
              <i className="bx bx-user" /> Dashboard
              </>
              </Link>
            </ListItem>
            <ListItem funcss='margin-top-10'>
              <Link href="/">
              <> 
              <i className="bx bx-user" /> Attendances
              </>
              </Link>
            </ListItem>
            <ListItem funcss='margin-top-10'>
              <Link href="/">
              <> 
              <i className="bx bx-user" /> Staffs
              </>
              </Link>
            </ListItem>
            <ListItem funcss='margin-top-10'>
              <Link href="/">
              <> 
              <i className="bx bx-user" /> Create Staff
              </>
              </Link>
            </ListItem>
            <ListItem funcss='margin-top-20'>
              <Button funcss="card text-left" fullWidth rounded> 
              <i className="bx bx-user" /> Sign Out
              </Button>
            </ListItem>

            </List>

          </div>
          <div className="admin_content">

    <div className="form">
      <Typography
      text='Create Account'
      heading='h2'
      lighter
      />
      <div>Enter all the details correctly to create an account.</div>
      <div className="margin-top-30">
      <input className='input full-width lighter standard' type="email" placeholder='Staff Id' />
        <RowFlex gap='1rem' funcss='section'>
        <input className='input full-width lighter standard' type="text" placeholder='Full Name'/>
        <input className='input full-width lighter standard' type="email" placeholder='Email' />
        </RowFlex>
        <RowFlex gap='1rem' funcss='section'>
        <input className='input full-width lighter standard' type="text" placeholder='Contact'/>
        <input className='input full-width lighter standard' type="address" placeholder='Address' />
        </RowFlex>
        <RowFlex gap='1rem' funcss='section'>
        <input className='input full-width lighter standard' type="text" placeholder='Department'/>
        <select  className='input full-width lighter standard' name="" id="">
          <option value="">Role</option>
          <option value="staff">staff</option>
          <option value="admin">admin</option>
        </select>
        </RowFlex>
        <RowFlex gap='1rem' funcss='section'>
        <select  className='input full-width lighter standard' name="" id="">
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
        <select  className='input full-width lighter standard' name="" id="">
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
      <p>
        <input className='input full-width lighter standard' type="password" placeholder='Password' />
      </p>
     <div className="margin-top-40">
      <Button
      text="Login Accoun"
      bg='primary'
      fullWidth
      />
     </div>
      </div>
    </div>
    </div>

        </div>
        
      
    </div>
  )
}
