import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../../utils/firebase"
import { Link } from "react-router-dom";
import "./Couple.css"

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

export default function SignupPage() {

    const register = async (values) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(
                values.email,
                values.password
            );
            console.log(userCredential);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleSubmit = (values) => {
        register(values);
    };

    return (
        <section className="Registration">
            <div className="gradient" />

            <section className="container">
                <section className="sign">
                    <h1 className="title">Sign Up</h1>
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
                                <button type="submit">Зарегистрироваться</button>
                            </div>
                            <h4>
                                <span>У вас уже есть аккаунт? </span>
                                <Link to={'/login'} className="signin__link">Войти</Link>
                            </h4>
                        </Form>
                    </Formik>
                </section>
            </section>
        </section>

    )
}