import { Modal, Form } from "./styles";
import { useAuth } from "../../Providers/user/index";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {useEffect } from 'react';

interface UpdateUserModalProps {
    show: boolean;
    handleClick: any;
}

interface DataTypes {
    name: string;
    preferences: string;
    aboutMe: string;
    email: string;
    password: string;
}

const UpdateUserModal = ({ show, handleClick }: UpdateUserModalProps) => {
    const { register, handleSubmit, reset } = useForm({});

    const { userProfileUpdate, userId, getOneUser, config, userInfo } = useAuth();

    useEffect(() => {
        getOneUser(userId);
      }, [config]);

    const handleUpdateUser = (data: DataTypes) => {        
        if (
            data.name === "" &&
            data.aboutMe === "" &&
            data.preferences === ""
        ) {
            handleClick(!show);
            toast.info("Atualização abortada!");
            return null;
        } else {
            handleClick(!show);
            if(data.name==='') { data.name = userInfo.name }
            if(data.aboutMe==='') { data.aboutMe = userInfo.aboutMe }
            if(data.preferences==='') { data.preferences = userInfo.preferences }
            userProfileUpdate(userId, data);
        }
        reset();
    };

    return (
        <>
            <Modal style={{ visibility: show ? "visible" : "hidden" }}>
                <Form onSubmit={handleSubmit(handleUpdateUser)}>
                    <h1>Update User</h1>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" {...register("name")} />

                    <label htmlFor="preferences">Preferências:</label>
                    <input id="preferences" {...register("preferences")} />

                    <label htmlFor="aboutme">Sobre você:</label>
                    <textarea id="aboutme" {...register("aboutMe")} />

                    <button className="modalButton" type="submit">
                        SEND AND CLOSE
                    </button>
                    <p>Deixar em branco para abortar!!</p>
                </Form>
            </Modal>
        </>
    );
};

export default UpdateUserModal;
