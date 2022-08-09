/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Tabs from '../../components/Tabs/Tabs';
import './About.css';

const style = makeStyles(theme => ({
    AboutBackground: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        paddingTop: '190px',
        paddingBottom: '190px',
        backgroundColor: '#282C34',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    aboutcard: {
        width: '471px',
        height: '627px',
        marginRight: '7vh',
        [theme.breakpoints.down('lg')]: {
            width: '380px',
        },
        [theme.breakpoints.down('md')]: {
            width: '380px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '380px',
        }
    },
    cardMedia: {
        background: 'require("../../assets/menProfile.jpg")',
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'
    },
    box: {
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    aboutText: {
        textAlign: 'left',
        fontSize: '40px',
        fontFamily: 'Touche',
        color: 'white',
        paddingBottom: '17px',
        [theme.breakpoints.down('lg')]: {
            paddingBottom: '17px 0',
            textAlign: 'center'
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '17px 0',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '17px 0',
            textAlign: 'center'
        }
    },
    experienceText: {
        width: '94%',
        fontSize: '19px',
        fontFamily: 'Arial',
        color: 'white',
        lineHeight: '36px',
        paddingBottom: '33px',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            textAlign: 'center'
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center'
        }
    },
    SkillList: {
        'ul': {
            display: 'flex',
        },
        'li': {
            padding: '20px'
        }
    },
}))

const About = (props) => {
    const classes = style()
    return (
        <div className={classes.AboutBackground}>
            <Container>
                <div className={classes.box}>
                    <Box>
                        <Typography className={classes.aboutText}>About Us</Typography>
                        <Typography variant="p" component="p" className={classes.experienceText}>
                            I am a Front Web Developer with 7 Years of experience
                            in Web Development. My experience allows me to build
                            modern & successful implementations with high quality,
                            professional appearance, and feel.
                            I am a motivated & hardworking computer programmer
                            looking to utilize my technical & professional experience
                            to advance in a respectable business to achieve personal
                            and corporate growth. I'm interested in developing cross
                            platform web apps & interactive front-end templates.
                            I understand that every website that represents a business
                            is highly important.
                        </Typography>
                        {/* <div className='SkillList'>
                            <Tabs />
                        </div> */}
                    </Box>
                    <Box className='box'>
                        <Card className={classes.aboutcard}>
                            <CardMedia className={classes.cardMedia} image={require('../../assets/menProfile.jpg')} />
                        </Card>
                    </Box>

                </div>

            </Container>
        </div>
    )
}

export default About;