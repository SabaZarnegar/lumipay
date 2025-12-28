import { useState } from 'react';
import { message } from "antd";

const roleRoutes = {
    owner: "/OwnerRollPage",
    finance: "/FinanceRollPage",
    cashier: "/CashierRollPage"
};

export function useOTPLogic(otp, role, navigate) {
    // ۲. تعریف استیت‌ها (State)
    const [enteredOtp, setEnteredOtp] = useState("");
    const [canResend, setCanResend] = useState(false);
    const [deadline, setDeadline] = useState(Date.now() + 1000 * 60 * 2);

    // ۳. توابع لاجیک (توابعی که فرستادی)
    const handleVerifyOtp = () => {
        if (enteredOtp !== String(otp)) {
            return message.error("کد تایید اشتباه است");
        }

        const userRole = role?.toLowerCase();
        const targetPath = roleRoutes[userRole];

        if (targetPath) {
            message.success("ورود موفق 🎉");
            navigate(targetPath);
        } else {
            message.error("نقش کاربری نامعتبر است");
            navigate("/Login");
        }
    };

    const handleResendClick = () => {
        setCanResend(false);
        setDeadline(Date.now() + 1000 * 60 * 1);
        message.info("کد جدید ارسال شد");
    };

    const handleBack = () => {
        navigate("/Login");
    };

    // ۴. خروجی هوک: هر چیزی که کامپوننت OTP برای نمایش نیاز دارد
    return {
        enteredOtp,
        setEnteredOtp,
        canResend,
        setCanResend,
        deadline,
        handleVerifyOtp,
        handleResendClick,
        handleBack
    };
}