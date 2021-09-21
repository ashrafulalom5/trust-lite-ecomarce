import React from 'react';

const layoutFour = (props) => (
    <div>
        <div className="container py-5">
            <div className="row">{props.children}</div>
        </div>
    </div>
);

layoutFour.propTypes = {};

export default layoutFour;
