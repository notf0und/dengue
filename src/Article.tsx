

import { Divider, Image, List, Typography } from 'antd';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { findElementByKey, MenuItem } from './Layout';
import data from './data.json';


const Article: React.FC = () => {

    const { articleId } = useParams();


    const item = findElementByKey(data, String(articleId), (article) => article.key === articleId) as MenuItem

    console.log({ item })



    return (
        <>
            <List dataSource={item.content}
                header={<Typography.Title level={3}>{item.label}</Typography.Title>}
                renderItem={(item) => <List.Item>
                    <div dangerouslySetInnerHTML={{ __html: item }}></div>
                </List.Item>}
            >
            </List>
            <Image src={item.media_details}></Image>
            <Divider />
        </>
    );
};

export default Article;
