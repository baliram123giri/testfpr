import { getCookie, myAxios } from "@/lib/helpers"

export const ImageApiSearch = async (value) => {
    const { data } = await myAxios.post(`/image-search`, value, {
        headers: {
            'Authorization': `Bearer ${getCookie("access_token")}`,
        }
    })
    return data.data
}