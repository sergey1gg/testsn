import * as Yup from "yup";
export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
});
export const profileFormSchema=Yup.object().shape({
    newPostText: Yup.string()

        .min(3, "Must be longer ")
    });