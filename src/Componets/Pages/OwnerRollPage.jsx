import React from "react";
import { Layout, Row, Typography, Divider } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import WelcomeHead from "./WelcomeHead";
import AlertHead from "./AlertHead";
import WalletCard from "../Cards/WalletCard";
import TodaySalesCard from "../Cards/TodaySalesCard";
import LastSettlementCard from "../Cards/LastSettlementCard";
import PayInPersonCard from "../Cards/PayInPersonCard";
import TransactionHistoryCard from "../Cards/TransactionHistoryCard";
import WithdrawalCard from "../Cards/WithdrawalCard";
import MerchantProfile from "../Cards/MerchantProfile";
import LegalNotice from "./LegalNotice";

const { Header, Content } = Layout;



export default function OwnerRollPage() {
    const navigate = useNavigate();

    function handleNextpage(){
    navigate("/PayInPersonPage");
}

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
                    description="برای ادامه تسویه و برداشت وجه، لازم است پروفایل خود را تکمیل کنید. پروفایل شما 75٪ تکمیل شده است."
                />


                {/* Cards */}
                <Row gutter={[24, 24]}>
                    <WalletCard />
                    <TodaySalesCard />
                    <LastSettlementCard />
                </Row>


                {/* Quick Access Cards */}
                <div style={{ marginTop: 24, marginBottom: 200 }}>

                    <Typography.Text strong style={{ fontSize: 16 }}>
                        دسترسی سریع
                    </Typography.Text>

                    <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                        <PayInPersonCard style={{ cursor: "pointer" }} onClick={handleNextpage} />
                        <TransactionHistoryCard />
                        <WithdrawalCard />
                        <MerchantProfile />
                    </Row>

                </div>


                <LegalNotice />

            </Content>
        </Layout>
    );
}
