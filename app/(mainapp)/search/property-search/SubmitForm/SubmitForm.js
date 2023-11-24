"use client"
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { PropertySearchValidation } from './validation'
import AppSelect from '@/components/Inputs/AppSelect'
import SearchLayoutHeader from '@/components/SearchComponents/SearchLayoutHeader'
import AppInput from '@/components/Inputs/AppInput'
import AppButton from '@/components/Buttons/AppButton'

const SubmitForm = () => {
    const { handleSubmit, formState: { errors }, watch, register } = useForm({
        resolver: yupResolver(PropertySearchValidation()),
        mode: "onSubmit"
    })

    //function
    const onSubmit = (value) => {

    }

    const inputs = [{
        id: 1,
        name: "state_id",
        type: "select",
        label: "State",
        required: true,
        options: []
    },
    {
        id: 2,
        name: "county_id",
        type: "select",
        label: "County",
        required: true,
        options: []
    }
    ]
    const inputsLegal = [
        {
            id: 1,
            name: "arb",
            type: "text",
            label: "Arb",

        },
        {
            id: 2,
            name: "garage",
            type: "text",
            label: "Garage",
        },
        {
            id: 3,
            name: "share",
            type: "text",
            label: "Share",
        },
        {
            id: 4,
            name: "share",
            type: "text",
            label: "Share",
        },
        {
            id: 5,
            name: "parcel",
            type: "text",
            label: "Parcel",
        },
        {
            id: 6,
            name: "lot",
            type: "text",
            label: "Lot",
        },
        {
            id: 7,
            name: "trak_number",
            type: "text",
            width: "md:w-[20%] lg:w-[10%]",
            label: "Track Number",
        },
        {
            id: 8,
            name: "block",
            type: "text",
            label: "Block",
        },
        {
            id: 9,
            name: "map_book",
            type: "text",
            width: "md:w-[15%] lg:w-[8%]",
            label: "Map Book",
        },
        {
            id: 10,
            name: "page",
            type: "text",
            label: "Page",
        },
    ]

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
            <div className='flex items-center flex-wrap gap-2'>
                {
                    inputs.map(({ id, ...rest }) => {
                        return <div key={id} className={`w-full md:w-[30%]`}><AppSelect register={register} errors={errors}  {...rest} /></div>
                    })
                }
            </div>
            <div className='mt-4'>
                <SearchLayoutHeader icon={false} title={"Legal Description"} />
            </div>
            <div className='flex items-center flex-wrap gap-2 mt-2'>
                <div className={`w-full md:w-[30%]`}><AppSelect register={register} errors={errors} name={"legal_description_type"} label={"Legal Description Type"} required /></div>
                {
                    inputsLegal.map(({ id, width, ...rest }) => {
                        return <div key={id} className={`w-full ${width ? width : "md:w-[10%] lg:w-[5%]"}`}><AppInput register={register} errors={errors}  {...rest} /></div>
                    })
                }
            </div>
            <div className='my-2 gap-2 flex items-center'>
                <AppButton type='type' color='light' size='sm' title='Cancel' />
                <AppButton type='submit' color='warning' size='sm' title='Search' />
            </div>
        </form>
    )
}

export default SubmitForm