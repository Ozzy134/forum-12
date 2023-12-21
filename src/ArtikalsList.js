import React from 'react';

const ArtiklesList = () => {
    const categories  = [
        { title: 'Introduction to React', date: '18/09/2021', category: 'random' },
        { title: 'Getting Started with Ant Design', date: '23/10/2023', category: 'design' },
        { title: 'Getting Start a car to sity!', date: '24/11/2022', category: 'car' },
        { title: 'OMG!!! What this is bus?!?!', date: '21/12/2023', category: 'bus'},
    ];

    return (
        { categories }
    );
};

export default ArtiklesList;