import React from 'react';
import { useParams } from 'react-router-dom';
import Article from "./Article";
import { Layout, Menu, Breadcrumb } from 'antd';
import CategoriesList from "./CategoriesList";

const Category = () => {
    const { category } = useParams();

    const articles  = [
        { id: 1, title: 'Отдам для оцифровки на сайт и в личную коллекцию 100 фото СПб 2004-06 года', date: '18/01/2021', category: 'bus' },
        { id: 2, title: 'Народная карта Яндекса и общественный транспорт в РФ', date: '22/01/2019', category: 'design' },
        { id: 3, title: 'Сравнение автобусов большого класса', date: '10/03/2019', category: 'bus' },
        { id: 4, title: 'Волгоградская область', date: '01/01/2008', category: 'sity'},
        { id: 5, title: 'Нейтральный домен', date: '28/10/2022', category: 'staff'},
    ];

    const filteredArticles = articles.filter((article) => article.category === category);

    const { Header, Content, Footer } = Layout;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: '0 16px' }}>
                <h1 style={{ margin: 0 }}>My React App</h1>
            </Header>
            <Content style={{ padding: '16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Categories</Breadcrumb.Item>
                    <Breadcrumb.Item>{category}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: '16px', minHeight: '360px' }}>
                    <h2>Welcome to the Articles Page!</h2>
                    <p>Here you can see all the topics with this category.</p>
                    <div>
                        <h1>{category} Articles</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            {filteredArticles.map((article, index) => (
                                <Article key={index} {...article} />
                            ))}
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My React App ©2023 Created by You</Footer>
        </Layout>
    );
};



export default Category;