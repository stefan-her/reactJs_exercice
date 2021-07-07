import PropTypes from 'prop-types';

const Student = (props) => {
    const {firstname, lastname, option, sexe, result} = props;

    return(
        <div>
            <h1>
                {firstname.charAt(0).toUpperCase() + firstname.substring(1).toLowerCase()} {lastname.charAt(0).toUpperCase() + lastname.substring(1).toLowerCase()}
            </h1>
            <p>{sexe}</p>
            <h2>{option}</h2>
            <p>{result}</p>
        </div>
    );
}


Student.defaultProps = {
    sexe: "x"
}

Student.propTypes = {
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    sexe: PropTypes.string,
    option: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
}

export default Student