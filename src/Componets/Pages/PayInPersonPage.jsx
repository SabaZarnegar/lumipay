import { Typography, Button, Space, Layout, Form, Input, message } from "antd";
import { ArrowRightOutlined, SearchOutlined, UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PageHeader from './PageHeader'
import LumipayImg from '../LumipayImg'
import FormButton from '../FormButton';
import AlertHead from './AlertHead'


const { Header, Content } = Layout;

export default function PayInPersonPage() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [form] = Form.useForm();


    function handlesubmit(values) {
        setLoading(true);

        fetch('https://69340e624090fe3bf01ec632.mockapi.io/customer').
            then(res => res.json()).
            then(data => {
                const foundcustomer = data.find(item =>
                    item.phone === values.phone &&
                    item.nationalCode === values.nationalCode
                );

                if (foundcustomer) {
                    setCustomer(foundcustomer);
                    message.success('اطلاعات مشتری بازیابی شد');
                    setDisabled(true);

                } else {
                    setCustomer(null);
                    message.error('مشتری با این مشخصات یافت نشد');
                }

            })
            .finally(() => setLoading(false));
    }

    function handleNewCreditCheck() {
        setCustomer(null);
        setDisabled(false);
        form.resetFields();//فیلد هارو خالی میکنه
    }

    return (
        <>
            <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
                <Header className='header-style'>
                    <div className='header-title-style'>
                        <ArrowRightOutlined onClick={() => navigate(-1)} />
                        <LumipayImg width={50} height={50} />

                        {/* گذاشتیم که دو تا متن اصلیو ستونی قرار بده */}
                        <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>
                            <PageHeader title="پرداخت حضوری" showUserInfo={false} style={{ margin: 0, padding: 10 }} />
                            <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                                فروشگاه دیجیتال آرمان
                            </Typography.Text>
                        </div>

                    </div>
                </Header>
                <div className='sales-container'>
                    <Form className='sales-form' layout="vertical" onFinish={handlesubmit}>
                        <p className='sales-header'><b>
                            <SearchOutlined />
                            شناسایی مشتری و استعلام اعتبار</b></p>
                        <Typography.Text type="secondary" style={{ fontSize: "12px", display: "block", textAlign: "right", paddingBottom: "10px" }}>
                            برای شروع پرداخت، شماره موبایل و کد ملی مشتری را وارد کنید
                        </Typography.Text>
                        <Form.Item label={
                            <>
                                شماره موبایل مشتری
                                <span style={{ color: "red", marginRight: 4 }}>*</span>
                            </>
                        } name='phone'>
                            <Input
                                disabled={disabled}
                                className='input-color'
                                placeholder='09xxxxxxxxx'
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item label={
                            <>
                                کدملی مشتری
                                <span style={{ color: "red", marginRight: 4 }}>*</span>
                            </>
                        } name='nationalCode'>
                            <Input
                                disabled={disabled}
                                className='input-color'
                                placeholder='xxxxxxxxx'
                                style={{ width: "100%" }}
                            />
                        </Form.Item>

                        {customer && (
                            <>
                                <div className="expanded-form">
                                    <div className='input-color' style={{ display: 'flex', justifyContent: 'space-between' }}>

                                        <span>
                                            <UserOutlined />
                                            {customer.name}</span>
                                        <span>
                                            <b style={{ color: customer.isActive === "true" ? "green" : "red" }}>
                                                {customer.isActive === "true" ? " فعال" :
                                                    customer.isActive === "suspended" ? " مسدود" : " غیرفعال"}

                                            </b>
                                        </span>
                                    </div>
                                    <div className="credit">
                                        سقف اعتبار: <p >{customer.credit} تومان</p>
                                    </div>
                                </div>
                                {customer.isActive !== "suspended" && (
                                    <FormButton className='Credit-check' text='ادامه به مرحله بعد' />
                                )}

                                {customer.isActive === "suspended" && (
                                    <AlertHead
                                        type="error" 
                                        icon={<CloseCircleOutlined style={{ color: '#f5222d' }} />}
                                        message={<b style={{ color: '#820014' ,fontSize : 'small'}}>مشتری مسدود:</b>}
                                        description={
                                            <span style={{ color: '#820014' ,fontSize : 'small'}}>
                                                این مشتری امکان خرید اعتباری ندارد. لطفاً روش پرداخت دیگری را پیشنهاد دهید.
                                            </span>
                                        }
                                        style={{
                                            backgroundColor: '#fff1f0',
                                            border: '1px solid #ffa39e',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            marginTop: '10px'
                                        }}
                                    />
                                )}

                                <FormButton className='new-Credit-check' text='استعلام مشتری جدید' onClick={handleNewCreditCheck} />
                            </>
                        )}

                        {!customer && <FormButton className='Credit-check' text='استعلام اعتبار' htmlType="submit" />}


                    </Form>
                </div>
            </Layout>

        </>


    )
}



