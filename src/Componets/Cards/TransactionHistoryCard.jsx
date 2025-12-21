import React from 'react'
import { Col, Card, Typography } from "antd";
import { HistoryOutlined } from "@ant-design/icons";

export default function TransactionHistoryCard() {
    return (
        <Col xxl={6} xl={6} lg={12} md={12} sm={24}>
            <Card hoverable className="minimalCards">
                <div className="minimalCardIcons">
                    <HistoryOutlined />
                </div>

                <Typography.Text strong>
                    تاریخچه تراکنش
                </Typography.Text>
                <br />
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    مشاهده همه تراکنش‌ها
                </Typography.Text>
            </Card>
        </Col>
    )
}