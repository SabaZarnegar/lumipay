import React from 'react'
import { Typography, Button, Space } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export default function PageHeader() {
    return (
        <Space align="start" style={{ width: "100%", justifyContent: "space-between" }}>

            <Typography.Text strong>
                فروشگاه دیجیتال آرمان | LumiPay
            </Typography.Text>

            <Space align="start" style={{ lineHeight: 1 }}>
                <div style={{ direction: "ltr" }}>
                    <Typography.Text>4567***0912</Typography.Text>
                    <br />
                    <Typography.Text type="secondary">Owner</Typography.Text>
                </div>
                <Button icon={<LogoutOutlined />}>خروج</Button>
            </Space>

        </Space>
    )
}
