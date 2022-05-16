import React from 'react';

const DestinoItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="servicio">
            <img src={imagen} />
            <div className="info">
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <div className="cuerpo" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    );
}
export default DestinoItem;