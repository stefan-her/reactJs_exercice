import PropTypes from 'prop-types';
import Student from './student';

const Students = (props) => {
    const lis = props.liste.map((s) => 
        <Student key={s.id} data={s}/>
    );


    return(
        <>
            <h1>la liste</h1>
            {lis}
        </>
    );
}

export default Students