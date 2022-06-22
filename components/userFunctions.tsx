import { useState, useEffect } from 'react';

const UserFunctions = () => {
    if (typeof window !== undefined) {
        console.log(window)
        const [userData, setUserData] = useState(findData);
        function findData() {
            let data = JSON.parse(localStorage.getItem('userInfo'));
    
            setUserData(data)
    
            console.log(userData)
    
            return JSON.parse(localStorage.getItem('userInfo'))
        }
    }
    // useEffect(() => {
    //     findData()
    // }, [])

    return (
        <div className='container m-auto p-auto min-h-screen flex'>
            <div className='text-large m-auto p-6 border rounded'>THIEHT</div>
        </div>
    )
}

export { UserFunctions }