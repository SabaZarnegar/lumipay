import React from 'react'
import { Col, Card, Typography } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

export default function PayInPersonCard() {
    return (
        <Col xxl={6} xl={6} lg={12} md={12} sm={24}>
            <Card hoverable className="minimalCards">
                <div className="minimalCardIcons">
                    <CreditCardOutlined />
                </div>

                <Typography.Text strong>
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