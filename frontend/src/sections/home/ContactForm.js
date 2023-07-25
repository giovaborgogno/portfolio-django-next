import { useState } from 'react';
// @mui
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components

import { send_email } from '@/utils/api';

// ----------------------------------------------------------------------

const ContactForm = () => {

    const [sendingEmail, setSendingEmail] = useState(false)

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: ''
    });

    const {
        full_name,
        email,
        subject,
        message
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        const sendEmail = async () => {
            setSendingEmail(true)
            await send_email(
                full_name,
                email,
                subject,
                message
            )
            setSendingEmail(false)
        }
        sendEmail()
        setFormData({
            full_name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <form onSubmit={e => onSubmit(e)}>

                <Stack spacing={3}>
                    <TextField
                        name="full_name" label="Full name"
                        onChange={e => onChange(e)}
                        value={full_name}
                        required />
                    <TextField
                        name="email" label="Email address"
                        onChange={e => onChange(e)}
                        value={email}
                        required />
                    <TextField
                        name="subject" label="Subject"
                        onChange={e => onChange(e)}
                        value={subject}
                        required />
                    <TextField
                        name="message" label="Write your message" multiline rows={4}
                        onChange={e => onChange(e)}
                        value={message}
                        required />

                </Stack>



                {sendingEmail ?
                    <LoadingButton fullWidth size="large" variant="contained" sx={{ mt: 3, backgroundColor: '#5BE9B9 !important', '&:hover': { backgroundColor: "#6E07F3 !important" } }} >
                        Sending...
                    </LoadingButton>
                    :
                    <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ mt: 3, backgroundColor: '#5BE9B9 !important', '&:hover': { backgroundColor: "#6E07F3 !important" } }} >
                        Send message
                    </LoadingButton>
                }


            </form>
        </>
    );
}

export default ContactForm