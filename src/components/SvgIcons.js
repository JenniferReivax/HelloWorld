import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
    },
    iconHover: {
        '&:hover': {
            color: red[800],
        },
    },
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function SvgIcons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HomeIcon
                color="primary"
                fontSize="large"
                component={svgProps => {
                    return (
                        <svg {...svgProps}>
                            <defs>
                                <linearGradient id="gradient1">
                                    <stop offset="30%" stopColor={blue[400]} />
                                    <stop offset="70%" stopColor={red[400]} />
                                </linearGradient>
                            </defs>
                            {React.cloneElement(svgProps.children[0], {
                                fill: 'url(#gradient1)',
                            })}
                        </svg>
                    );
                }}
            />
        </div>
    );
}