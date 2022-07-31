import PropTypes from 'prop-types';
import { Button } from './ButtonStyle';

export const FeedbackOptions = ({ option, handleClick }) => {
       console.log(option);
    return (
        <div>
            {Object.keys(option).map((name, i) => (
                <Button type='button' onClick={handleClick} key={i}>{name}</Button>))
            }
        </div>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};


