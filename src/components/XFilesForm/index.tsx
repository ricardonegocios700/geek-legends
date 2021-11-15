import Header from "../../components/Header";
import {
    Container,
    FormContent,
    Label,
    Input,
    TextArea,
    Button,
    Div,
} from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import { useXFile } from "../../Providers/xfile";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/user";
import format from "date-fns/format";

interface FormTypes {
    title: string;
    text: string;
    userId: number;
    date: string;
}

const XFilesForm = () => {
    const { userId } = useAuth();
    const [date, setDate] = useState(format(new Date(), "dd-MM-yyy"));

    const schema = yup.object().shape({
        title: yup.string().required("Favor incluir um título!"),
        text: yup.string().required("Favor incluir seu comenetário!"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>({ resolver: yupResolver(schema) });

    const { createAPost, postUpdate } = useXFile();

    const handleSubmitForm = (data: FormTypes) => {
        data.userId = userId;
        data.date = date;
        createAPost(data);
        reset();
    };

    return (
        <>
            <Container>
                <FormContent>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div>
                            <Label htmlFor="title">Title:</Label>
                            <Div>
                                <div>
                                    <Input
                                        {...register("title")}
                                        type="text"
                                        id="title"
                                    />
                                    {!!errors?.title && (
                                        <p>{errors.title?.message}</p>
                                    )}
                                </div>

                                <Button type="submit">
                                    <IoMdAddCircle />
                                </Button>
                            </Div>
                        </div>
                        <div>
                            <Label htmlFor="coments">Coments: </Label>
                            <TextArea
                                {...register("text")}
                                id="coments"
                                maxLength={1000}
                            />
                            {!!errors?.text && <p>{errors.text?.message}</p>}
                        </div>
                    </form>
                </FormContent>
            </Container>
        </>
    );
};

export default XFilesForm;
