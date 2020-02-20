import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getLanguage } from '../redux/selectors';
import { changeLanguage } from '../redux/store/language/actions';

import styles from "../styles/Landing.module.scss";
import Card from "./Card";

const language: any = {
  en: {
    changeLanguage: "Change language",
    header: "Creating a React - Typescript application from scratch",
    title: "Card 1"
  },
  ar: {
    changeLanguage: "تغيير اللغة",
    header: "تطبيق من البداية Typescript - React إنشاء",
    title: "بطاقة ١"
  }
};

const Landing = (): JSX.Element => {
  const dispatch = useDispatch();
  const { code: locale } = useSelector(getLanguage);

  const handleClick = () => {
    const code = locale === 'en' ? 'ar' : 'en';
    dispatch (changeLanguage({code}))
  }

  return (
  <div className={styles.container}>
    <h1>{language[locale].header}</h1>
    <button onClick={handleClick}>{language[locale].changeLanguage}</button>
    <Card title={language[locale].title} />
  </div>
);
}
export default Landing;
