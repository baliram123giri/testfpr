"use client";
import AppButton from "@/components/Buttons/AppButton";
import AppInput from "@/components/Inputs/AppInput";
import { Modal } from "@/components/Modal/Modal";
import { MY_ACCOUNT_MODAL } from "@/redux/layoutReducer/layout.reducer";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { myaccountValidation } from "./validation";
import { useMutation } from "@tanstack/react-query";
import { myAccountInfoApi, updateUserInfoApi } from "./Services";
import { setValues } from "@/lib/helpers";
import { toast } from "react-toastify";
import { UPDATE_USER_INFO } from "@/redux/authReducer/authReducer";
const initialPass = {
  password: false,
  current_password: false,
  confirm_password: false,
};

const MyAccount = () => {
  //states
  const [showPass, setShowPass] = useState(initialPass);
  const { myAccountModal } = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();

  //useform
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(myaccountValidation),
    mode: "onChange",
  });

  //inputs
  const inputs = [
    {
      id: 1,
      name: "first_name",
      type: "text",
      placeholder: "First Name",
    },
    {
      id: 2,
      name: "middle_name",
      type: "text",
      placeholder: "Middle Name",
    },
    {
      id: 3,
      name: "last_name",
      type: "text",
      placeholder: "Last Name",
    },
  ];
  const inputs2 = [
    {
      id: 1,
      name: "current_password",
      type: "password",
      placeholder: "Current Password",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "New Password",
    },
    {
      id: 3,
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  //function
  const modalHandler = () =>
    dispatch({ type: MY_ACCOUNT_MODAL, payload: false });

  //calling api for userinfo
  const { isLoading, mutate } = useMutation(myAccountInfoApi, {
    onSuccess({ data }) {
      setValues(setValue, {
        ...data,
        current_password: "",
        password: "",
        confirm_password: "",
      });
    },
  });

  //calling api update userinfo
  const { isLoading: isLoadingUserInfo, mutate: mutateUpdateUserInfo } =
    useMutation(updateUserInfoApi, {
      onSuccess({ message }) {
        toast(message, { type: "success" });
        //close modal
        dispatch({ type: MY_ACCOUNT_MODAL, payload: false }),
          //store info
          dispatch({
            type: UPDATE_USER_INFO,
            payload: {
              first_name: watch("first_name"),
              middle_name: watch("middle_name"),
              last_name: watch("last_name"),
            },
          });
      },
      onError(data) {
        console.log(data)
        toast(data?.message, { type: "error" });
      },
    });

  const onSubmit = (value) => {
    const { password } = value;
    if (!password) {
      delete value["current_password"];
      delete value["password"];
      delete value["confirm_password"];
    }
    //update user info
    mutateUpdateUserInfo(value);
  };

  useEffect(() => {
    if (myAccountModal) {
      mutate();
      setShowPass(initialPass);
    }
  }, [myAccountModal]);

  return (
    <Modal
      isLoading={isLoading}
      width={50}
      isOpen={myAccountModal}
      onClose={modalHandler}
      title="My Account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="my-2">
        <h6 className="text-sm font-semibold">Contact</h6>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {inputs.map(({ id, width, ...rest }) => {
            return (
              <div key={id} className={`w-full md:w-[32%]`}>
                <AppInput register={register} errors={errors} {...rest} />
              </div>
            );
          })}
        </div>
        <div className="my-2">
          <h6 className="text-sm font-semibold">Email</h6>
          <AppInput
            register={register}
            errors={errors}
            {...{
              name: "email",
              type: "email",
              placeholder: "Email",
              disabled: true,
            }}
          />
        </div>
        <div className="my-2">
          <h6 className="text-sm font-semibold">Change Password</h6>
          <div className="flex items-center flex-wrap gap-2 mt-2">
            {inputs2.map(({ id, width, ...rest }) => {
              return (
                <div key={id} className={`w-full`}>
                  <AppInput
                    endIcon={
                      showPass[rest.name] ? (
                        <AiOutlineEye
                          onClick={() =>
                            setShowPass({ ...setShowPass, [rest.name]: false })
                          }
                          className="text-neutral-600 cursor-pointer"
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() =>
                            setShowPass({ ...setShowPass, [rest.name]: true })
                          }
                          className="text-neutral-600 cursor-pointer"
                        />
                      )
                    }
                    register={register}
                    errors={errors}
                    {...rest}
                    type={showPass[rest.name] ? "text" : "password"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-2 gap-2 flex items-center">
          <AppButton type="button" color="light" size="sm" title="Cancel" />
          <AppButton
            type="submit"
            color="warning"
            size="sm"
            title={isLoadingUserInfo ? "Loading" : "Update"}
          />
        </div>
      </form>
    </Modal>
  );
};

export default MyAccount;
