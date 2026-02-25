import { Typography, Layout, Card, Col, Row, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import { CreditCardOutlined, ArrowRightOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import PageHeader from './PageHeader';
import LumipayImg from '../LumipayImg';



const { Header, Content } = Layout;

export default function WalletSettelment() {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Header */}
      <Header className='header-style'>
        <div className='header-title-style'>
          <ArrowRightOutlined onClick={() => navigate(-1)} />
          <LumipayImg width={50} height={50} />
          <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>
            <PageHeader title="کیف پول و تسویه" showUserInfo={false} style={{ margin: 0, padding: 10 }} />
            <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
              فروشگاه دیجیتال آرمان
            </Typography.Text>
          </div>
        </div>
      </Header>

      <Content style={{ padding: 20 }}>
        <Row gutter={16} align="stretch">
          <Col xxl={12} xl={8} lg={12} md={24} style={{ display: "flex" }}>
            <Card
              className="equalHeightCard wallet-row"
              style={{ flex: 1 }}
              title={
                <p className="sales-header" style={{ margin: 0 }}>
                  <b style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <CreditCardOutlined />
                    کیف پول
                  </b>
                  <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                    وضعیت موجودی و قفل‌های زمانی
                  </Typography.Text>
                </p>
              }
            >
              <div style={{ display: "flex", gap: "12px" }}>
                {/* کارت اول */}
                <div style={{
                  backgroundColor: "rgb(240,245,255)",
                  border: "1px solid #1890ff",
                  borderRadius: "6px",
                  padding: "10px",
                  flex: 1,
                  textAlign: "center"
                }}>
                  <Statistic title="قفل شده" value={'۲٬۳۰۰٬۰۰۰'} suffix="تومان" />
                </div>

                {/* کارت دوم */}
                <div style={{
                  backgroundColor: "rgb(253,245,255)",
                  border: "1px solid #1890ff",
                  borderRadius: "6px",
                  padding: "10px",
                  flex: 1,
                  textAlign: "center"
                }}>
                  <Statistic title="در جریان" value={'۱٬۲۰۰٬۰۰۰'} suffix="تومان" />
                </div>

                {/* کارت سوم */}
                <div style={{
                  backgroundColor: "rgb(239,245,255)",
                  border: "1px solid #1890ff",
                  borderRadius: "6px",
                  padding: "10px",
                  flex: 1,
                  textAlign: "center"
                }}>
                  <Statistic title="در دسترس" value={'۵٬۰۰۰٬۰۰۰'} suffix="تومان" />
                </div>
              </div>
            </Card>
          </Col>

          <Col xxl={8} xl={8} lg={12} md={24} style={{ display: "flex" }}>
            <Card
              className="equalHeightCard wallet-row"
              style={{ flex: 1 }}
              title={
                <p className="sales-header" style={{ margin: 0 }}>
                  <b style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <ExclamationCircleOutlined />
                    شرایط قرارداد
                  </b>
                </p>
              }
            >
              {/* محتوا دلخواه */}
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
