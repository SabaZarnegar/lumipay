import React from 'react'
import {Button} from "antd";

export default function Formbutton({text , disabled}) {
    return (
        <Button type="primary" block className='big-btn' disabled={disabled} >
           {text}
        </Button>
    )
}
