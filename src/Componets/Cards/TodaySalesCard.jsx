import React from 'react'
import { Row, Col, Card, Statistic, Divider } from "antd";
import { RiseOutlined } from "@ant-design/icons";

export default function TodaySalesCard() {
    return (
        <Col xxl={8} xl={8} lg={12} md={24}>
            <Card
                title="فروش امروز"
                extra={<RiseOutlined style={{ color: "green" }} />}
            >
                <p>خلاصه تراکنش‌های اعتباری امروز</p>
                <Row>
                    <Col span={12}>
                        <Statistic
                            title="مبلغ کل"
                            value={'۸٬۳۴۰٬۰۰۰'}
                            suffix="تومان"
                        />
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title="تعداد تراکنش"
                            value={'۴۸'}
                            style={{ direction: "ltr", textAlign: "left" }}
                        />
                    </Col>
                </Row>

                <Divider />

                <Statistic
                    title="میانگین هر تراکنش"
                    value={'۱۷٬۷۵۰'}
                    suffix="تومان"
                />
            </Card>
        </Col>
    )
}