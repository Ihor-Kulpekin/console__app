import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="wrapper">
        <div className="not-found">
            <div className="not-found__top">404</div>
            <div className="not-found__bottom">Страница не найдена</div>
            <Link to='/' className="btn-primary" >Вернуться на главную</Link>
        </div>
    </div>
);

export default NotFoundPage;