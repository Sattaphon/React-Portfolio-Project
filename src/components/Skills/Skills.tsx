// import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs  } from 'react-icons/fa6'
import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaHtml5 />
            </li>
            <li>
                <FaCss3Alt />
            </li>
            <li>
                <FaJs />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaNodeJs />
            </li>
            <li>
                <TbBrandCSharp />
            </li>
        </ul>
    </div>
  )
}
