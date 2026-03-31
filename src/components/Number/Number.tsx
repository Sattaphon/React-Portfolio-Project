import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Number() {
    return (
        <div className={styles.number_con}>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {(isVisible: boolean ) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={10} duration={5} /> : 0}+
                            </div>
                        )}
                    </VisibilitySensor>
                    {/* 20+ */}
                </h3>
                <p>Projects Completed</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {(isVisible: boolean ) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={50} duration={5} /> : 0}+
                            </div>
                        )}
                    </VisibilitySensor> */}
                    1+
                </h3>
                <p>Companies Helped</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {(isVisible: boolean ) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={2} duration={5} /> : 0}+
                            </div>
                        )}
                    </VisibilitySensor> */}
                    2+
                </h3>
                <p>Years of Experience</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {(isVisible: boolean ) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={20} duration={5} /> : 0}+
                            </div>
                        )}
                    </VisibilitySensor> */}
                    20+
                </h3>
                <p>Happy Clients</p>
            </div>
        </div>
    )
}