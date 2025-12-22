import React from 'react'
import { Alert, Button } from "antd";



export default function AlertHead({ message, description, action ,icon }) {
    return (
       <>
        
        <Alert
            className='bgd-color'
            type="warning"
            showIcon 
            icon={icon}
            message={message}
            description={description}
            action={<Button type="link" >{action}</Button>}
            style={{ marginBottom: 24 }}
        />
       </>
    )
}
