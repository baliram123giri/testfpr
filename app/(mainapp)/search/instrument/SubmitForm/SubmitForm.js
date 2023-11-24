"use client"
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { PropertySearchValidation } from './validation'
import AppSelect from '@/components/Inputs/AppSelect'
import SearchLayoutHeader from '@/components/SearchComponents/SearchLayoutHeader'
import AppInput from '@/components/Inputs/AppInput'
import AppButton from '@/components/Buttons/AppButton'
import { useDispatch } from 'react-redux'
import { UPDATE_INSTRUMENT_DATA } from '@/redux/instrumentReducer/instrumentReducer'


const SubmitForm = () => {
    //state 
    const dispatch = useDispatch()

    const { handleSubmit, formState: { errors }, watch, register } = useForm({
        resolver: yupResolver(PropertySearchValidation()),
        mode: "onSubmit"
    })

    //function
    const onSubmit = (value) => {
        dispatch({ type: UPDATE_INSTRUMENT_DATA, payload: value })
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
            name: "search_type_id",
            type: "select",
            required: true,
            label: "Type",
            options: [{
                value: 1,
                name: "Date/Year",
            },
            {
                value: 2,
                name: "Instrument No."
            }
            ]
        },
        ...(watch().search_type_id == 2 ? [{
            id: 2,
            name: "document_no",
            type: "text",
            label: "Instrument No.",
            required: true,
        }] : watch().search_type_id == 1 ? [{
            id: 3,
            name: "document_no",
            type: "text",
            label: "Date/Year",
            required: true,
        }] : [])
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
                <SearchLayoutHeader icon={false} title={"Instrument Information"} />
            </div>
            <div className='flex items-center flex-wrap gap-2 mt-2'>
                {
                    inputs2.map(({ id, width, ...rest }) => {
                        return <div key={id} className={`w-full md:w-[20%]`}><AppInput register={register} errors={errors}  {...rest} /></div>
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