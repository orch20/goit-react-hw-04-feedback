import {Notification} from './Notification'

export const Statistics = ({ stats, total, percentage}) => {
    console.log('total :>> ', Object.values(stats).some(value => value > 0));
    const isPositive = Object.values(stats).some(value => value > 0);

    return (
        <>
            {isPositive ? (
                <>
                    {Object.keys(stats).map((key, i) => (
                        <p key={i} >{key}: {stats[key]}</p>))}
                    <p>Total: {total}</p>
                    <p>Positive feedback: {percentage}%</p> </>) :
                (<Notification message="There is no feedback"/>)}
        </>
    );
};
