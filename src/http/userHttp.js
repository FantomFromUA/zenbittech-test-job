export const createAccount = async ({name, email, password}) => {
    const url = "https://zenbittech-test-job-backend-production.up.railway.app/auth/signup"
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.message[0]);
    }


    return data;
}

export const logIn = async ({email, password}) => {
    const url = 'https://zenbittech-test-job-backend-production.up.railway.app/auth/login';

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.message[0]);
    }


    return data;
}