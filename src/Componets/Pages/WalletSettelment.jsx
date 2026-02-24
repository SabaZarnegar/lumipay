import { Typography, Layout, Card } from "antd";
import PageHeader from './PageHeader'
import LumipayImg from '../LumipayImg'
import { useNavigate } from "react-router-dom";
import { CreditCardOutlined, ArrowRightOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;

export default function WalletSettelment() {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
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
      <Card
        className="equalHeightCard"
        // bodyStyle={{ paddingTop: 12 }}
        title={
          <p className="sales-header" style={{ margin: 0 }}>
            <b style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CreditCardOutlined />
              کیف پول
            </b>
          </p>
        }
      >
      </Card>
    </Layout>
  )
}
