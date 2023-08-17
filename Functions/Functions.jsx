
export const EndPoint = "https://funapi-staff-attendance.onrender.com"
 
export const isOnline = ()=>{
    return new Promise((resolve, reject) => {
        if(sessionStorage.getItem("user")){
            const data =  JSON.parse(sessionStorage.getItem("user"))
            resolve(data)
        }else{
            reject(null)
            window.location.assign("/")
        }
    })
}

export const logOut = ()=>{
    return new Promise((resolve, reject) => {
        sessionStorage.removeItem('user')
        location.reload()
    })
}