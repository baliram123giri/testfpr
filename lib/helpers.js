import axios from "axios";
export const baseURL = "http://52.15.165.100:3026"

export const myAxios = axios.create({
    baseURL: `${baseURL}/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
})

myAxios.interceptors.response.use((response) => {
    if (response?.data?.access_token) {
        setCookie("access_token", response.data.access_token, 58); //58 minutes
        // delete response.data["aaccess_token"]
    }
    return response

}, function (error) {
    if (error.response?.data?.error === "Unauthorized Access") {
        window.location.href = "/unauthorized"
    }
    return Promise.reject(error.response?.data?.error || error.response?.data?.message || error.message, { type: "error" });
})


export function getSimpleErrorMessage(validationResult) {
    return validationResult ? { message: validationResult.details.map((error) => error.message).join(', ') } : '';
}


export function setValues(setValue, values) {
    for (const key in values) {
        // console.log(values[key]);
        setValue(key, values[key]);
    }
}

// Function to set a cookie with a dynamic expiration time
// function setCookie(name, value, minutesToExpire) {
//     var date = new Date();
//     date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));

//     var expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + value + "; " + expires + "; path=/";
// }
export function setCookie(name, value, minutesToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));

    var expires = "expires=" + date.toUTCString();

    // Add the Secure and SameSite attributes
    var cookieAttributes = `path=/; Secure; SameSite=None; ${expires}`;

    document.cookie = name + "=" + value + "; " + cookieAttributes;
}
// Function to get the value of a cookie by name
export function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return null; // Return null if the cookie with the given name is not found
}




//remove blank values
export function removeEmptyValues(values) {
    if (Array.isArray(values)) {
        try {
            values?.map((ele) => {
                for (const key in ele) {
                    if (ele[key] === "" || ele[key] === null || ele[key] === undefined) {
                        delete ele[key];
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    } else {
        for (const key in values) {
            if (values[key] === "" || values[key] === null) {
                delete values[key];
            }
        }
    }
}