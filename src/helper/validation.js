import * as Yup from "yup";

export const description = Yup.string().min(2).max(70).required();
export const name = Yup.string().min(2).max(70).required();
export const date = Yup.date().required();
export const percent = Yup.number().lessThan(101).moreThan(0).required();
