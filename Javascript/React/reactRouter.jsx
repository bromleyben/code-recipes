import React from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";

// Simple Router
function SimpleRouter() {
return (
    <Router>
        <ul>
            <li>
                <Link to="/">Form</Link>
            </li>
            <li>
                <Link to="/one">One</Link>
            </li>
            <li>
                <Link to="/two">Two</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/" exact>
                <h1>1</h1>
            </Route>

            {/* Alternative children param */}
            <Route path="/one" children={<h3>One</h3>} />
            <Route path="/two" children={<h3>Two</h3>} />
        </Switch>
    </Router>
)
}


// Custom Chevron Menu
{
    import React, {useState, useEffect} from 'react';
    import { makeStyles } from '@material-ui/core/styles';

    import {
        useLocation,
        useHistory
    } from "react-router-dom";

    const useStyles = makeStyles({
        root: {
            display: 'flex',

            '& > span': {
                boxSizing: 'border-box', 
                float: 'left',
                background: '#a2a2a2',
                height: 50,
                textAlign: 'center',
                padding: '15px 15px 15px 50px',
                position: 'relative',
                cursor: 'pointer',
                marginLeft: 10,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 14,

                '&::before': {
                    content: '""',
                    position: 'absolute',
                    border: '25px solid transparent',
                    borderLeftColor: '#fff',
                    top:0,
                    right: -60,
                },

                '&::after': {
                    content: '""',
                    position: 'absolute',
                    border: '25px solid transparent',
                    borderLeftColor: '#a2a2a2',
                    top:0,
                    right: -50,
                },

                '&.active': {
                    background: 'rgba(51,122,183, 0.75)',
                    color: 'white',

                    '&::after': {
                        borderLeftColor: 'rgba(51,122,183, 0.75)'
                    }
                },

                '&.complete': {
                    background: 'rgba(51,122,183, 0.4)',
                    color: 'white',

                    '&::after': {
                        borderLeftColor: 'rgba(51,122,183, 0.4)'
                    }
                },

                '&:nth-child(1)': {
                    zIndex: 1000,
                    marginLeft: 0,
                    paddingLeft: 30
                },

                '&:nth-child(2)': {
                    zIndex: 900,
                },

                '&:nth-child(3)': {
                    zIndex: 800,
                },

                '&:nth-child(4)': {
                    zIndex: 700,
                },

                '&:nth-child(5)': {
                    zIndex: 600,
                },
                '&:nth-child(6)': {
                    zIndex: 500,
                },
                '&:nth-child(7)': {
                    zIndex: 400,
                },
                '&:last-child': {
                    zIndex: 100,
                    paddingRight: 30,

                    '&::after, &::before': {
                        border: 'none'
                    }
                },
            },

        },
    });

    function StepMenu({links, ...props}) {
        const classes = useStyles(),
            [current, setCurrent] = useState(false),
            location = useLocation(),
            history = useHistory();

        function itemClick(idx, to) {
            history.push(to);
            setCurrent(idx);
        }

        useEffect(() => {
            const linkToSet = links.filter(l => l.to === location.pathname)[0] || {};
            setCurrent(linkToSet.idx || false);
        }, [location]);

        return <nav className={classes.root} {...props}>
            {links.map(l => (
                <span key={l.idx} 
                    className={current === l.idx ? 'active' : current > l.idx ? 'complete' : ''}
                    onClick={() => itemClick(l.idx, l.to)}>
                    {l.label}
                </span>
            ))}
        </nav>;
    }

    export default StepMenu;
}