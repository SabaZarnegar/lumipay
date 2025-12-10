import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { PhoneOutlined } from "@ant-design/icons";
import Formbutton from './Formbutton';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [isDisabled, setisDisabled] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (phone.trim() !== "" && password.trim().length >= 6) {
            setisDisabled(false);
        } else {
            setisDisabled(true);
        }
    }, [password, phone]);

    function handleLogin() {
      fetch("https://69340e624090fe3bf01ec632.mockapi.io/login")
            .then(res => res.json())
            .then(data => {
                const user = data.find(
                    (u) => u.phone === phone && u.password === password
                );

                if (user) {
                    console.log("نقش:", user.roll);
                    navigate("/OTP",{ state: { phone: user.phone, role: user.roll}});
                } else {
                    alert("شماره موبایل یا رمز عبور اشتباه است");
                }
            })
            .catch((err) => {
                console.error("خطا:", err);
                alert("مشکل در ارتباط با سرور");
            });
    }

    return (
        <div className='container'>
            <Form className='my-form' layout="vertical">
                <img src={`${process.env.PUBLIC_URL}/ax.png`} alt="logo" className='img' />

                <p className='p-first'><b>ورود به پنل LumiPay</b></p>
                <p style={{ color: 'gray' }}><b>پنل مدیریت پذیرندگان</b></p>

                <Form.Item label="*شماره موبایل" name='phone'>
                    <Input
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        placeholder='09xxxxxxxxx'
                        prefix={<PhoneOutlined style={{ color: "gray" }} />}
                        style={{ width: "100%" }}
                    />
                </Form.Item>
                <p className='text'>شماره موبایل ثبت شده در سیستم را وارد نمایید</p>

                <Form.Item label="*رمز عبور" name='password'>
                    <Input.Password
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder='حداقل 6 کاراکتر'
                        style={{ width: "100%" }}
                    />
                </Form.Item>

                <Formbutton disabled={isDisabled} text='ورود به پنل' onClick={handleLogin} />
                <p style={{ marginTop: '5%', color: 'gray' }}>رمز عبور خود را فراموش کرده‌اید؟</p>
            </Form>
        </div>
    );
}
