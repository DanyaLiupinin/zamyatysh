import { useSelector } from "react-redux";

import Header from "../Header/Header";

import "./Account.scss";

import avatar from "../../images/logo.svg";

const Account = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);

    return (
        <>
            <Header />
            {/*<section className='account'>we are building account page c:</section>*/}
            {loggedIn && (
                <section className="account">
                    <h1 className="account__title">Account</h1>
                    <div className="account__container">
                        <div className="account__user-container">
                            <div className="account__user-avatar">
                                <img src={avatar}></img>
                            </div>
                            <div className="account__user-information-container">
                                <div className="account__user-information">
                                    <p>username: bla bla bla</p>
                                    <p>username: bla bla bla</p>
                                    <p>username: bla bla bla</p>
                                    <p>username: bla bla bla</p>
                                    <button className="account__edit-button">edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Account;
