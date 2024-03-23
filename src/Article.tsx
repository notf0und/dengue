

import { Divider, Image, List, Typography } from 'antd';
import * as React from 'react';
import { MenuItem } from './Layout';

interface ArticleProps {
    item: MenuItem;
}

const Article: React.FC<ArticleProps> = ({ item }) => {

    return (
        <>
            <List dataSource={item.content}
                header={<Typography.Title level={3}>{item.label}</Typography.Title>}
                renderItem={(item) => <List.Item >{item}</List.Item>}
            >
            </List>
            <Image src={item.media}></Image>
            <Divider />
        </>
    );
};

export default Article;
