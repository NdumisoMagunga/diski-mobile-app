import {AsyncStorage} from 'react-native';

class UserHandler {
    async saveUser(user) {
        try{
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch(error) {
            console.error('user Error', error.message);
        }
    };

    removeUser(){
        try{
            return AsyncStorage.removeItem('user');
        }catch(error){
            console.log('async error', error);
        }
    };

    isSignedIn() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('user')
                .then(res => {
                    if (JSON.parse(res) !== null) {
                        resolve(true);
                    }else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err));
        });
    }

    async getUser(){
        try{
            const value = await AsyncStorage.getItem('user');
            if (value !== null){
            return value;
            }
        }catch(error){
            console.log(error)
        }
    }

};

export const userhandler = new UserHandler();