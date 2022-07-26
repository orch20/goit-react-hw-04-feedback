
export const Statistics = ({ stats }) => {

    return (
        <>
            {Object.key(stats).map((key, i) => (<p>{key}</p>) }
        </>
    )
};
