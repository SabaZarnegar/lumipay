import React from 'react'
import { Typography, Alert } from "antd";

export default function LegalNotice() {
    return (
        <div style={{ marginTop: -150, marginBottom: 70 }}>
            <Alert
                style={{
                    borderRadius: 12,
                    backgroundColor: "#F5F5F5",
                    border: "1px solid #E8E8E8"
                }}
                message={
                    <Typography.Paragraph className='legalNoticeText'>
                        <strong style={{ color: "#262626" }}>سپر حقوقی: </strong>
                        خرید اعتباری قابل استرداد نقدی نیست؛ مسئولیت کیفیت و تحویل کالا با
                        فروشگاه است؛ Repco/LumiPay فقط بستر پرداخت و تسویه است و هیچ
                        مسئولیتی در قبال محصولات یا خدمات ارائه شده توسط پذیرنده ندارد.
                    </Typography.Paragraph>
                }
            />
        </div>
    )
}