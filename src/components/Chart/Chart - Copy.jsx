//import { useEffect, useState } from "react";
import React, {useState, useEffect} from 'react';
import{ fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
//import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {

        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        //console.log(dailyData);
        fetchAPI();

    });

    const lineChart = (
        /*dailyData.length != 0
        ? (*/
        <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({ positive}) => positive),
                    label: 'Positive',
                    borderColor: '#3333ff',
                    fill: true,
                }, 
                {
                    data: dailyData.map(({ death}) => death),
                    label: 'Death',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />// : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;