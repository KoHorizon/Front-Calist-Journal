let baseUrl = 'http://localhost:8000'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const deleteToken = () => {
    return localStorage.removeItem('token');
}


export const RegisterAPI = async ({ username,email, password}) => {

    let response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    })

    let json = await response.json()
    return json
}



export const LoginAPI = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}/authentication_token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json
}



export const getSeances = async() => {
    let response = await fetch(`${baseUrl}/api/seances`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
    })
    let json = await response.json()

    return json
}



export const getSeancesyId = async(id) => {
    let response = await fetch(`${baseUrl}/api/seances/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
    })
    let json = await response.json()

    return json
}



export const getExoById = async(idd) => {

    const id =  idd.slice(-2)

    let response = await fetch(`${baseUrl}/api/exercices/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
    })
    let json = await response.json()

    return json
}





export const CreateExerciceAPI = async (exercice) => {
    let dataOfCreatedExercice = exercice
    let response = await fetch(`${baseUrl}/api/exercices`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify( dataOfCreatedExercice )
    })
    let json = await response.json()

    return json
}