import React from 'react'
import { Typography } from "antd";

export default function WelcomeHead() {
    return (
        <>
            <Typography.Title level={4}>
                خوش آمدید 👋
            </Typography.Title>

            <Typography.Text type="secondary">
                تصویر لحظه‌ای از وضعیت مالی و فروش شما
            </Typography.Text>
        </>
    )
}