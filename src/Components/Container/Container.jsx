import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' max-w-[1600px] mx-auto'>
            <h1>{children}</h1>
        </div>
    );
};

export default Container;