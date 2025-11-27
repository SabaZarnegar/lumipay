import React from 'react'
import { Form, Input, Button } from 'antd'
import { PhoneOutlined } from "@ant-design/icons";

export default function Login() {
  return (
    <div className='container'>
      <Form className='my-form' layout="vertical">

        <div>
          <img className='img' src='/ax.png' alt='logo' />
          <p className='font'>ورود به پنل LumiPay</p>
          <p style={{ textAlign: "center" }}>پنل مدیریت پذیرندگان</p>
        </div>

        <Form.Item className='my-label' label='شماره موبایل*' name='phone'>
          <Input placeholder='09xxxxxxxx' prefix={<PhoneOutlined style={{ color: "gray" }} />} className='my-input' />
          <p style={{ color: "gray" }}>شماره موبایل ثبت شده در سیستم را وارد نمایید</p>
        </Form.Item>

        <Form.Item className='my-label' label='رمز عبور*' name='password' >
          <Input.Password placeholder='حداقل 6 کاراکتر' />
        </Form.Item>

        <Form.Item className='my-label' label='رمز عبور*' name='password' >
        <Button className='Button' type="primary" block>ورود به پنل</Button>
        <p className='p-button'>رمز عبور خود را فراموش کرده اید؟</p>
        </Form.Item>


      </Form>
    </div>
  )
}
