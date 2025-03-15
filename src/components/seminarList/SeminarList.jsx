import { useEffect, useState } from 'react';

import SeminarCard from '../seminarCard/SeminarCard';

import cl from './SeminarList.module.css'


const SeminarList = () => {
    let [seminarsArr, setSeminarsArr] = useState([]);

    useEffect(() => {
        getSeminars();
    }, []);


    async function getSeminars() {
        try {
            let response = await fetch('http://localhost:3001/seminars/'); //запрос на список семинаров
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`); //если ошибка пробрасываем ошибку и попадаем в catch
            }
            let data = await response.json(); //получаем список семинаров
            setSeminarsArr(data); //массив с семинарами устанавливаем в seminarArr
        } catch (error) {
            console.error(error)
        }
    }
//рендерим список семинаров
    return <ul className={cl.seminar}>
        {seminarsArr.map(({ id, title, description, date, time, photo }) => {
            return <SeminarCard key={id}
                id={id}
                title={title}
                description={description}
                date={date}
                time={time}
                photo={photo}
                setSeminarsArr={setSeminarsArr}
                seminarsArr={seminarsArr}
                getSeminars={getSeminars}
            />
        })}
    </ul >;
};

export default SeminarList;
