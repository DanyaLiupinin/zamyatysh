import "./Userdata.scss";

const Userdata = ({data, changeDataHandler}: any) => {




    return (
        <form className="userdata">

<div className="data">
        <p className="data__name">name: </p>
        <input
            min={1}
            max={25}
            className="data__content"
            value={data.name}
            onChange={(e) => changeDataHandler("name", e.target.value)}
        />
    </div>

    
<div className="data">
        <p className="data__name">email: </p>
        <input
            min={1}
            max={25}
            className="data__content"
            value={data.email}
            onChange={(e) => changeDataHandler("email", e.target.value)}
        />
    </div>

    
<div className="data">
        <p className="data__name">phone: </p>
        <input
            min={1}
            max={25}
            className="data__content"
            value={data.phone}
            onChange={(e) => changeDataHandler("phone", e.target.value)}
        />
    </div>

        </form>
    );
};

export default Userdata;
