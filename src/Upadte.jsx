import React, { useState } from 'react'
import appwriteMethods from './dbmethods';
import { useParams } from 'react-router-dom';

const Upadte = (props) => {
    const [desc, setDesc] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [sms, setSms] = useState('');
    const [date, setDate] = useState('');
    const [select, setSelect] = useState('Birthday');
    const [reminders, UpdateReminders] = useState([]);
    const state = useParams();
    console.log(`linkdata ${state.id}`);

    // const { $id } = state;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await appwriteMethods.updateReminder(state.id, desc, email, number, sms, date, select);
            console.log(res);
        } catch (error) {
            throw error;
        }
    };
    return (
        <div>
            <form className="bg-white p-10 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <label className="block mb-2 text-gray-700">Date</label>
                <input
                    required
                    type="date"
                    className="w-full p-2 bg-gray-200 border rounded-md text-gray-700"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <label className="block mb-2 text-gray-700">Subject</label>
                <select className="w-full p-2 bg-gray-200 border rounded-md text-gray-700" value={select} onChange={
                    (event) => {
                        setSelect(event.target.value)
                    }
                }>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Other">Other</option>
                </select>
                <label className="block mb-2 text-gray-700">Description</label>
                <textarea
                    className="w-full p-2 bg-gray-200 border rounded-md text-gray-700"
                    value={desc}
                    onChange={(event) => setDesc(event.target.value)}
                />
                <label className="block mb-2 text-gray-700">Email Address</label>
                <input
                    required
                    type="email"
                    className="w-full p-2 bg-gray-200 border rounded-md text-gray-700"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label className="block mb-2 text-gray-700">Contact No.</label>
                <input
                    type="number"
                    className="w-full p-2 bg-gray-200 border rounded-md text-gray-700"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                />
                <label className="block mb-2 text-gray-700">SMS No.</label>
                <input
                    type="number"
                    className="w-full p-2 bg-gray-200 border rounded-md text-gray-700"
                    value={sms}
                    onChange={(event) => setSms(event.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Upadte