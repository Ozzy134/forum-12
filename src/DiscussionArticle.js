import React from 'react';
import { Card, Typography } from 'antd';
import {Link} from "react-router-dom";

const { Title, Paragraph } = Typography;

const Article = ({ id, title, content, category, text, date }) => {
    return (
        <Card title={title} extra={<span style={{ fontWeight: 'bold' }}>{category}</span>}>
            <Paragraph>{content}</Paragraph>
            <p>{text}</p>
            <p style={{ justifyContent: "flex-end" }}>{date}</p>
        </Card>
    );
};

export default Article;