import React from 'react'
import { Col, Card, Typography, Statistic, Divider, Tag } from "antd";
import { WalletOutlined } from "@ant-design/icons";

export default function LastSettlementCard() {
    return (
        <Col xxl={8} xl={8} lg={12} md={24} className="equalHeightCol">
            <Card
                className="equalHeightCard"
                title="آخرین تسویه"
                extra={<WalletOutlined />}
            >
                <Tag color="blue">در حال پردازش</Tag>

                <Statistic
                    title="مبلغ"
                    value={'۵٬۰۰۰٬۰۰۰'}
                    suffix="تومان"
                    style={{ marginTop: 16 }}
                />

                <Divider />

                <Typography.Text type="secondary">
                    تاریخ درخواست: 1403/08/15
                </Typography.Text>
                <br />
                <Typography.Text type="secondary">
                    تاریخ واریز: 1403/08/18
                </Typography.Text>
            </Card>
        </Col>
    )
}