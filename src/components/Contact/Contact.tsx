import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

export default function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        Have questions or want to work together? Feel free to reach out!
                    </p>
                    <p className={styles.contact_address}>
                        867 Soi Pracha Uthit 19, <br />
                        Sam Sen Nok Subdistrict, <br />
                        Huai Khwang District, Bangkok 10310
                    </p>
                    <p><FaPhone /> 063-412-0938</p>
                    <p><FaEnvelope /> pleum.wz@gmail.com</p>
                </div>
                <div className={styles.contact_form}>
                    <form action="">
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" placeholder='Your First Name' />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" placeholder='Your Last Name' />
                            </div>
                        </div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder='eg. jonedoe@email.com'/>
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}