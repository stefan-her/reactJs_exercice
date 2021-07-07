import PropTypes from 'prop-types';
import style from './students.module.css';
import classNames from 'classnames';

const Student = (props) => {
    const {firstname, lastname, option, sexe, result} = props;
    let cs = classNames({[style.student]: true}, {[style.fail]: (result < 50) ? true : false});

    return(
        <div className={cs}>
            <h1>
                {firstname.charAt(0).toUpperCase() + firstname.substring(1).toLowerCase()} {lastname.charAt(0).toUpperCase() + lastname.substring(1).toLowerCase()}
            </h1>
            <p>{sexe}</p>
            <h2>{option}</h2>
            <p className={style.result}>{result}</p>
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