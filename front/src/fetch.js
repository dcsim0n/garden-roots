function fetchAll(URL,callback){
    console.log(URL)
    fetch(URL)
    .then((resp)=>{
        if(resp.ok){
            return resp.json()
        }
        throw new Error("The sage is out to lunch, please try agian later")
    })
    .then(data => callback(data))
    .catch(error => console.log(error))
}

function postOne(URL,data,callback){
    fetch(URL,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(resp =>{
        if(resp.ok){
            return resp.json()
        }
    }).then(data => callback(data))
    .catch(error => console.log(error))
}

function patchOne(URL,id, data, callback){
    fetch(`${URL}/${id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(quote)
    }).then(resp=>callback(resp))
}

function deleteOne(URL,id,callback){
    fetch(`${URL}/${id}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    }).then((resp)=>callback(resp))
}
