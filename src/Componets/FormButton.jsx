import React from 'react'
import { Button } from "antd";

export default function FormButton({ text, disabled, onClick ,htmlType="button" , className}) {
  return (
    <Button
      type="primary"
      htmlType={htmlType} 
      block
      className={className}
      disabled={disabled}
      onClick={onClick}
      
    >
      {text}
    </Button>
  );
}
