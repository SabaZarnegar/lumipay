import React from 'react'
import { Typography, Button, Space, Layout } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import PageHeader from './PageHeader'
import LumipayImg from '../LumipayImg'



const { Header, Content } = Layout;

export default function TodaySalesPage() {

    const navigate = useNavigate();

    return (
        <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>


            <Header style={{ background: "#fff", padding: "0 24px", height: "auto", lineHeight: "normal", display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "10px 0" }}>
                    <ArrowRightOutlined onClick={() => navigate(-1)} />

                    <LumipayImg width={50} height={50} />

                    {/* گذاشتیم که دو تا متن اصلیو ستونی قرار بده */}
                    <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>


                        <PageHeader title="پرداخت حضوری" style={{ margin: 0, padding: 0 }} />


                        <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                            فروشگاه دیجیتال آرمان
                        </Typography.Text>

                    </div>

                </div>
            </Header>
        </Layout>

        
    )
}



