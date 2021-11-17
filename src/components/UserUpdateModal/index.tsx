import { Modal } from "./styles";

interface UpdateUserModalProps {
    show: boolean;
    handleClick: any;
}

const UpdateUserModal = ({ show, handleClick }: UpdateUserModalProps) => {

    return (
        <>
            <Modal style={{ visibility: show ? "visible" : "hidden" }}>
                <h1>Update User</h1>
                <label htmlFor='name'>Nome:</label>
                <input id='name' />

                <label htmlFor='preferences'>Preferências:</label>
                <input id='preferences' />

                <label htmlFor='aboutme'>Sobre você:</label>
                <textarea id='aboutme' />

                <button onClick={() => handleClick(!show)}>CLOSE</button>
            </Modal>
        </>
    );
};

export default UpdateUserModal;
