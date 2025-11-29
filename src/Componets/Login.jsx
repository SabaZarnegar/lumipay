import React , {useEffect , useState} from 'react'
import { Form, Input, Button } from 'antd'
import { PhoneOutlined } from "@ant-design/icons"; // آیکون تلفن


export default function Login() {

const [phone , setphone] = useState("");
const [password , setpassword] = useState("");
const[isDisabled , setisDisabled] = useState(true);


useEffect(()=>{
if(phone.trim() !== "" && password.trim()!== ""){
setisDisabled(false)
}else{
setisDisabled(true)
}
},[password , phone])


    return (
        <div className='container'>
            <Form className='my-form' layout="vertical" >

                <img src={`${process.env.PUBLIC_URL}/ax.png`} alt="logo" className='img' />

                <p className='p-first' ><b>ورود به پنل LumiPay</b></p>
                <p style={{ color: 'gray' }} ><b>پنل مدیریت پذیرندگان</b></p>

                <Form.Item label="*شماره موبایل" name='phone'>
                    <Input value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='09xxxxxxxxx' prefix={<PhoneOutlined style={{ color: "gray" }} />} style={{ width: "100%" }} />
                    <p className='text'>شماره موبایل ثبت شده در سیستم را وارد نمایید</p>
                </Form.Item>

                <Form.Item label="*رمز عبور" name='password'>
                    <Input.Password value={password} onChange={(e)=>setpassword(e.target.value)} type='password' placeholder='حداقل 6 کاراکتر' style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item >
                    <Button disabled={isDisabled} type="primary" block className='big-btn'>
                        ورود به پنل
                    </Button>
                    <p style={{ marginTop: '5%', color: 'gray' }}>رمز عبور خود را فراموش کرده اید؟</p>
                </Form.Item>

            </Form>
        </div>

    )
}