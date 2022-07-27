import PropTypes from 'prop-types';

export const Button = ({ option, handleClick }) => {
       console.log(option);
    return (
        <>
            {Object.keys(option).map((name, i) => (
                <button type='button' onClick={handleClick} key={i}>{name}</button>))
            }
        </>
    );
};


