// import React from 'react';
import styles from './Testimonials.module.css'

export default function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Software Engineer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src="https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>Jane Smith</h4>
                    <p className={styles.bio}>UX Designer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>Bob Johnson</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
            </div>
        </div>        
    ) 
}