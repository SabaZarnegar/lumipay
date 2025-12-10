import { Form, Button } from "antd";
import Formbutton from './Formbutton'
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


export default function OTP() {

const location = useLocation();
const role = location.state?.role;
const phone = location.state?.phone;

    return (
        <div className='container'>
            <Form className='my-form' layout="vertical" >
                <img src={`${process.env.PUBLIC_URL}/ax.png`} alt="logo" className='img' />
                <p className='p-padding' >کد تایید ارسال شد</p>
                <p className='color' >کد 4 یا 6 رقمی برای شماره <b>{phone}</b> ارسال شد</p>
                <p className='color' >نقش : {role}</p>
                <p className='p-padding' style={{ fontSize: 16 }}>کد تایید را وارد کنید</p>
                <div className="otp-inputs" >
                    {[...Array(6)].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength="1"
                            className="otp-box"
                        />
                    ))}
                </div>
                <p className='p-padding color' >کد را دریافت نکردید؟ ارسال مجدد (3 بار مانده)</p>
                <Form.Item >
                    <Formbutton text='تایید و ورود' />
                    <p style={{ marginTop: '5%', color: 'gray' }}>بازگشت به صفحه ورود</p>
                </Form.Item>
            </Form>
        </div>
    )
}

