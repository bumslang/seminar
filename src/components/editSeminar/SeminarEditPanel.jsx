import { useState } from 'react'

import cl from './SeminarEditPanel.module.css'

let SeminarEditPanel = ({ setShowEdit, id, seminarsArr, getSeminars, }) => {
    let editObj = seminarsArr.find((obj) => obj.id == id);

    let [title, setTitle] = useState(editObj.title);
    let [desc, setDesc] = useState(editObj.description);
    let [date, setDate] = useState(editObj.date);
    let [time, setTime] = useState(editObj.time);
    let [photo, setPhoto] = useState(editObj.photo);

    async function updateSeminar(id) {
        try {
            let response = await fetch(`http://localhost:3001/seminars/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    title: title,
                    description: desc,
                    date: date,
                    time: time,
                    photo: photo,
                })
            })

            if (!response.ok) {
                throw new Error('Ошибка')
            }
            setShowEdit(false);
            getSeminars();

        } catch (error) {
            console.error('Ошибка при обновлении семинара:', error)
        }
    }

    return <div className={cl.modalWindow} >
        <input
            value={title}
            placeholder='Название семинара'
            className={cl.title}
            onChange={(e) => setTitle(e.target.value)} />
        <input
            value={desc}
            placeholder='Описание семинара'
            className={cl.description}
            onChange={(e) => setDesc(e.target.value)} />
        <input
            value={date}
            placeholder='Дата семинара'
            className={cl.date}
            onChange={(e) => setDate(e.target.value)} />
        <input
            value={time}
            placeholder='Время начала семинара'
            className={cl.time}
            onChange={(e) => setTime(e.target.value)} />
        <input
            value={photo}
            placeholder='URL фото семинара'
            className={cl.photo}
            onChange={(e) => setPhoto(e.target.value)} />

        <button onClick={() => updateSeminar(id)} className={cl.btnChange} >Изменить</button>
        <button onClick={() => setShowEdit(false)} className={cl.btnCancel} >Отмена</button>
    </div>
}

export default SeminarEditPanel;