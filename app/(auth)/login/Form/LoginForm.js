"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation";
import AppInput from "@/components/Inputs/AppInput";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AppButton from "@/components/Buttons/AppButton";
import { useRouter } from "next/navigation";
import ErrorComp from "@/components/ErrorComp/ErrorComp";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { myAxios } from "@/lib/helpers";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { UPDATE_USER_INFO } from "@/redux/authReducer/authReducer";
const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const [customerror, setCustomerror] = useState(false)
    const [showPass, setShowPass] = useState(false);

    //hooks
    const dispatch = useDispatch()
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onChange",
    });

    const onSubmit = async (value) => {
        setLoading(true)
        setCustomerror(false)
        try {

            // mutate(value)
            // console.log(headers)
            const { data } = await myAxios.post('/login', value)
            //store info 
            dispatch({ type: UPDATE_USER_INFO, payload: data.data })

            if (data.data) {
                const user = await signIn("credentials", { user: data.data, redirect: false })
                if (user.ok) {
                    window.location.href = "/"
                }
            }
        } catch (error) {
            setCustomerror(error.response.data.message || "Email or Password incorrect!")
        } finally {
            setLoading(false)
        }
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full  space-y-3"
        >
            {customerror && <ErrorComp message={customerror} type={"error"} />}
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
            <AppInput
                type={showPass ? "text" : "password"}
                endIcon={
                    showPass ? (
                        <AiOutlineEye
                            onClick={() => setShowPass(false)}
                            className="text-neutral-600 cursor-pointer"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShowPass(true)}
                            className="text-neutral-600 cursor-pointer"
                        />
                    )
                }
                label={"Password"}
                required
                errors={errors}
                register={register}
                placeholder={"Enter Password"}
                name={"password"}
            />
            <AppButton title={loading ? <LoadingSpinner /> : "Login"} color="warning" type="submit" />
        </form>
    );
};

export default LoginForm;
