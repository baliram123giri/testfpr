import AppInput from '@/components/Inputs/AppInput'
import React from 'react'

const TaxInput = ({ register, errors }) => {
    return (
        <div>
            <div className='w-full md:w-[20%]'>
                <AppInput register={register} errors={errors} name={"apn"} required={true} label={"APN# (123-456-789)"} />
            </div>
            <div className='mt-4'>
                <span className='text-b-sm text-blue-500 font-semibold'>Add More APNs</span>
                <div className='space-y-2 mt-4'>
                    <AppInput register={register} type={"checkbox"} errors={errors} name={"features"} label={"APN# (123-Future,Related and Underlying Parcels Auto-Run-789)"} />
                    <AppInput register={register} type={"checkbox"} errors={errors} name={"prior_years"} label={"View Prior Year Taxes"} />
                </div>
            </div>
        </div>
    )
}

export default TaxInput