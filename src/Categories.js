import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

const Categories = ({ title, date, category }) => {
    return (
        <Card style={{ margin: '16px', maxWidth: '400px' }}>
            <Title level={4}>{title}</Title>
            <Paragraph>{date}</Paragraph>
            <Paragraph>{category}</Paragraph>
            <Link to={`/category/${category}`}>перейти</Link>
        </Card>
    );
};

export default Categories;