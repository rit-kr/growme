import "../../utils/stylesheets/login.scss";
import { Paper, Stack, TextField, Button } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [form, setForm] = useState({ name: "", mobile: "", email: "" });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        if (!form.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!form.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email is invalid';
        }
        if (!form.mobile.trim()) {
            errors.mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(form.mobile)) {
            errors.mobile = 'Mobile number is invalid';
        }
        setForm((prev) => ({ ...prev, errors }));


        if (Object.keys(errors).length === 0) {
            setForm(form);
            localStorage.setItem("userInfo", JSON.stringify(form))
            navigate("/user");
            window.location.reload(true);
            console.log("form", form);
        }
    }
    return (
        <>
            <div className="login_page">
                <div className="container">
                    <Paper elevation={4} padding={2}>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2} paddingTop={2}
                        >
                            <AccountCircleIcon color='primary' fontSize='large' />
                        </Stack>
                        <div className='text_grid'>
                            {/* <form onSubmit={handleSubmit}> */}
                                <Stack container spacing={2}>
                                    <Stack xs={12} item >
                                        <TextField
                                            id="standered-basic"
                                            label="Name"
                                            placeholder='Enter name'
                                            color="warning"
                                            fullWidth
                                            value={form.name}
                                            error={!!form.errors?.name}
                                            helperText={form.errors?.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </Stack>
                                    <Stack xs={12} item>
                                        <TextField
                                            id="standered-basic"
                                            label="Phone number"
                                            type="number"
                                            placeholder='Enter Phone number'
                                            color="warning"
                                            fullWidth
                                            required
                                            value={form.mobile}
                                            error={!!form.errors?.mobile}
                                            helperText={form.errors?.mobile}
                                            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                        />
                                    </Stack>
                                    <Stack xs={12} item>
                                        <TextField
                                            id="standered-basic"
                                            label="Email"
                                            type="email"
                                            placeholder='Enter email'
                                            color="warning"
                                            fullWidth
                                            required
                                            value={form.email}
                                            error={!!form.errors?.email}
                                            helperText={form.errors?.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </Stack>
                                    <Stack xs={12} item>
                                        <Button variant='contained' color='primary' fullWidth
                                        onClick={handleSubmit}
                                        >Submit</Button>
                                    </Stack>
                                </Stack>
                            {/* </form> */}
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}