import {useState, useEffect} from 'react';
import axios from 'axios';
import { app } from '../utils/firebase.ts';

const PhysicianInformation = () => {
    const [physicians, setPhysData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getPhysicians() {
        setLoading(true);
        let collection_ref = await app.firestore().collection('Auto Suggestions').orderBy('drType', 'asc');
        collection_ref.onSnapshot((qs) => {
            let items = [];
            qs.map((doc) => {
                items.push(doc.data());
        })
        setPhysData(items);
        setLoading(false);
    });
    }
    useEffect(() => {
        window?.localStorage.getItem('physicianData') === null ? getPhysicians() : setPhysData(JSON.parse(window?.localStorage.getItem('physicianData')));
        setLoading(false)
    }, []);

    if (loading) return <div>Loading...</div>;

    return (<>
        physician stuff
    </>)
}

export { PhysicianInformation }