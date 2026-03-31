// import React from 'react';
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

export default function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1585247226801-bc613c441316?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Project Title</p>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}