import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function ButtonWithIcon(props) {
    const { buttonText, icon, action } = props;
    return (
        <Button type="primary" icon={<SearchOutlined />} onClick={() => action}>
            {buttonText}
        </Button>
    )
}

export default ButtonWithIcon;