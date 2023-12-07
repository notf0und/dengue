import { Card, List } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findElementByKey, MenuItem } from './Layout';
import data from './data.json';



const CardList: React.FC = () => {
    const { itemKey } = useParams();
    const navigate = useNavigate()
    const items: MenuItem[] = (
        itemKey ?
            findElementByKey(data, itemKey, (article) => article.key === itemKey)?.children as MenuItem[] :
            data
    );


    return (
        <div style={
            {
                padding: '2rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',

            }
        }>

            <List
                grid={{
                    gutter: 24,
                }}
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: '20rem', maxWidth: '350px' }}
                            onClick={() => navigate(item.children ? `/articles/${item.key}` : `/article/${item.key}`)}
                            hoverable
                            cover={item?.media && (
                                <img
                                    alt={`${item.key}-image`}
                                    src={item.media?.startsWith('/') && import.meta.env.PROD ? `/dengue${item.media}` : item.media}
                                    style={{
                                        maxHeight: '12rem',
                                        objectFit: 'cover'
                                    }}
                                />
                            )}
                        >
                            <Card.Meta title={item.label} />

                        </Card>
                    </List.Item>
                )}
            />
        </div>

    );

};

export default CardList;
