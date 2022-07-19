import React, { FormEventHandler, useEffect } from "react";
import axios from "axios";
// @ts-ignore
import { firestore } from '../utils/firebase.ts'
import { collection, updateDoc, doc } from 'firebase/firestore'

async function handleChangeInformation (e) {
    e.preventDefault();
    let submittedData = e.target[0].value;
    submittedData = submittedData.replaceAll(`\n`, `<br />`);

    const docRef = doc(firestore, 'pages', 'about');
    updateDoc(docRef, { main_body: submittedData });
}

const ManageAbout = () => {
    useEffect(() => {
        var inputElm = document.querySelector(`#inputData`) as HTMLInputElement;
        inputElm.defaultValue = (JSON.parse(window.localStorage.getItem('aboutData')).fields.main_body.stringValue).replaceAll(`<br />`, `\n`);
    }, []);
    // inputElm ? inputElm.defaultValue = `` : null;
    return (
        <div className="flex py-24 justify-center min-h-screen">
            <div className="p-12 text-center max-w-2xl">
                <div className="md:text-3xl text-3xl font-bold">Manage About Page Information</div>
                <div className="my-6 flex justify-start relative">
                    Please be sure to double check spelling and grammar before submitting.
                </div>
                <form onSubmit={handleChangeInformation} className="bg-gray-100 border-2 rounded-lg p-4 my-6">
                    <textarea id="inputData" className="border-2 border-black rounded-md p-2 text-xl font-normal mt-4 h-96 w-full" />

                    <div className="mt-6 flex justify-end h-12 relative">
                        <button type="submit" className="flex shadow-md font-medium absolute py-2 px-4 text-teal-100 cursor-pointer bg-teal-600 rounded text-lg tr-mt  svelte-jqwywd">Submit Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export { ManageAbout };