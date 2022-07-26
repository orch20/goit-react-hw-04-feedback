import PropTypes from 'prop-types';

export const Button = ({ option }) => {
       console.log(option);
    return (
        <>
            {Object.keys(option).map((name, i) => (
                <button key={i}>{name}</button>))
            }
        </>
    );
};


