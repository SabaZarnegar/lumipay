import React from 'react'
import { Col, Card, Typography } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function PayInPersonCard({ onClick, style ,path }) {
    const navigate = useNavigate();
    return (
        <Col xxl={6} xl={6} lg={12} md={12} sm={24}>
            <Card
                hoverable
                onClick={()=> path && navigate("/PayInPersonPage")}
                className="minimalCards">
                <div className="minimalCardIcons">
                    <CreditCardOutlined />
                </div>

                <Typography.Text strong style={style}>
                    پرداخت حضوری
                </Typography.Text>
                <br />
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    ایجاد تراکنش جدید
                </Typography.Text>
            </Card>
        </Col>
    )
}