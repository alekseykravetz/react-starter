import React, { useEffect, useState } from 'react';


const CurrentDateTime = () => {
    // const classes = useStyles();
    const [currentTime, setCurrentTime] = useState(new Date().toISOString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toISOString());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            Current Time: {currentTime}
        </div>
    );
};

export default CurrentDateTime;
