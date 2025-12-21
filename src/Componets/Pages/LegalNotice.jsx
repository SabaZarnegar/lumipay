import React from 'react'
import { Typography, Alert } from "antd";

export default function LegalNotice() {
    return (
        <div style={{ marginTop: -150, marginBottom: 70 }}>
            <Alert
                type="info"
                showIcon
                style={{
                    borderRadius: 12,
                    background: "#FAFAFA",
                }}
                message={
                    <Typography.Text style={{ fontSize: 13, lineHeight: 2 }}>
                        <strong>سپر حقوقی: </strong>
                        خرید اعتباری قابل استرداد نقدی نیست؛ مسئولیت کیفیت و تحویل کالا با
                        فروشگاه است؛ Repco/LumiPay فقط بستر پرداخت و تسویه است و هیچ
                        مسئولیتی در قبال محصولات یا خدمات ارائه شده توسط پذیرنده ندارد.
                    </Typography.Text>
                }
            />
        </div>
    )
}