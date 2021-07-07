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

Students.defaultProps = {
    lis: PropTypes.arrayOf(PropTypes.shape({
        sexe: "x"
    }))
    
}

Students.propTypes = {
    lis: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        sexe: PropTypes.string,
        option: PropTypes.string.isRequired,
        resuslt: PropTypes.number.isRequired
    }))
}

export default Students