import React from 'react';

const Dropdown = React.forwardRef(({ className, onRun, onCopy, onRemove, ...otherProps }, ref) => (
    <div ref={ref} className={ className ? `dropdown ${className}` : 'dropdown' } {...otherProps} >
        <ul className="dropdown__list">
            <li className="dropdown__item">
                <button className="dropdown__action" onClick={onRun}>
                    Выполнить
                </button>
            </li>
            <li className="dropdown__item">
                <button className="dropdown__action" onClick={onCopy}>
                    Скопировать
                </button>
            </li>
            <li className="dropdown__item" onClick={onRemove}>
                <button className="dropdown__action dropdown__action--red-hover">
                    Удалить
                </button>
            </li>
        </ul>
    </div>
));

export default Dropdown;