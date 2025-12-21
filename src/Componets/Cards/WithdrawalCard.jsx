import React from 'react'
import { Col, Card, Typography } from "antd";
import { WalletOutlined } from "@ant-design/icons";

export default function WithdrawalCard() {
    return (
        <Col xxl={6} xl={6} lg={12} md={12} sm={24}>
            <Card hoverable className="minimalCards">
                <div className="minimalCardIcons">
                    <WalletOutlined />
                </div>

                <Typography.Text strong>
                    برداشت / تسویه
                </Typography.Text>
                <br />
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    درخواست برداشت وجه
                </Typography.Text>
            </Card>
        </Col>
    )
}