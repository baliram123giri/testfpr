"use client"

import React from 'react'
import AppInput from '@/components/Inputs/AppInput'

import { useForm } from 'react-hook-form'
import AppButton from '@/components/Buttons/AppButton'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import { BiSolidUser } from 'react-icons/bi'
const Form = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = async (value) => { }

    return (
        <form  className="w-full  space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <AppInput
                type={"email"}
                endIcon={<BiSolidUser className="text-neutral-600" />}
                label={"Email"}
                required
                errors={errors}
                register={register}
                placeholder={"Enter Email"}
                name={"email"}
            />
            <AppButton title={false ? <LoadingSpinner /> : "Login"} color="warning" type="submit" />
        </form>
    )
}

export default Form