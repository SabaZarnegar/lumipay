import { Form, Input, Flex, Statistic, message } from "antd";
import FormButton from './FormButton';
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function OTP() {
    const location = useLocation();
    const { phone, role, otp } = location.state || {};
    const navigate = useNavigate();
    const [enteredOtp, setEnteredOtp] = useState("");
    const [canResend, setcanResend] = useState(false);
    const [deadline, setdeadline] = useState(Date.now() + 1000 * 60 * 2)


   function handleVerifyOtp() {
        if (enteredOtp === String(otp)) {
            message.success("ورود موفق 🎉");

            console.log("رول دریافت شده:", role);
            // تبدیل به حروف کوچک برای مقایسه دقیق
            const userRole = role?.toLowerCase();

            if (userRole === "owner") {
                navigate("/OwnerRollPage");
            } else if (userRole === "finance") {
                navigate("/FinanceRollPage");
            } else if (userRole === "cashier") {
                navigate("/CashierRollPage");
            } else {
                message.error("نقش کاربری نامعتبر است");
                navigate("/Login");
            }
        } else {
            message.error("کد تایید اشتباه است ❌");
        }
    }

        function HandleBack() {
            navigate("/Login");
        }

        return (
            <div className='container'>
                <Form className='my-form' layout="vertical">
                    <img src={`${process.env.PUBLIC_URL}/ax.png`} alt="logo" className='img' />

                    <p className='p-padding'>کد تایید ارسال شد</p>
                    <p className='color'>کد 4 یا 6 رقمی برای شماره <b>{phone}</b> ارسال شد</p>
                    <p className='color'>نقش : {role}</p>

                    <p className='p-padding' style={{ fontSize: 16 }}>
                        کد تایید را وارد کنید
                    </p>

                    {/* OTP رسمی Ant Design */}
                    <Flex justify="center">
                        <Input.OTP
                            length={6}
                            value={enteredOtp}
                            onChange={setEnteredOtp}
                            autoFocus
                            style={{ direction: 'ltr' }}
                        />
                    </Flex>

                    <p className='p-padding color'>
                        <b> کد را دریافت نکردید؟ </b>
                        {canResend ?
                            (<span
                                className="hover-text" style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setcanResend(false);
                                    setdeadline(Date.now() + 1000 * 60 * 1);
                                }} > ارسال مجدد کد(3 بار مانده)</span>)
                            :
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                ارسال مجدد کد (
                                <Statistic.Countdown
                                    value={deadline}
                                    onFinish={() => setcanResend(true)}
                                    format="mm:ss"
                                    valueStyle={{ fontSize: '13px', color: 'gray', lineHeight: 1 }}
                                />
                                مانده)
                            </span>
                        }
                    </p>

                    <Form.Item>
                        <FormButton
                            text='تایید و ورود'
                            onClick={handleVerifyOtp}
                            disabled={enteredOtp.length !== String(otp)?.length}
                        />

                        <p
                            className="hover-text"
                            style={{ marginTop: '5%', color: 'gray' }}
                            onClick={HandleBack}
                        >
                            بازگشت به صفحه ورود
                        </p>
                    </Form.Item>
                </Form>
            </div>
        );
    }
