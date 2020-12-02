// import statements
import React from 'react';
//the cards are components that come from @material-ui/core
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';

// gets data from the api to use in the cards
const Cards = ({data: {positive, recovered, death, date}}) => {
// if there is no positive number return an error that says 'Loading'
    if (!positive) {
        return 'Loading...';
    }
    console.log (positive);
    
    
    
    


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/*the xs and md shows how to display the card on an extra small and medium device */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.positive)}>
                    {/*this is the first card which shoes the number of positive results*/}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Positive
                        </Typography>
                        <Typography variant="h5">
                             {/*gets positive value */}
                               {positive}
                           
                        </Typography>
                        {/*gets date last updated */}
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Active cases of covid</Typography>
                    </CardContent>
                </Grid>
                {/*the xs and md shows how to display the card on an extra small and medium device */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    {/*start of the second card which shows the number of recoveries */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        {/*gets recovered value */}
                        <Typography variant="h5">{recovered}</Typography>
                        {/*gets date last updated */}
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Num of recoveries from covid</Typography>
                    </CardContent>
                </Grid>
                {/*the xs and md shows how to display the card on an extra small and medium device */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>
                    {/*start of the third card which shows the number of deaths */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        {/*gets death value */}
                        <Typography variant="h5">{death}</Typography>
                        {/*gets date last updated */}
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Num of deaths from covid</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}



export default Cards;