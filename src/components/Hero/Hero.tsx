import React from "react";
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.hero_container}>
                <div className={styles.hero_content}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hi, it's me!</p>
                        <h3 className={styles.text_2}>Sattaphon Suphorm-Ain</h3>
                        <p className={styles.text_3}>
                            <span style={{ marginRight: '10px'}}>I'm a</span> 
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Full Stack Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                />
                        </p>
                        <p className={styles.text_4}>
                            I have experience in web development and mobile application development. I am passionate about creating innovative and user-friendly applications that solve real-world problems. I am always eager to learn new technologies and improve my skills to stay up-to-date with the latest trends in the industry.
                        </p>
                        <ul className={styles.hero_social}>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                            <li><a href="#"><FaFacebookF/></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    ) 
}

export default Hero;