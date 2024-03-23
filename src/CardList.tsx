import { Card, List, Typography } from 'antd';
import * as React from 'react';
import { MenuItem } from './Layout';

interface CardListProps {
    items: MenuItem[];
    onSelect: (item: MenuItem) => void
}

const CardList: React.FC<CardListProps> = ({ items, onSelect }) => {

    return (
        <List
            grid={{
                gutter: 24,
                // xs: 8,
                // sm: 7,
                // md: 6,
                // lg: 5,
                // xl: 4,
                // xxl: 3,
            }}
            dataSource={items}
            renderItem={(item) => (
                <List.Item>
                    <Card
                        style={{ maxWidth: '420px' }}
                        onClick={() => onSelect(item)}
                        hoverable
                        cover={item?.media && (<img
                            alt={`${item.key}-image`}
                            src={item.media}
                        />)}
                    >
                        <Card.Meta
                            title={item.label}
                            description={<Typography.Text ellipsis>{item?.content?.[0]}</Typography.Text>}
                        />

                    </Card>
                </List.Item>
            )}
        />);

};

export default CardList;
