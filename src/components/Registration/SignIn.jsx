import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../../utils/firebase"
import './Couple.css'
import SignupPage from "./SignUp";

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Некорректный адрес электронной почты")
        .required("Поле обязательно для заполнения"),
    password: Yup.string()
        .min(6, "Пароль должен содержать не менее 6 символов")
        .required("Поле обязательно для заполнения"),
});

export default function SigninPage() {
    const [signup, setSignup] = useState(false)


    const signIn = (values) => {
        try {
            auth
                .signInWithEmailAndPassword(
                    values.email,
                    values.password,
                ).then((authUser) => {
                    console.log(authUser);
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSubmit = (values) => {
        signIn(values);
    };

    return (
        <>
            {signup ? (
                <SignupPage />
            ) : (
                <section className="Registration">
                    <div className="gradient" />
                    <div className="container">
                        <div className="sign">
                            <h1 className="title">Sign In</h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div>
                                        <Field type="email" id="email" name="email" placeholder="Enter your email" />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>

                                    <div>
                                        <Field type="password" id="password" name="password" placeholder="Enter your password" />
                                        <ErrorMessage name="password" component="div" className="error" />
                                    </div>

                                    <div>
                                        <button type="submit">Войти</button>
                                    </div>

                                    <h4>
                                        <span>У вас ещё нет аккаунта?</span>
                                        <span onClick={() => setSignup(true)} className="signin__link">Зарегистрируйтесь</span>
                                    </h4>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
