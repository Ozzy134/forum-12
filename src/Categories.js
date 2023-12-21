import React from 'react';
import { Card, Typography, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const Categories = ({ title, date, category }) => {
    return (
        <Card style={{ margin: '16px', maxWidth: '400px' }}>
            <Title level={4}>{title}</Title>
            <Paragraph>{date}</Paragraph>
            <Paragraph>{category}</Paragraph>
        </Card>
    );
};

export default Categories;