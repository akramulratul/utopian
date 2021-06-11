import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = ({ firstOption, secondOption, thirdOption }) => {
    return (

        <div className="row m-0 p-0">
            <div className='col-lg-4 m-0  p-0'>
                <Link to={firstOption.link}>
                    <div className="profile-nav border text-center py-3">
                        <small><b>{firstOption.title}</b></small>
                    </div>
                </Link>
            </div>

            <div className='col-lg-4 m-0   p-0'>
                <Link to={secondOption.link}>
                    <div className="profile-nav border text-center py-3">
                        <small><b>{secondOption.title}</b></small>
                    </div>
                </Link>
            </div>
            <div className='col-lg-4 m-0  p-0'>
                <Link to={thirdOption.link}>
                    <div className="profile-nav border text-center py-3">
                        <small><b>{thirdOption.title}</b></small>
                    </div>
                </Link>
            </div>

        </div>

    );
};

export default SubNav;