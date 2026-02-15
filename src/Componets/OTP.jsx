import { Form, Input, Flex, Statistic } from "antd";
import FormButton from './FormButton';
import { useLocation, useNavigate } from "react-router-dom";
import LumipayImg from './LumipayImg'
import { useOTPLogic } from '../Componets/hooks.js/useOTPLogic';


export default function OTP() {
    const location = useLocation();
    const navigate = useNavigate();
    const { phone, role, otp } = location.state || {};



    const {
        enteredOtp,
        setEnteredOtp,
        canResend,
        setCanResend, // برای استفاده در Countdown
        deadline,
        handleVerifyOtp,
        handleResendClick,
        handleBack
    } = useOTPLogic(otp, role, navigate);



    if (!phone || !role || !otp) {
        return <navigate to="/Login" replace />;
    }

    

    return (
        <div className='container'>
            <Form className='form' layout="vertical">
                <LumipayImg />

                <p className='p-padding'>کد تایید ارسال شد</p>
                <p className='color'>کد 4 یا 6 رقمی برای شماره <b>{phone}</b> ارسال شد</p>
                <p className='color'>نقش : {role}</p>

                <p className='p-padding' style={{ fontSize: 16 }}>
                    کد تایید را وارد کنید
                </p>

                {/* OTP رسمی Ant Design */}
                <Flex justify="center">
                    <Input.OTP
                        length={6}
                        value={enteredOtp}
                        onChange={setEnteredOtp}
                        autoFocus
                        style={{ direction: 'ltr' }}
                    />
                </Flex>

                <p className='p-padding color'>
                    <b> کد را دریافت نکردید؟ </b>
                    {canResend ? (
                        <span className="hover-text" style={{ cursor: 'pointer' }} onClick={handleResendClick}>
                            ارسال مجدد کد (۳ بار مانده)
                        </span>
                    ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            ارسال مجدد کد (
                            <Statistic.Countdown
                                value={deadline}
                                onFinish={() => setCanResend(true)}
                                format="mm:ss"
                                valueStyle={{ fontSize: '13px', color: 'gray', lineHeight: 1 }}
                            />
                            مانده)
                        </span>
                    )}
                </p>

                <Form.Item>
                    <FormButton
                        text='تایید و ورود'
                        onClick={handleVerifyOtp}
                        disabled={enteredOtp.length !== String(otp)?.length}
                    />

                    <p
                        className="hover-text"
                        style={{ marginTop: '5%', color: 'gray' }}
                        onClick={handleBack}
                    >
                        بازگشت به صفحه ورود
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
}
