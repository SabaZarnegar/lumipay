import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export default function Backicon() {

    const navigate = useNavigate();

  return (
    <ArrowRightOutlined 
    style={{cursor : 'pointer'}}
    onClick={()=> navigate(-1)}
    />
  )
}
