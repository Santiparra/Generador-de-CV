import React from "react";


const GenInfo = (props) => {
  const { names } = props;
  const { cities } = props;
  const { mails } = props;
  const { dborn } = props;
  const { phones } = props;  

  return (

    <div className="generalInfo">
        {/* <div className="name">
                {names.map((name) => {
                    return <li key={name.id}>{name.text}</li>;
                })}
        </div>
        <div className="city">
                {cities.map((city) => {
                    return <li key={city.id}>{city.text}</li>;
                })}
        </div>
        <div className="mail">
                {mails.map((mail) => {
                    return <li key={mail.id}>{mail.text}</li>;
                })}
        </div>            
        <div className="born">
                {dborn.map((born) => {
                    return <li key={born.id}>{born.text}</li>;
                })}
        </div>

        <div className="phone">
                {phones.map((phone) => {
                    return <li key={phone.id}>{phone.text}</li>;
                })}
        </div> */}

        
    </div>  
  );
};

export default GenInfo;