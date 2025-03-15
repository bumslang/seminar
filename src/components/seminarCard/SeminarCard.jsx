import { useState } from 'react';

import Confirm from '../confirm/Confirm';
import SeminarEditPanel from '../editSeminar/SeminarEditPanel';

import cl from './SeminarCard.module.css'

function SeminarCard({ id, title, description, date, time, photo, setSeminarsArr, seminarsArr, getSeminars }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    return (
        <li className={cl.seminarCard}>
            <h2 className={`${cl.seminarCard__item} ${cl.text}`}>{title}</h2>
            <h3 className={`${cl.seminarCard__item} ${cl.desc}`}>{description}</h3>
            <h4 className={`${cl.seminarCard__item} ${cl.date}`}>Дата: {date}</h4>
            <h4 className={`${cl.seminarCard__item} ${cl.time}`}>Время: {time}</h4>
            <img className={`${cl.seminarCard__item} ${cl.photo}`} src={photo} alt="" />
            <button
                onClick={() => setShowConfirm(true)}
                className={`${cl.seminarCard__item} ${cl.btnDelete}`}
            >
                DELETE
            </button>
            <button onClick={() => setShowEdit(true)} className={`${cl.seminarCard__item} ${cl.btnEdit}`}>EDIT</button>

            {showConfirm && (
                <Confirm
                    setShowConfirm={setShowConfirm}
                    id={id}
                    getSeminars={getSeminars}
                />
            )}
            {showEdit && (
                <SeminarEditPanel
                    setShowEdit={setShowEdit}
                    id={id}
                    seminarsArr={seminarsArr}
                    getSeminars={getSeminars}
                />
            )}
        </li>
    );
}

export default SeminarCard;
