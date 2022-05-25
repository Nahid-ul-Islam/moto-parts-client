import React, { useEffect } from 'react';

const useToken = (user) => {
    useEffect( () => {
        const email = user?.user?.email;
        console.log('email', email);
        const currentUser = { email: email};
        if(email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                //alert('user added to database');
            })
        }
    }, [user])
    return [];
};

export default useToken;