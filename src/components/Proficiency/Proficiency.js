/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container, Grid, Avatar, CircularProgress, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import logoImg from '../../assets/index.png';
import HTMLIcon from '../../assets/HtmlIcon.png';
import CSSIcon from '../../assets/CSSIcon.png';
import JSIcon from '../../assets/JSIcon.png';
import ReactJS from '../../assets/reactJS.png';
import NodeJs from '../../assets/NodeJS.png';
import ReactNative from '../../assets/React-Native.png';
import Firebase from '../../assets/Firebase.jpg';
import Json from '../../assets/Json.png';
import MySQL from '../../assets/MySQL.png';
import './Proficiency.css'



const style = makeStyles(theme => ({
    ProficiencyBackground: {
        padding: '40px 0 80px',
        display: 'flex',
        backgroundColor: '#373738'
    },
    ProficiencyText: {
        fontSize: '55px',
        textAlign: "center",
        padding: '40px 0',
        color: '#fff',
        fontFamily: 'Touche'
    },
    Box: {
        // width: '355px',
        // height: '400px',
        backgroundColor: '#fff',
        boxShadow: '5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '10px',
        '&:hover': {
            transform: 'scale(1.10)',
            transitionDuration: '600ms',
            transitionProperty: 'all'
        }
    },
    logoCenter: {
        display: 'flex',
        padding: '5%',
        paddingBottom: '0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '80px',
        height: '80%',
        objectFit: 'none',
    },
    skillsText: {
        textAlign: 'center',
        fontSize: '1.6rem',
        paddingTop: '10px',
        paddingBottom: '20px'
    },
    PaddingLeft: {
        paddingLeft: '9%',
        display: 'flex'
    }

}))


const Proficiency = (props) => {
    const classes = style()
    return (
        <div className={classes.ProficiencyBackground}>
            <Container>
                <Box>
                    <Typography className={classes.ProficiencyText}>Proficiency</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.Box}>
                                {/* <Box className={classes.logoCenter}>
                                    <Avatar className={classes.logo} src={logoImg} />
                                </Box> */}
                                <Box>
                                    <Box>
                                        <CircularProgress variant="determinate" value={80} />HTML
                                        <CircularProgress variant="determinate" value={80} />CSS
                                        <CircularProgress variant="determinate" value={50} />Javscript
                                        <CircularProgress variant="determinate" value={60} />ReactJS
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default Proficiency;