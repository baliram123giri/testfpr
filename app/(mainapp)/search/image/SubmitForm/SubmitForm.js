"use client"
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { PropertySearchValidation } from './validation'
import AppSelect from '@/components/Inputs/AppSelect'
import SearchLayoutHeader from '@/components/SearchComponents/SearchLayoutHeader'
import AppInput from '@/components/Inputs/AppInput'
import AppButton from '@/components/Buttons/AppButton'
import { useDispatch } from 'react-redux'
import { UPDATE_IMAGE_DATA } from '@/redux/imageReducer/imageReducer'

const SubmitForm = () => {
    const dispatch = useDispatch()

    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(PropertySearchValidation()),
        mode: "onSubmit"
    })

    //function
    const onSubmit = (value) => {
        dispatch({ type: UPDATE_IMAGE_DATA, payload: value })
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
    const inputs2 = [
        {
            id: 1,
            name: "format",
            type: "select",
            required: true,
            label: "Format",
            options: []
        },
        {
            id: 254,
            name: "image_no",
            type: "text",
            required: true,
            label: "Image Number",
        },
        {
            id: 2,
            name: "year",
            type: "text",
            label: "Year",
        },
        {
            id: 3,
            name: "instrument_number",
            type: "text",
            label: "Instrument",
        },
        {
            id: 4,
            name: "page_number",
            type: "text",
            label: "Page Number(s)",
        },
        // {
        //     id: 5,
        //     name: "thru",
        //     type: "text",
        //     label: "Thru",
        // },
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
                <SearchLayoutHeader icon={false} title={"Image Information"} />
            </div>
            <div className='flex items-center flex-wrap gap-2 mt-2'>
                {
                    inputs2.map(({ id, width, ...rest }) => {
                        return <div key={id} className={`w-full md:w-[16%]`}><AppInput register={register} errors={errors}  {...rest} /></div>
                    })
                }
                <div className='w-full md:w-[10%] mt-5'>
                    <AppButton type='type' color='primary' size='sm' title='County Information' />
                </div>
            </div>
            <div className='my-2 gap-2 flex items-center'>
                <AppButton type='type' color='light' size='sm' title='Cancel' />
                <AppButton type='submit' color='warning' size='sm' title='Search' />
            </div>
        </form>
    )
}

export default SubmitForm