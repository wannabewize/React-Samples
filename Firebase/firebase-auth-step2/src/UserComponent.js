import { useSelector } from 'react-redux';

export const UserComponent = () => {
    const user = useSelector(state => state.user);
    return (
        <>
            <h3>User Info</h3>
            { user ? 
                <ul>
                    <li>uid : {user.uid}</li>
                    <li>email : {user.email}</li>
                </ul>
                : null
            }
        </>
    )
}