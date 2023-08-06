import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { changePasswordStart } from '../Slices/features/passwordSlice';

const ChangePasswordForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.password.isLoading);
    const error = useSelector((state) => state.password.error);
    const success = useSelector((state) => state.password.success);

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        currentPassword: Yup.string().required('Введите текущий пароль'),
        newPassword: Yup.string()
            .required('Введите новый пароль')
            .min(6, 'Минимальная длина пароля - 6 символов'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают')
            .required('Подтвердите новый пароль'),
    });

    const handleSubmit = (values) => {
        dispatch(changePasswordStart(values));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="currentPassword">Текущий пароль:</label>
                    <Field type="password" id="currentPassword" name="currentPassword" />
                    <ErrorMessage name="currentPassword" component="div" />
                </div>
                <div>
                    <label htmlFor="newPassword">Новый пароль:</label>
                    <Field type="password" id="newPassword" name="newPassword" />
                    <ErrorMessage name="newPassword" component="div" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Подтвердите новый пароль:</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Изменение...' : 'Изменить пароль'}
                </button>
                {success && <div>Пароль успешно изменен!</div>}
                {error && <div>{error.message}</div>}
            </Form>
        </Formik>
    );
};

export default ChangePasswordForm;
