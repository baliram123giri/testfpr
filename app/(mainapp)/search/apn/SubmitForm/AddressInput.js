import AppInput from '@/components/Inputs/AppInput';
import React from 'react'

const AddressInput = ({ register, errors }) => {
    const inputs = [
        {
            id: 1,
            name: "address",
            type: "text",
            label: "Address (Stree No. & Name)",
        },
        {
            id: 2,
            name: "city",
            type: "text",
            label: "City (Optional)",
        },
        {
            id: 3,
            name: "business",
            type: "text",
            label: "Business Or Individual",
        },
    ]
    return (
        <div className="flex  flex-wrap gap-2  my-4 lg:my:my-6">
            {inputs.map(({ id, ...rest }) => {
                return (
                    <div key={id} className={`w-full lg:w-[20%]`}>
                        <AppInput register={register} errors={errors} {...rest} />
                    </div>
                );
            })}
        </div>
    )
}

export default AddressInput