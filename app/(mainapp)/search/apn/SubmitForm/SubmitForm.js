"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { PropertySearchValidation } from "./validation";
import SearchLayoutHeader from "@/components/SearchComponents/SearchLayoutHeader";
import AppInput from "@/components/Inputs/AppInput";
import AppButton from "@/components/Buttons/AppButton";
import MyLabel from "@/components/Texts/MyLabel";
import TaxInput from "./TaxInput";
import AddressInput from "./AddressInput";
import LegalInputs from "./LegalInputs";
import { useDispatch } from "react-redux";
import { UPDATE_APN_DATA } from "@/redux/apnReducer/apnReducer";

const SubmitForm = () => {
    //state 
    const dispatch = useDispatch()

    const {
        handleSubmit,
        formState: { errors },
        watch,
        register,
    } = useForm({
        resolver: yupResolver(PropertySearchValidation()),
        mode: "onSubmit",
        defaultValues: {
            search: "tax"
        }
    });

    //function
    const onSubmit = (value) => {
        //update apn data
        dispatch({ type: UPDATE_APN_DATA, payload: value })
    };

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

    const inputs3 = [
        {
            id: 1,
            name: "state_id",
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
            width: "lg:w-[20%]",
        },
        {
            id: 5,
            name: "address_filter",
            type: "text",
            label: "Match",
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
            required: true,
            type: "checkbox",
            label: "Property Docs Auto-run",
            width: "lg:w-[15%] xl:w-[12%] ",
            margin: "mt-2 md:mt-5",
        },
    ];

    const inputs2 = [{
        id: 1,
        name: "Tax Identification Number",
        value: "tax"
    },
    {
        id: 2,
        name: "Address and/or Name",
        value: "address-and-name"
    },
    {
        id: 3,
        name: "Legal Description",
        value: "legal-description"
    }
    ]

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
            <div className="flex  flex-wrap gap-2  my-4 lg:my:my-6">
                {inputs.map(({ id, width, ...rest }) => {
                    return (
                        <div key={id} className={`w-full lg:w-[20%]`}>
                            <AppInput register={register} errors={errors} {...rest} />
                        </div>
                    );
                })}
                <div className={`w-full lg:w-[20%] mx-auto `}>
                    <MyLabel label={"Tax Cover:"} name={"Tax Cover"} />
                    <span>{new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}</span>
                </div>
            </div>

            <SearchLayoutHeader title={"Search"} icon={false} />
            {/* //inputs 2 */}
            <div className="flex flex-wrap gap-10 my-4">
                {inputs2.map(({ id, name, value }) => (
                    <label htmlFor="" key={id} className="flex items-center space-x-2">
                        <input type="radio" value={value} {...register("search")} className="form-radio text-indigo-600" />
                        <span className="text-gray-800 hover:text-blue-700">{name}</span>
                    </label>
                ))}
            </div>

            <SearchLayoutHeader title={"Search By Tax Identification Number"} icon={false} />
            {/* //inputs 3 */}
            <div className="my-4">
                {watch().search === "tax" && <TaxInput errors={errors} register={register} />}
                {watch().search === "address-and-name" && <AddressInput errors={errors} register={register} />}
                {watch().search === "legal-description" && <LegalInputs errors={errors} register={register} />}
            </div>

            <div className="my-2 gap-2 flex items-center">
                <AppButton type="type" color="light" size="sm" title="Cancel" />
                <AppButton type="submit" color="warning" size="sm" title="Search" />
            </div>
        </form>
    );
};

export default SubmitForm;
