import React from 'react';
import { useParams } from 'react-router-dom';
import Article from "./DiscussionArticle";
import { Link } from 'react-router-dom';
import Comment from "./Comment";
import { Layout, Menu, Breadcrumb } from 'antd';

const Category = () => {
    const { id } = useParams();

    const articles  = [
        { id: 1, title: 'Отдам для оцифровки на сайт и в личную коллекцию 100 фото СПб 2004-06 года', date: '18/01/2021', category: 'bus', text: 'Отдам 100 фото автобусов СПб в бумажном виде, 2004-2006 гг. Фотографировал лично. Полностью разрешаю публиковать и использовать в интересах сообщества и сайта. Некоторые даты подписаны, некоторые нет, но по аналогии вычислим. Места съемки все определены, бортовые номера видны. Хотелось бы отдать человеку, который оцифрует и загрузит на сайт все подходящие под правила (учитывая качество бумажных фото на мыльницу). Ранее просто читал сайт, потому буду благодарен за подсказку, как правильно здесь общаться в личку с теми, кого заинтересует.' },
        { id: 2, title: 'Народная карта Яндекса и общественный транспорт в РФ', date: '22/01/2019', category: 'design' },
        { id: 3, title: 'Сравнение автобусов большого класса', date: '10/03/2019', category: 'bus' },
        { id: 4, title: 'Волгоградская область', date: '01/01/2008', category: 'sity'},
        { id: 5, title: 'Нейтральный домен', date: '28/10/2022', category: 'staff'},
    ];

    const filteredArticles = articles.filter((article) => article.id == id);

    console.log(filteredArticles)

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
                    <Breadcrumb.Item>{id}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: '16px', minHeight: '360px' }}>
                    <div>
                        <h1>{id} Articles</h1>
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