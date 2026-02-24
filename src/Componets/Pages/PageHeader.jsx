import React from 'react'
import { Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import ExitButton from '../ExitButton'

export default function PageHeader({ title, showUserInfo = true, style }) {

  const userPhone = localStorage.getItem("userPhone");
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/Login");
  }

  return (
    <Space
      align="center"
      size={4}
      style={{ width: "100%", justifyContent: "space-between" }}
    >
      <Typography.Text strong style={{ margin: 0 }}>
        {title}
      </Typography.Text>

      {showUserInfo &&
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.2
            }}
          >
            <Typography.Text style={{ fontSize: 13 }}>
              {userPhone}
            </Typography.Text>

            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {userRole}
            </Typography.Text>
          </div>

          <ExitButton title="خروج" onClick={handleLogOut} />
        </div>
      }
    </Space>
  );
}

