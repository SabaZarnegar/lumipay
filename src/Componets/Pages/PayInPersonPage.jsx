import React from 'react'
import { Typography, Button, Space, Layout, Form, Input } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import PageHeader from './PageHeader'
import LumipayImg from '../LumipayImg'
import FormButton from '../FormButton';



const { Header, Content } = Layout;

export default function PayInPersonPage() {
    const navigate = useNavigate();
    return (
        <>
            <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
                <Header className='header-style'>
                    <div className='header-title-style'>
                        <ArrowRightOutlined onClick={() => navigate(-1)} />
                        <LumipayImg width={50} height={50} />
                        
                        {/* گذاشتیم که دو تا متن اصلیو ستونی قرار بده */}
                        <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>
                            <PageHeader title="پرداخت حضوری"   showUserInfo={false} style={{ margin: 0, padding: 10 }} />
                            <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                                فروشگاه دیجیتال آرمان
                            </Typography.Text>
                        </div>

                    </div>
                </Header>
                <div className='sales-container'>
                    <Form className='sales-form' layout="vertical">
                        <p className='sales-header'><b>شناسایی مشتری و استعلام اعتبار</b></p>
                        <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px"}}>
                               برای شروع پرداخت، شماره موبایل و کد ملی مشتری را وارد کنید
                            </Typography.Text>
                        <Form.Item label="شماره موبایل مشتری*" name='phone'>
                            <Input
                                placeholder='09xxxxxxxxx'
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item label="کدملی مشتری *" name='password'>
                            <Input.Password
                                placeholder='09xxxxxxxxx'
                                style={{ width: "100%" }}
                            />
                        </Form.Item>

                        <FormButton text='استعلام اعتبار' />

                    </Form>
                </div>
            </Layout>

        </>


    )
}



