import AppInput from '@/components/Inputs/AppInput'
import React from 'react'

const LegalInputs = ({ register, errors }) => {
    const inputsLegal = [
        {
            id: 100,
            name: "legal_description_type",
            type: "select",
            label: "Legal Description Type",
            required: true,
            options: [],
            width: "md:w-[30%]",
        },
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
        <div className='flex items-center flex-wrap gap-2 mt-2'>
            {
                inputsLegal.map(({ id, width, ...rest }) => {
                    return <div key={id} className={`w-full ${width || "md:w-[10%] lg:w-[5%]"}`}><AppInput register={register} errors={errors}  {...rest} /></div>
                })
            }
        </div>
    )
}

export default LegalInputs