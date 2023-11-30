import React, { useEffect, useState } from 'react'
import appwriteMethods from './dbmethods';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [username, setUsername] = useState('');
    const persistUser = async () => {
        try {
            const response = await appwriteMethods.getAccount();
            console.log(response);
            // token = response.$id;
            setUsername(response.email);
            return response;
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        persistUser()
        return () => {
            clearInterval(interval);
        };
    }, []);

    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });

    const formattedDate = `Today is ${currentDay}, ${currentDate.getDate()}th of ${month}`;
    const navigate = useNavigate()
    return (
        <>
            <h1 className="text-xl font-bold text-gray-700 mb-4">Welcome to the remiders application {username}</h1>
            <h2 className="text-xl font-bold text-gray-700 mb-4">{formattedDate}</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/reminders');
                    }
                }
            >Set Reminder</button>

            //? Modify Reminder
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/modify');
                    }
                }
            >Modify Reminder</button>
            //? Delete Reminder
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/delete');
                    }
                }
            >Delete Reminder</button>
            //? Disable Reminder
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/disable');
                    }
                }
            >Disable Reminder</button>
            //?Enable Reminder
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/enable');
                    }
                }
            >Enable Reminder</button>

            //? View Your reminders
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={
                    () => {
                        navigate('/view');
                    }
                }
            >View Your Reminders</button>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={async () => {
                    await appwriteMethods.logout();
                    localStorage.setItem('token', null);

                    navigate('/login');
                }}
            >Logout</button>
        </>
    )
}

export default Home