import React from 'react';
import { Card, Typography } from 'antd';
import {Link} from "react-router-dom";

const { Title, Paragraph } = Typography;

const Article = ({ id, title, content, category }) => {
    return (
        <Card title={title} extra={<span style={{ fontWeight: 'bold' }}>{category}</span>}>
            <Paragraph>{content}</Paragraph>
            <Link to={`/article/${id}`}>перейти</Link>
        </Card>
    );
};

export default Article;