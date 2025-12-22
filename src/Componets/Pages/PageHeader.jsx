import React from 'react'
import { Typography, Button, Space } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

export default function PageHeader() {

    const userPhone = localStorage.getItem("userPhone");
    const userRole = localStorage.getItem("userRole");

    // const navigate = useNavigate();

//    function HandleLogOut(){
//     localStorage.clear();
//      navigate("/Login");
//     }

    return (
        <Space align="start" style={{ width: "100%", justifyContent: "space-between" }}>

            <Typography.Text strong>
                فروشگاه دیجیتال آرمان | LumiPay
            </Typography.Text>

            <Space align="start" style={{ lineHeight: 1 }}>
                <div style={{ direction: "ltr" }}>
                    <Typography.Text>{userPhone}</Typography.Text>
                    <br />
                    <Typography.Text type="secondary">{userRole}</Typography.Text>
                </div>
                <Button icon={<LogoutOutlined />}>خروج</Button>
            </Space>

        </Space>
    )
}
