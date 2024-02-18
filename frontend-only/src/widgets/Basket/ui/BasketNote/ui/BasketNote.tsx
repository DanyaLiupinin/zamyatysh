import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TLanguage } from "@types";
import content from '@locale/Basket.json';

import './BasketNote.scss';
import { selectLanguage, selectLoggedIn } from "../../../model/selectors/selectors";

export const BasketNote = () => {

    const loggedIn = useSelector(selectLoggedIn);
    const locale: TLanguage = useSelector(selectLanguage);

    return (
        <div className='basketNote'>
            {
                loggedIn &&
                <p className='basketNote__text'>
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla
                </p>
            }
            {
                !loggedIn &&
                <>
                    <p className='basketNote__text'>
                        {content.registerFor[locale]}
                    </p>
                    <button className='basketNote__register'>
                        <Link className='basketNote__register-text' to={"/register"}>
                            {content.register[locale]}
                        </Link>
                    </button>
                    <p className='basketNote__caption'>
                        {content.haveAccount[locale]}
                        <Link to={"/login"}> {content.login[locale]}</Link>
                    </p>
                </>
            }
        </div>
    );
};