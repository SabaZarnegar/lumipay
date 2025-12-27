import React from 'react'
import {Button} from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export default function ExitButton({onClick ,title}) {
  return (
    <Button onClick={onClick} icon={<LogoutOutlined />}>{title}</Button>
  )
}
