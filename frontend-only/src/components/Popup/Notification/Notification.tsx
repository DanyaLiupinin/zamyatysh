import './Notification.scss';
import { Link } from 'react-router-dom';
import krestik from '../../../images/krestik.png';

const Notification = () => {

    return (
        <div className='notification'>
            <div className='notification__popup'>
                    <button>
                        <img className='notification__close-btn' src={krestik} alt='close' />
                    </button>

                <p>
                    Если вы зарегистрируетесь, то сможете отслеживать заказы в личном кабинете
                </p>
                <div className='notification__buttons'>
                    <button>
                        Продолжить оформление</button>
                    <button>
                        <Link to='/register'>
                            Зарегистрироваться
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;