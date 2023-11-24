import { getCookie, myAxios } from "@/lib/helpers"

export const myAccountInfoApi = async () => {
    const { data } = await myAxios.get(`/user-info`, {
        headers: {
            'Authorization': `Bearer ${getCookie("access_token")}`,
        }
    })
    if (data) {
        delete data["profile_pic"]
    }
    return data
}

//update userinfo
export const updateUserInfoApi = async (value) => {
    const { data } = await myAxios.post(`/update-account-info`, value, {
        headers: {
            'Authorization': `Bearer ${getCookie("access_token")}`,
        }
    })
    return data
}