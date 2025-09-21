import { AuthContext } from "./authContext";


const AuthProvier = ({children}) => {

    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvier;