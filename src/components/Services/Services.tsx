import React from "react";
import styles from "./Services.module.css"
import { FaCode, FaPrint, FaDesktop } from 'react-icons/fa'

function Services() {
    return (
        <div className={styles.services_con}>
            <h3 className={styles.services_title}>My Services</h3>
            <div className={styles.services_list}>
                <div className={styles.services_items}>
                    <FaCode />
                    <h4>Web Development</h4>
                    <p>
                        Custom websites and web applications built with modern technologies.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaPrint />
                    <h4>Web Design</h4>
                    <p>
                        High-quality printing solutions for all your business needs.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaDesktop />
                    <h4>Desktop Applications</h4>
                    <p>
                        Robust desktop applications designed for performance and usability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;