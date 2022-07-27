
export const Statistics = ({ stats }) => {

    return (
        <>
            {Object.keys(stats).map((key, i) => (<p key={i} >{key}: {stats[key]}</p>)) }
        </>
    )
};
