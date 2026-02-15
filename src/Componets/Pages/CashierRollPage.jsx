import React from 'react'
import { Layout, Row, Typography, Divider } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import PageHeader from './PageHeader'
import WelcomeHead from './WelcomeHead'
import AlertHead from './AlertHead'
import TodaySalesCard from "../Cards/TodaySalesCard"
import PayInPersonCard from "../Cards/PayInPersonCard";
import TransactionHistoryCard from "../Cards/TransactionHistoryCard";
import MerchantProfile from "../Cards/MerchantProfile";
import LegalNotice from "./LegalNotice";


const { Header, Content } = Layout;

export default function CashierRollPage() {

    return (
        <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>

            {/* Header */}
            <Header style={{ background: "#fff", padding: "0 24px" }}>
                <PageHeader title=" فروشگاه دیجیتال آرمان | LumiPay" />
            </Header>


            {/* Content */}
            <Content style={{ padding: 24 }}>

                <WelcomeHead />
                <Divider />
                <AlertHead
                    icon={<WarningOutlined />}
                    action="تکمیل اکنون"
                    message="پروفایل ناقص:"
                    description="برای ادامه تسویه و برداشت وجه، لازم است پروفایل خود را تکمیل کنید. پروفایل شما 75٪ تکمیل شده است." />

                {/* Cards */}
                <Row gutter={[24, 24]}>
                    <TodaySalesCard />
                </Row>


                {/* Quick Access Cards */}
                <div style={{ marginTop: 24, marginBottom: 200 }}>

                    <Typography.Text strong style={{ fontSize: 16 }}>
                        دسترسی سریع
                    </Typography.Text>

                    <Row gutter={[16, 16]} style={{ marginTop: 16, marginBottom: 16 }}>
                        <PayInPersonCard />
                        <TransactionHistoryCard />
                        <MerchantProfile />
                    </Row>
                    <AlertHead
                        message="محدودیت دسترسی:"
                        description="با نقش Cashier، شما به اطلاعات مالی حساس (موجودی، کارمزد، تسویه) دسترسی ندارید. برای دسترسی کامل با مدیر سیستم تماس بگیرید."
                    />
                </div>
                <LegalNotice />

            </Content>
        </Layout>
    )
}
