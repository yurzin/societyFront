import React from 'react';
import './Users.css';

const User = data => {
    return (
        data['data'].map(({id, name, last_name, photo, age, city, email, phone}) => {
            return (
                <div key={id} className='vakancy-page-block company-list-search__block resume-list__block p-rel mb16'>
                    <div className="company-list-search__block-left">
                        <div className='resume-list__block-img mb8'>
                            <img src={photo} alt="profile"/>
                        </div>
                    </div>
                    <div className="company-list-search__block-right">
                        <div className="mini-paragraph cadet-blue mobile-mb12">Обновлено {}</div>
                        <h3 className="mini-title mobile-off">{name}</h3>
                        <div className="d-flex align-items-center flex-wrap mb8 ">
                            <span className="mr16 paragraph">{last_name}</span>
                            <span className="mr16 paragraph">Возраст  {age}</span>
                            <span className="mr16 paragraph">{email}</span>
                            <span className="mr16 paragraph">{city}</span>
                        </div>
                    </div>
                    <p className="paragraph tbold mobile-off">Последнее место работы</p>
                    <div className="company-list-search__block-middle">
                        <p className="paragraph mb16 mobile-mb32">{phone}</p>
                    </div>
                </div>
            )
        }))
};

export default User;