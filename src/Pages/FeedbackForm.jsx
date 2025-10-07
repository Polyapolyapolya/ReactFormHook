import React from 'react'
import { useForm } from "react-hook-form"

let count = 0;
export default function FeedbackForm() {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  }

  console.log(watch("example")) // watch input value by passing the name of it


    return (
        <>
            <h1 className='text-center user-select-none'>Заполните форму на обратную связь</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Фамилия</label>
                    <input {...register("lastName", {
                        required: {
                            value: true,
                            message: "Поле Фамилия обязательно для заполнения"
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальное значение поле Фамилия - 3 символа"
                        }
                    })} type="text" className="form-control"/>
                    <div className="form-text text-danger">{ errors.lastName?.message }</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Имя</label>
                    <input {...register("firstName", {
                        required: {
                            value: true,
                            message: "Поле Имя обязательно для заполнения"
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальное значение поле Имя - 3 символа"
                        }
                })} type="text" className="form-control"/>
                    <div className="form-text text-danger">{ errors.firstName?.message }</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Отчество</label>
                    <input {...register("middleName")} type="text" className="form-control"/>
                    <div className="form-text text-danger">{ errors.middleName?.message }</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">"Электронная почта"</label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Поле Электронная почта обязательно для заполнения"
                        },
                        minLength: {
                            value: 6,
                            message: "Минимальное значение поле Электронная почта - 6 символов"
                    }
                    })} type="email" className="form-control" placeholder='Email'/>
                    <div className="form-text text-danger"></div>
                    <div className="form-text text-danger">{ errors.email?.message }</div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-outline-primary" type='submit'>Отправить</button>
                </div>
            </form>
        </>
    )
}
