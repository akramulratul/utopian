import React from 'react';
import TableRow from './TableRow';

const ProfileDetails = () => {
    return (
        <div className='details-wrapper'>
            <TableRow title='Full Name' data='Regina Cooper' />
            <TableRow title='Email' data='reginaCooper@email.com' />
            <TableRow title='Phone Number' data='+88012312332' />
            <TableRow title='Current Level' data='User Level' />
            <TableRow title='About' data='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
            <TableRow title='Address' data='121, road name, Dhaka' />
            <TableRow title='City' data='Dhaka' />
            <TableRow title='Country' data='Bangladesh' />
        </div>
    );
};

export default ProfileDetails;