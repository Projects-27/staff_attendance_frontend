"use client"
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/AdminSideBar';
import  Typography  from 'funuicss/component/Typography';
import  RowFlex  from 'funuicss/component/RowFlex';
import { FunRequest } from 'funuicss/js/Fun';
import { EndPoint } from '@/Functions/Functions';

export default function Admin() {
  const [docs, setdocs] = useState('')
  const [filter, setfilter] = useState('today')
  const [today_docs , set_today_docs] = useState('')
  const [this_month_docs , set_this_month_docs] = useState('')
  const [this_year_docs , set_this_year_docs] = useState('')

  const [year , setyear] = useState('')
  const [month ,setmonth] = useState('')
  const [day ,setday] = useState('')

  // yearly
  useEffect(() => {
    if(!this_year_docs){
      let this_year = year ? year : new Date().getFullYear()
      let url = EndPoint + '/attendances/yearly/' + this_year;
      FunRequest.get(`${url}`)
      .then( (res) => {
        set_this_year_docs(res.data)
      } )
      .catch( err => (console.log(err)) )
    }
  })
  // monthly
  useEffect(() => {
    if(!this_month_docs && this_year_docs){
      var locale = "en-us";
      var today = new Date();
      var day = today.getDate();
      var longMonth = today.toLocaleString(locale, { month: "long" });
      
      let this_year = year ? year : new Date().getFullYear()
      let this_month = month ? month : longMonth.slice(0 ,3)

      let url = EndPoint + '/attendances/monthly/' + this_month + "/" + this_year;
      FunRequest.get(`${url}`)
      .then( (res) => {
        set_this_month_docs(res.data)
      } )
      .catch( err => (console.log(err)) )
    }
  })
  // daily
  useEffect(() => {
    if(!this_month_docs && this_year_docs){
      var locale = "en-us";
      var today = new Date();
      var day = today.getDate();
      var longMonth = today.getMonth() + 1;
      
      let this_year = year ? year : today.getFullYear()
      let this_month = month ? month : longMonth.toString().length == 1 ? `0${longMonth}` : longMonth.toString().length
      let this_day = day ? day : today.getDate().length == 1 ? `0${today.getDate()}` : today.getDate()

      let url = EndPoint + '/attendances/daily/' + `${this_year}-${this_month}-${this_day}`;
      FunRequest.get(`${url}`)
      .then( (res) => {
        set_today_docs(res.data)
      } )
      .catch( err => (console.log(err)) )
    }
  })


  
  return (
    <div>
      <Nav />
      <AdminSideBar />
      <div className="admin_content">
        <div className="container">
        <Typography
        text="Dashboard"
        lighter
        heading='h2'
        />
        <div>manage and view data relating to all attendances</div>
        <div className="margin-top-40">
          <div className="row">
            <div className="col sm-12 md-4 lg-4 padding">
              <select name="" className='input full-width' id="">
                <option value="">All days</option>
                <option value="today">Today</option>
                <option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
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
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>

              </select>
              <div className="stats_card">
                <div className="text-small">Today</div>
                <div className="margin-top-10">
                <Typography
        text={today_docs ? today_docs.length : '...'}
        lighter
        heading='h2'
        />
                </div>
              </div>
            </div>
            <div className="col sm-12 md-4 lg-4 padding">
            <select name="" className='input full-width' id="">
                <option value="">All Months</option>
                <option value="currentmonth">This Month</option>
                <option value="Jan">Jan</option>
<option value="Feb">Feb</option>
<option value="Mar">Mar</option>
<option value="Apr">Apr</option>
<option value="May">May</option>
<option value="Jun">Jun</option>
<option value="Jul">Jul</option>
<option value="Aug">Aug</option>
<option value="Sep">Sep</option>
<option value="Oct">Oct</option>
<option value="Nov">Nov</option>
<option value="Dec">Dec</option>


              </select>
              <div className="stats_card">
                <div className="text-small">Month</div>
                <div className="margin-top-10">
                <Typography
        text={this_month_docs ? this_month_docs.length : '...'}
        lighter
        heading='h2'
        />
                </div>
              </div>
            </div>
            <div className="col sm-12 md-4 lg-4 padding">
            <input type='number' className='input full-width' id=""
             min="1900" max="5099" step="1" placeholder="Enter a year" required
            />
              <div className="stats_card">
                <div className="text-small">Year</div>
                <div className="margin-top-10">
                <Typography
        text={this_year_docs ? this_year_docs.length : '...'}
        lighter
        heading='h2'
        />
                </div>
              </div>
            </div>
          </div>
          <div className="margin-top-50">
            <div className="t_card">
              <div className="padding">
               <RowFlex justify='space-between'>
               <input type="text" placeholder='Staff Id | Name' className='input' />

               <div>
                <button className="primary roundBtn button">
                  Print data
                </button>
               </div>
               </RowFlex>
              </div>
            <table className='table stripped text-small'>
              <thead>
                <th>Staff Id</th>
                <th>Full Name</th>
                <th>Department</th>
                <th>Date</th>
                <th>Reporting Time</th>
                <th>Closing Time</th>
              </thead>
              <tbody>
              { today_docs &&
                today_docs.map(res => (
<tr key={res.id}>
    <td>{res.staff.staff_id}</td>
    <td>{res.staff.username}</td>
    <td>{res.staff.staff_id}</td>
    <td>{res.date.split('-').reverse().join('-')}</td>
    <td>{res.reporting_time}</td>
    <td>{res.time_staff_closes}</td>
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
    </div>
  )
}
