
export const GetDevices = async() => {
    try{
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
        .then(response => response.json())
    }
    catch(eror){
        alert(eror)
    }
}