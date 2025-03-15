import cl from './Confirm.module.css'

const Confirm = ({ setShowConfirm, id, getSeminars }) => {

    async function confirmDelete(id) {
        try {
            let deleteResponse = await fetch(`http://localhost:3001/seminars/${id}`, {
                method: 'DELETE',
            });

            if (!deleteResponse.ok) {
                throw new Error('Не удалось удалить семинар');
            }

            getSeminars();

        } catch (error) {
            console.error('Ошибка при удалении семинара:', error);
        }
    }

    return (
        <div className={cl.modal} >
            <p className={cl.text}> Удалить семинар ?</p>
            <button onClick={() => confirmDelete(id)} className={cl.btnYes} >Да</button>
            <button onClick={() => setShowConfirm(false)} className={cl.btnNo} >Нет</button>
        </div >
    )
}

export default Confirm