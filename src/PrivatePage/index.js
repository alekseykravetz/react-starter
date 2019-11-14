import React from 'react';


export default props => {
    return (
        <>
            <div>Private Page</div>
            <div onClick={() => props.history.push('/')}>navigate to ROOT</div>
        </>
    );
};
