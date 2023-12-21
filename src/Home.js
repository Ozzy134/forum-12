import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import CategoriesList from "./CategoriesList";
// import 'antd/dist/antd.css';


const { Header, Content, Footer } = Layout;

const Home = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: '0 16px' }}>
                <h1 style={{ margin: 0 }}>My React App</h1>
            </Header>
            <Content style={{ padding: '16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: '16px', minHeight: '360px' }}>
                    {/* Ваш основной контент здесь */}
                    <h2>Welcome to the Main Page!</h2>
                    <p>This is the content of your main page.</p>
                    <CategoriesList />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My React App ©2023 Created by You</Footer>
        </Layout>
    );
};

export default Home;
