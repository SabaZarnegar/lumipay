import React from 'react'
import { Alert, Button } from "antd";

export default function AlertHead() {
    return (
        <Alert
            type="warning"
            showIcon
            message="پروفایل ناقص"
            description="برای ادامه تسویه و برداشت وجه، لازم است پروفایل خود را تکمیل کنید. پروفایل شما 75٪ تکمیل شده است."
            action={<Button type="link">تکمیل اکنون</Button>}
            style={{ marginBottom: 24 }}
        />
    )
}
