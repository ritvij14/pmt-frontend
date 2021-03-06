import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#848484',
        marginBottom: '1rem',
        marginTop: '1rem',
        width: '225px',
        padding: '10px'
    },
    bullet: {
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 12,
    },
    pos: {
        marginBottom: 12,
    },
    action: {
        backgroundColor: '#ffffff',
    },
});

type Pagetype = {
    page: string;
    title: string;
};

const DashboardIssueCard = ({ page, title }: Pagetype) => {

    const classes = useStyles();

    return (
        <Card
            style={{ width: 'fit-container' }}
            className={classes.root}
            bgcolor='#646464'
            id='grow'>
            <CardContent className={classes.title}>
                <Typography variant='h6' component='h2'>
                    <b>{ title }</b>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DashboardIssueCard