import React from 'react'
import { Button } from "antd";

export default function FormButton({ text, disabled, onClick }) {
  return (
    <Button
      type="primary"
      htmlType="button" 
      block
      className='big-btn'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
