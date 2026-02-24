import React from "react";
import { Layout, Row, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
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
import LumipayImg from '../LumipayImg'

const { Header, Content } = Layout;

export default function OwnerRollPage() {
    return (
        <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
           <Header className='header-style'>
                    <div className='header-title-style'>
                        <LumipayImg width={50} height={50} />

                        {/* گذاشتیم که دو تا متن اصلیو ستونی قرار بده */}
                        <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>
                            <PageHeader title="فروشگاه دیجیتال آرمان" showUserInfo={true} style={{ margin: 0, padding: 10 }} />
                            <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                                  کد پذیرنده: MRC-12345
                            </Typography.Text>
                        </div>

                    </div>
                </Header>


            {/* Content */}
            <Content style={{ padding: 20 }}>
                <div style={{ marginBottom: 24 }}>
                    <WelcomeHead />
                </div>

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
                        <PayInPersonCard path="/PayInPersonPage" />
                        <TransactionHistoryCard />
                        <WithdrawalCard path="/WalletSettelment"/>
                        <MerchantProfile />
                    </Row>

                </div>


                <LegalNotice />

            </Content>
        </Layout>
    );
}
