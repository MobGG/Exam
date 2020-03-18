import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function FloatingActionButton(props) {
    const { tooltipText, icon, action } = props;
    return (
        < Tooltip title={tooltipText}>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={action} />
        </Tooltip >
    )
}

export default FloatingActionButton;