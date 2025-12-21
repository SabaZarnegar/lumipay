import React from 'react'
import { Col, Card, Typography, Statistic, Divider } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

export default function WalletCard() {
    return (
        <Col xxl={8} xl={8} lg={12} md={24}>
            <Card title="کیف پول" extra={<CreditCardOutlined />}>
                <Statistic
                    title="موجودی قابل برداشت"
                    value={'۱۲٬۴۵۸٬۰۰۰'}
                    suffix="تومان"
                />

                <Divider />

                <Statistic
                    title="موجودی قفل شده"
                    value={'۲٬۳۰۰٬۰۰۰'}
                    suffix="تومان"
                />

                <Divider />

                <Statistic
                    title="موجودی کل"
                    value={'۱۵٬۴۵۸٬۰۰۰'}
                    suffix="تومان"
                />

                <Typography.Text type="secondary">
                    کارمزد: 2.5٪
                </Typography.Text>
            </Card>
        </Col>
    )
}