import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import appwriteMethods from './dbmethods';

const Enable = () => {
    const [reminders, UpdateReminders] = useState({});
    const params = useParams()
    const navigate = useNavigate()
    const getReminder = async (event) => {
        try {
            const res = await appwriteMethods.getReminder(params.id);
            UpdateReminders(res);
            console.log(res);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getReminder();
    })
    return (
        <div>
            <h1>{reminders.select}</h1>
            <pre>{reminders.desc}</pre>
            <button onClick={() => {
                appwriteMethods.enableReminder(params.id);
                navigate('/enableReminders')
            }
            }>Enable</button>
            <button onClick={() => navigate('/enableReminders')}>Back</button>
        </div>
    )
}

export default Enable