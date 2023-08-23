"use client"
import React from 'react'
import List from 'funuicss/component/List'
import ListItem from 'funuicss/component/ListItem'
import Button from 'funuicss/component/Button'
import Icon from 'funuicss/component/Icon'
import Link from 'next/link'
import { logOut } from '@/Functions/Functions'

export default function AdminSideBar({active}) {
  return (
    <div className='admin_sidebar'>
        <List>
      <ListItem>
          <Link href='/admin'>
          <Button rounded fullWidth startIcon={<Icon icon='bx bx-chart'/>} funcss={`${active == 'dashboard' ? 'card' : ''} text-left ${ "lighter"} sideBarLink`}>
          Dashboard
          </Button>
          </Link>
         </ListItem>
      <ListItem>
          <Link href='/staffs'>
          <Button rounded fullWidth startIcon={<Icon icon='bx bx-user'/>} funcss={`${active == 'staff' ? 'card' : ''} text-left ${ "lighter"} sideBarLink`}>
          Staff
          </Button>
          </Link>
         </ListItem>
      <ListItem funcss='margin-top-100'>
          <Button onClick={()=>logOut()} rounded fullWidth startIcon={<Icon icon='bx bx-exit'/>} funcss={`text-left ${ "lighter"} card`}>
          Sign Out
          </Button>
         </ListItem>
         </List>
    </div>
  )
}
