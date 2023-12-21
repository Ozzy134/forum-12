import React from 'react';
import Categories from './Categories';

const CategoriesList = () => {
    const categories  = [
        { title: 'Introduction to React', date: '18/09/2021', category: 'random' },
        { title: 'Getting Started with Ant Design', date: '23/10/2023', category: 'design' },
        { title: 'Getting Start a car to sity!', date: '24/11/2022', category: 'car' },
        { title: 'OMG!!! What this is bus?!?!', date: '21/12/2023', category: 'bus'},
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {categories.map((article, index) => (
                <Categories key={index} {...article} />
            ))}
        </div>
    );
};

export default CategoriesList;