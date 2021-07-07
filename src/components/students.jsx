import PropTypes from 'prop-types';
import Student from './student';

const Students = (props) => {
    const lis = props.liste.map((s) => 
        <Student key={s.id} {...s}/>
    );


    return(
        <>
            <h1>la liste des Students</h1>
            {lis}
        </>
    );
}

export default Students