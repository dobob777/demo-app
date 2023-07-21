import React, { useEffect, useState } from 'react'

const Hello = (API) => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        async function clickToSave() {
            fetch(API)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setAllData(data)
                })
        }
        clickToSave()
    }, [])
    return allData;
}

export default Hello
