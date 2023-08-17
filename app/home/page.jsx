"use client";
import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import { FunRequest } from 'funuicss/js/Fun';
import { EndPoint, isOnline, logOut } from '@/Functions/Functions';
import SuccessModal from './../../components/Modals/SuccessModal';
import InfoModal from '@/components/Modals/InfoModal';
import Loader from '@/components/Loader';
export default function Page() {
    const [time, settime] = useState('')
    const [is_reported, setis_reported] = useState('')
    const [me, setme] = useState('')
    const [loading, setloading] = useState(false)
    const [modal, setmodal] = useState('')
    useEffect(() => {
     if(!me){
        isOnline()
        .then(res => (setme(res)) )
     }
    })
    
    useEffect(() => {
        setTimeout(() => {
            const init  = new Date()
            let hour = init.getHours().toString();
            let minutes  = init.getMinutes().toString()
            let seconds  = init.getSeconds().toString()
    
            settime(`${hour} : ${minutes} : ${seconds}`)
        }, 1000);    
    })
    
    useEffect(() => {
    if(me && is_reported == ''){
        FunRequest.get(EndPoint + '/is/staff/in/' + me.staff_id)
        .then((res) => setis_reported(res.res) )
        .catch(err => console.log(err) )
    }
    })
    
    const Submit = () => {
        if(is_reported){
            setloading(true)
            FunRequest.patch(EndPoint + '/staff/closing/' + me.staff_id , {'staff_closing_time' : me.closing_time})
            .then( (res) => {
                console.log(res)
                setloading(false)
                setmodal({
                    'type' : res.status == 'ok' ? 'success' : 'info' ,
                    'header' : res.status == 'ok' ? 'Submitted Successfully' : "Error!",
                    'message': res.status == 'ok' ?  `Have a nice day!` : res.message
                })
                setTimeout( () => ( res.status == 'ok' ? logOut() : ''),3000 )
            } )
            .catch( (err) => {
                setmodal({'type' : 'info' , 'header':'Error' , 'message' : JSON.stringify(err)})
                setTimeout( () => (setmodal(false)),4000 );
                setloading(false)
            } )
        }else{
            setloading(true)
            FunRequest.post(EndPoint + '/new/attendance' , {'staff' : me})
            .then( (res) => {
                setloading(false)
                setmodal({
                    'type' : res.status == 'ok' ? 'success' : 'info' ,
                    'header' : res.status == 'ok' ? 'Submitted Successfully' : "Error!",
                    'message': res.status == 'ok' ?  `Your attendance has been submitted successfully` : res.message
                })
                setTimeout( () => ( res.status == 'ok' ? logOut() : ''),3000 )
            } )
            .catch( (err) => {
                setmodal({'type' : 'info' , 'header':'Error' , 'message' : JSON.stringify(err)})
                setTimeout( () => (setmodal(false)),4000 );
                setloading(false)
            } )
        }
    }
if(me){
    return (
        <div>
         {
          modal &&  modal.type == 'success' &&
          <SuccessModal header={modal.header} message={modal.message} />
         }
         {
          modal &&  modal.type == 'info' &&
          <InfoModal header={modal.header} message={modal.message} />
         }
         {
            loading && <Loader />
         }
            <Nav />
            <div className="padding-top-100">
              <div className="container">
              <div className="h1">
                  {
                    is_reported ? "Good Bye!  " : "  Welcome Back!  "
                  }
                </div>
                <div>
                    {me.username}
                </div>
                <div className="row">
                    <div className="col sm-12 md-4 lg-4 padding-20">
                        <img src={is_reported ? '/time_management.svg' : '/no_time.svg'} className='fit'/>
                    </div>
                    <div className="col sm-12 md-8 lg-8 padding-20">
                        <div className="taskCard">
                           <div className="row-flex space-between">
                            <div>
                                <div>Date</div>
                                <div className='h4'>{new Date().getDate()} {" - "} {new Date().getMonth()} {" - "} {new Date().getFullYear()} </div>
                            </div>
                            <div>
                                <div>Time</div>
                                <div className='h4'>{time} </div>
                            </div>
                           </div>
                           <div className="margin-top-30">
                            <button className={`button padding-20 full-width roundBtn ${is_reported ? 'danger' : 'success'}`} onClick={Submit}>
                                {is_reported ? 'CLICK TO CLOSE' : 'CLICK TO REPORT'}
                            </button>
                           </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      )
}else{
    return ""
}
}
