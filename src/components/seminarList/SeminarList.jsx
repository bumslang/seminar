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
            let response = await fetch('http://localhost:3001/seminars/')
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            setSeminarsArr(data)
        } catch (error) {
            console.error(error)
        }
    }

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
