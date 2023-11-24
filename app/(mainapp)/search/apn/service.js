import { getCookie, myAxios } from "@/lib/helpers"

export const ApnApiSearch = async (value) => {
    const { data } = await myAxios.post(`/apn-search`, value, {
        headers: {
            'Authorization': `Bearer ${getCookie("access_token")}`,
        }
    })
    return data.data 
}