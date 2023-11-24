import { getCookie, myAxios } from "@/lib/helpers"

export const InstrumentSearch = async (value) => {
    const { data } = await myAxios.post(`/instrument-search`, value, {
        headers: {
            'Authorization': `Bearer ${getCookie("access_token")}`,
        }
    })
    return data.data 
}