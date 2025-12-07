import React from 'react'
import {Button} from "antd";

export default function Formbutton({text , disabled , onClick}) {
    return (
        <Button type="primary" block className='big-btn' disabled={disabled}  onClick={onClick}>
           {text}
        </Button>
    )
}
