import { 
    registerUser
} from './services';

const stringToObject = (str) => {
    const fullString = str == '' ? '[]' : '[' + str.split('][').join('],[') + ']';
    return JSON.parse(fullString);
}



const UserServices = async (req, res ) => {
    const action = req.params[0];


    
    switch(action) {
        case 'register-user':
            await registerUser(req, res);
            break;
    }
}

export default UserServices;