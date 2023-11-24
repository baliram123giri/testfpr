"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { PropertySearchValidation } from "./validation";
import AppInput from "@/components/Inputs/AppInput";
import AppButton from "@/components/Buttons/AppButton";
import { RiDeleteBin6Line } from "react-icons/ri"
const granteeFields = {
    business: "",
    match_id: "",
    party_type_id: "",
    ssn: "",
    address_filter: "",
    combos: false,
    auto_run: false,
}
const SubmitForm = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
        watch,
        setValue,
        register,
    } = useForm({
        resolver: yupResolver(PropertySearchValidation()),
        mode: "onSubmit",
        defaultValues: {
            grantee: [granteeFields]
        }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "grantee", // unique name for your Field Array,

    });

    //function
    const onSubmit = (value) => { };

    const inputs = [
        {
            id: 1,
            name: "state_id",
            type: "select",
            label: "State",
            required: true,
            options: [],
        },
        {
            id: 2,
            name: "county_id",
            type: "select",
            label: "County",
            required: true,
            options: [],
        },
    ];

    const inputs2 = [
        {
            id: 1,
            name: "business",
            type: "text",
            label: "Business or individual (Last,First,Middle)",
            width: "lg:w-[20%]",
        },
        {
            id: 2,
            name: "match_id",
            type: "select",
            label: "Match",
            width: "lg:w-[15%] xl:w-[10%]",
            options: [],
        },
        {
            id: 3,
            name: "party_type_id",
            type: "select",
            label: "Party Type",
            width: "lg:w-[15%]",
            options: [],
        },
        {
            id: 4,
            name: "ssn",
            type: "text",
            label: "SSN Filter (last 4 digits)",
            width: "lg:w-[15%]",
        },
        {
            id: 5,
            name: "address_filter",
            type: "text",
            label: "Address Filter",
            width: "lg:w-[12%] xl:w-[8%]",
        },
        {
            id: 6,
            name: "combos",
            type: "checkbox",
            label: "Run Alt. Combos",
            width: "md:w-[20%] lg:w-[12%] xl:w-[10%]",
            margin: "mt-5",
        },
        {
            id: 7,
            name: "auto_run",
            type: "checkbox",
            label: "Property Docs Auto-run",
            width: "lg:w-[15%] xl:w-[12%] ",
            margin: "mt-5",
        },
    ];

    //functions 
    const addNewGranteeHandler = () => {
        setValue("grantee", [...watch("grantee"), granteeFields])
    }
    const removeNewGranteeHandler = (id) => {
        setValue("grantee", watch("grantee").filter((ele, i) => i != id))
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
            <div className="w-full lg:w-[20%]">
                <AppInput
                    register={register}
                    errors={errors}
                    label={"Order No.(optional)"}
                    name={"order_no"}
                />
            </div>
            <div className="flex items-center flex-wrap gap-2  my-4 lg:my:my-6">
                {inputs.map(({ id, width, ...rest }) => {
                    return (
                        <div key={id} className={`w-full lg:w-[20%]`}>
                            <AppInput register={register} errors={errors} {...rest} />
                        </div>
                    );
                })}
            </div>
            {/* //inputs 2 */}
            <div className='w-full ms-auto md:w-[10%] mt-5'>
                <AppButton onClick={addNewGranteeHandler} type='button' color='primary' size='sm' title={'ADD MORE'} />
            </div>
            {fields.map((field, index) => {
                return <div key={field.id} className="flex items-center flex-wrap gap-2 mt-3 ">
                    {inputs2.map(({ id, width, margin, name, label, ...rest }) => {
                        return (
                            <div
                                key={field.id + `${id}`}
                                className={`${width ? width : "w-full"} ${index === 0 && rest.type === "checkbox" ? margin : ""}`}
                            >
                                <AppInput register={register} errors={errors} name={`grantee[${index}][${name}]`} {...rest} label={index === 0 || rest.type === "checkbox" ? label : ""} />
                            </div>
                        );
                    })}
                    {index > 0 && <div onClick={() => removeNewGranteeHandler(index)} className={`w-[30px] flex justify-center items-center border-red-500 rounded-sm cursor-pointer hover:opacity-70 h-[30px] text-red-500 border `}> <RiDeleteBin6Line size={20} /></div>}
                </div>
            })}

            <div className="my-2 gap-2 flex items-center">
                <AppButton type="button" color="light" size="sm" title="Cancel" />
                <AppButton type="submit" color="warning" size="sm" title="Search" />
            </div>
        </form>
    );
};

export default SubmitForm;
