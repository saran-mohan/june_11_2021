import React, { useEffect, useState } from 'react';

const PhoneNumber = () => {

    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        console.log('phoneNumber validation can be done here ', phoneNumber);
    }, [phoneNumber])

    return (
        <>
            <label>Number</label>
            <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
        </>
    );
}

export default PhoneNumber;
