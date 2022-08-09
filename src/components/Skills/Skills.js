/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container, Grid, Avatar } from '@material-ui/core';
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

const style = makeStyles(theme => ({
    SkillsBackground: {
        padding: '40px 0 80px',
        display: 'flex',
        backgroundColor: '#484a4c'
    },
    SkillText: {
        fontSize: '55px',
        textAlign: "center",
        padding: '40px 0',
        color: '#fff',
        fontFamily: 'Touche'
    },
    Box: {
        width: '355px',
        height: '400px',
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


const Skills = (props) => {
    const classes = style()
    return (
        <div className={classes.SkillsBackground}>
            <Container>
                <Box>
                    <Typography className={classes.SkillText}>Skills</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <div className={classes.Box}>
                                <Box className={classes.logoCenter}>
                                    <Avatar className={classes.logo} src={logoImg} sx={{objectFit: 'contain'}} />
                                </Box>
                                <Typography className={classes.skillsText}>Front End Development</Typography>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={HTMLIcon} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>HTML</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={CSSIcon} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>CSS</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={JSIcon} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>JavaScript</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={ReactJS}  style={{ height: '30px', objectFit: 'contain' }} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>React JS</Typography>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.Box}>
                                <Box className={classes.logoCenter} sx={{ padding: '5%' }}>
                                    <Avatar className={classes.logo} src={logoImg} sx={{objectFit: 'contain'}} />
                                </Box>
                                <Typography className={classes.skillsText}>Back End Development</Typography>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={NodeJs} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>Node JS</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={Json} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>JSON</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={MySQL} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>MySQL</Typography>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.Box}>
                                <Box className={classes.logoCenter} sx={{ padding: '5%' }}>
                                    <Avatar className={classes.logo} src={logoImg} sx={{objectFit: 'contain'}} />
                                </Box>
                                <Typography className={classes.skillsText}>Mobile App Development</Typography>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={ReactNative} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>React Native</Typography>
                                </Box>
                                <Box className={classes.PaddingLeft}>
                                    <Avatar src={Firebase} sx={{objectFit: 'contain'}} />
                                    <Typography style={{ paddingLeft: '4%', fontSize: '20px', paddingBottom: '10%' }}>FireBase</Typography>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Skills;