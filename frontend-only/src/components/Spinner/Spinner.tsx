import './Spinner.scss';

const Spinner = ({isActive}: any) => {
    return (
        isActive &&
        <div className='spinner'></div>

    );
};

export default Spinner;