import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Bank = ({name}) => {
    return (
        <div className="bank_name">
            <p>{name}</p>
        </div>
    )
};

Bank.propTypes = { name:PropTypes.string.isRequired }

const CardNumber = ({cardno}) => {
    const {no1,no2,no3,no4}=cardno;
    return (
        <div className="card_no">
            {no1} {no2} {no3} {no4}
        </div>
    )
};

CardNumber.propTypes = { cardno: PropTypes.shape(
  {  no1:PropTypes.number.isRequired,
    no2:PropTypes.number.isRequired,
    no3:PropTypes.number.isRequired,
    no4:PropTypes.number.isRequired}
) };

const MiniNumber=({mini})=>{
    const {no1}=mini
    return(
        <div className="mini">
            {no1}
        </div>
    )
}

MiniNumber.propTypes={
    mini:PropTypes.shape({
        no1:PropTypes.number.isRequired,
    })
};

const Validity = ({vald}) => {
    
    return (
        <div className="valid">
            <div className="valid_date">
                <div className="step1">
                    <div className="vl">
                        VALID
                    </div>
                    <div className="thru">
                        THRU
                    </div>
                </div>
                <div className="step2">
                    <div className="val_date">
                        {vald}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const CardHolderName = ({c_holder}) => {
    return (
        <div className="card_holder">
            {c_holder}
        </div>
    )
}

function CreditCard({crinfo}) {
    return (
        <div className="creditcard_out">
            <Bank name={crinfo.bank_name}/>
            <CardNumber cardno={crinfo.card_no} />
            <MiniNumber mini={crinfo.card_no} />
            <Validity vald={crinfo.dt} />
            
            <CardHolderName c_holder={crinfo.card_holder} />
        </div>
    )
}


const creditCardInfo = {
    bank_name:"Big Bank, Inc.",
    card_no: {
        no1: 1234,
        no2: 4567,
        no3: 7891,
        no4: 4321
    },
    dt: "08/19",
    card_holder: "CARDHOLDER NAME"
}

ReactDOM.render(<CreditCard crinfo={creditCardInfo} />, document.querySelector("#root"));