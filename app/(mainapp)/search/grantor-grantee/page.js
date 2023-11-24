import SearchLayoutHeader from '@/components/SearchComponents/SearchLayoutHeader';
import React from 'react'
import SubmitForm from './SubmitForm/SubmitForm';

export const metadata = {
    title: "FPR - Grantor Grantee",
    description: "Generated by create next app",
};
function GarntorGrantee() {
    return (
        <>
            <SearchLayoutHeader title={"Grantor/Grantee Search"} />
            <SubmitForm />
        </>
    )
}

export default GarntorGrantee 