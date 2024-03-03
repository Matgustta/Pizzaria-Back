
interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserServices{
    async execute ({name, email, password}:UserRequest){
        return {message: 'Going here!!'}
    }
}

export {CreateUserServices}