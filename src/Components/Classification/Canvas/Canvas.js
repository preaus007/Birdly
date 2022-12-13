import React from 'react';

const Canvas = (props) => 
{

    const { image } = props
    return (
        <div>
            <div className="artboard artboard-horizontal phone-4">
                <img src={image} alt=''></img>
            </div>
        </div>
    );
};

export default Canvas;