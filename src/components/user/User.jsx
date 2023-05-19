import "./user.scss";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 90, color: 'gray' },
    {
        field: 'title',
        headerName: 'Title',
        width: 450,
        //   editable: true,
    },
    {
        field: 'body',
        headerName: 'Description',
        width: 1300,
        // editable: true,
    },
];


export default function User() {

    const [userInfo, setUserInfo] = useState([]);

    const navigate = useNavigate();

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

    const handleBackToLogin = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload(true);
    }

    const handleBackToDepartment = () => {
        navigate('/department');
        window.location.reload(true);
    }

    return (
        <Paper elevation={4} padding={2}>

            <Box sx={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={userInfo}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    columnThreshold={3}
                />
            </Box>
            <div className='btn-container'>
                <Button
                    onClick={handleBackToLogin}
                >
                    Back to login
                </Button>
                <Button
                    onClick={handleBackToDepartment}
                >
                    Back to Department
                </Button>
            </div>

        </Paper>
    );
}






