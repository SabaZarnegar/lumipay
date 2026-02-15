import React from 'react'
import { Typography, Button, Space, Layout, Form, Input, Dropdown } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { DownOutlined, AudioOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PageHeader from './PageHeader'
import LumipayImg from '../LumipayImg'



const { Header, Content } = Layout;

const { Search } = Input;
const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;
const onSearch = (value, _e, info) => console.log(info?.source, value);


const handlechannelMenuClick = e => {
    console.log('click', e);
};
const handleStatusMenuClick = e => {
    console.log('click', e);
};
const channelItems = [
    {
        label: 'همه کانال ها',
        key: '1'
    },
    {
        label: 'حضوری',
        key: '2'
    },
    {
        label: 'آنلاین',
        key: '3'
    }
];
const statusItems = [
    {
        label: 'همه وضعیت ها',
        key: '1'
    },
    {
        label: 'تایید شده',
        key: '2'
    },
    {
        label: 'در انتظار',
        key: '3'
    },
    {
        label: 'تسویه شده',
        key: '4'
    },
    {
        label: 'برداشت شده',
        key: '5'
    },
    {
        label: 'ناموفق',
        key: '6'
    }
];
const channelMenuProps = {
    items: channelItems,
    onClick: handlechannelMenuClick,
};
const statusMenuProps = {
    items: statusItems,
    onClick: handleStatusMenuClick,
};


export default function TransactionHistoryPage() {
    const navigate = useNavigate();
    return (
        <>
            <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
                <Header className='header-style'>
                    <div className='header-title-style'>
                        <ArrowRightOutlined onClick={() => navigate(-1)} />
                        <LumipayImg width={50} height={50} />

                        <div style={{ display: "flex", flexDirection: "column", marginRight: "12px", flex: 1 }}>
                            <PageHeader title="تاریخچه تراکنش‌ها" showUserInfo={false} style={{ margin: 0, padding: 10 }} />
                            <Typography.Text type="secondary" style={{ fontSize: "12px", marginTop: "-4px" }}>
                                فروشگاه دیجیتال آرمان
                            </Typography.Text>
                        </div>

                    </div>
                </Header>
                <div className='THP-container'>
                    <Form className='THP-form' layout="vertical">

                        <div className='THP-form-div'>
                            <div>
                                <Typography.Text strong>
                                    گزارش تراکنش‌ها
                                </Typography.Text>
                                <br />
                                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                                    مشاهده و مدیریت تمام تراکنش‌های مالی
                                </Typography.Text>
                            </div>

                            <div>
                                <Button>Export CSV</Button>
                            </div>
                        </div>


                        <div className='THP-form-div'>
                            <div>
                                <Space vertical>
                                    <Search placeholder="جستجو: موبایل، شماره پیگیری..." onSearch={onSearch} style={{ width: 400 }} />
                                </Space>
                            </div>

                            <div>
                                <Space wrap>
                                    <Dropdown menu={channelMenuProps}>
                                        <Button icon={<DownOutlined />} iconPlacement="end">
                                            همه کانال ها
                                        </Button>
                                    </Dropdown>
                                </Space>
                            </div>

                            <div>
                                <Space wrap>
                                    <Dropdown menu={statusMenuProps}>
                                        <Button icon={<DownOutlined />} iconPlacement="end">
                                            همه وضعیت ها
                                        </Button>
                                    </Dropdown>
                                </Space>
                            </div>
                        </div>

                    </Form>
                </div >
            </Layout >

        </>

    )
}