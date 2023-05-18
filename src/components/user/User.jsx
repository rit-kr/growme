import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {

    const[userInfo, setUserInfo] = useState([]);

    const getUserDetails = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log("res items", response);
            setUserInfo(response.data)
        } catch (error) {
            console.error(error.message);

        }
    }

    useEffect(() => {
        getUserDetails()
    }, []);


    return (
        <>
            <h1>user</h1>
            <div>
                { userInfo?.map(item =>
                <li className="list">
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                </li>
                    )
                }
            </div>
        </>
    )
}