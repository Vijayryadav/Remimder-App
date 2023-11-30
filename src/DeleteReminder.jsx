import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import appwriteMethods from './dbmethods';
import { useParams } from 'react-router-dom';


const DeleteReminder = () => {
    const [reminders, UpdateReminders] = useState([]);

    const navigate = useNavigate()
    const getReminders = async (event) => {
        try {
            const res = await appwriteMethods.getReminders();

            UpdateReminders(res);
            console.log(res);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getReminders();
    })
    return (
        <div>
            {reminders.map((reminder, key) => {
                return (
                    <div key={key}>
                        <h1 >{reminder.date}</h1>
                        <button onClick={() => {
                            appwriteMethods.deleteReminder(reminder.$id);
                        }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DeleteReminder