import React from 'react'
import { Col, Card, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function MerchantProfile() {
    return (
        <Col xxl={6} xl={6} lg={12} md={12} sm={24}>
            <Card hoverable className="minimalCards">
                <div className="minimalCardIcons">
                    <UserOutlined />
                </div>

                <Typography.Text strong>
                    پروفایل پذیرنده
                </Typography.Text>
                <br />
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    مشاهده و ویرایش
                </Typography.Text>
            </Card>
        </Col>
    )
}