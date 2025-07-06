import React, { useState } from 'react';
import "../css/contact.css"
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import emailjs from 'emailjs-com';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InfoSnackbar from '../common/InfoSnackbar';

interface IContactForm {
    name: string;
    senderEmail: string;
    subject: string;
    message: string;
}

const Contact = () => {

    const { control, formState, register, handleSubmit, reset } = useForm<IContactForm>();
    const [loading, setLoading] = useState(false);
    const [infoSnackbarOpen, setInfoSnackbarOpen] = useState(false);
    const { errors } = formState;

    const onSubmit = async (data: IContactForm, e: any) => {
        setLoading(true);
        console.log(data);

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_NAME || "",
                process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
                e.target,
                process.env.REACT_APP_EMAIL_PUBLIC_KEY || ""
            );
            setInfoSnackbarOpen(true);
            reset();
        } catch (error) {
            console.log("error in sending message" + process.env.REACT_APP_EMAIL_SERVICE_NAME, error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact-me" className="contact">
            <h2>Contact</h2>
            <p style={{ marginTop: '40px' }} className="contact-des">
                Please contact me for further information
            </p>

            <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-address">
                        <img src="./images/icons8-address-50.png" alt="Address Icon" />
                        <div>
                            <h3>Address</h3>
                            <p>8/1 C Block, Sathasivam Road, Kattangulathur</p>
                        </div>
                    </div>

                    <div className="contact-num">
                        <img src="./images/icons8-call-50.png" alt="Call Icon" />
                        <div>
                            <h3>Call Me</h3>
                            <p>+91 63838 77960</p>
                        </div>
                    </div>

                    <div className="contact-email">
                        <img src="./images/icons8-email-50.png" alt="Email Icon" />
                        <div>
                            <h3>Email Me</h3>
                            <p>shrikadhir10@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="name-email-input">
                        <div className="name-input">
                            <label htmlFor='name'>Your Name</label>
                            <input
                                {...register("name")}
                                name='name'
                                id='name'
                                type="text"
                            />
                            <p className='error'>{errors.name?.message}</p>
                        </div>
                        <div className="email-input">
                            <label htmlFor='email'>Your Email</label>
                            <input
                                {...register("senderEmail", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Email is not valid"
                                    }
                                })}
                                name="senderEmail"
                                id="email"
                                type="email"
                            />
                            <p className='error'>{errors.senderEmail?.message}</p>
                        </div>
                    </div>

                    <div className="subject-input">
                        <label htmlFor='subject'>Subject</label>
                        <input
                            {...register("subject", {
                                required: "subject is required"
                            })}
                            name='subject'
                            id='subject'
                            type="text"
                        />
                        <p className='error'>{errors.subject?.message}</p>
                    </div>

                    <div className="message-input">
                        <label htmlFor='message'>Message</label>
                        <input
                            {...register("message", {
                                required: "message is required"
                            })}
                            name='message'
                            id='message'
                            type="text"
                        />
                        <p className='error'>{errors.message?.message}</p>
                    </div>

                    <Button
                        type='submit'
                        sx={{
                            backgroundColor: '#333',
                            color: 'white',
                            marginTop: 1,
                            alignSelf: 'center'
                        }}
                        size="medium"
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
            <DevTool control={control} />
            <InfoSnackbar
                message='message send successfully'
                open={infoSnackbarOpen}
                onClose={() => setInfoSnackbarOpen(false)}
            />
        </section>
    );
};

export default Contact;
