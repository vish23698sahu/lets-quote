import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p className={classes.noquotes__NA}>No quotes found!</p>
      <Link className='btn' to='./new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
