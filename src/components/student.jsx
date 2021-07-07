import PropTypes from 'prop-types';
import style from './students.module.css';
import classNames from 'classnames';

const Student = (props) => {
    const {firstname, lastname, option, sexe, result} = props;
    const cs = classNames({[style.student]: true}, {[style.fail]: (result < 50) ? true : false});
    const val = (result) ? result : "pas de résultat";
    let grade = null;
    if(result) {
        switch(true) {
            case result > 95 : grade = "E";
                break;
            case result >= 80 : grade = "TB";
                break;
            case result >= 60 : grade = "B";
                break;
            case result >= 50 : grade = "S";
                break;
            case result >= 40 : grade = "I";
                break;
            case result < 40 : grade = "IG";
                break;
        }        
    }

    return(
        <div className={cs}>
            <h1>
                {firstname.charAt(0).toUpperCase() + firstname.substring(1).toLowerCase()} {lastname.charAt(0).toUpperCase() + lastname.substring(1).toLowerCase()}
            </h1>
            <p>{sexe}</p>
            <h2>{option}</h2>
            <p><span className={style.result}>{val}</span> <span className={style.grade}>{grade}</span></p>
        </div>
    );
}


Student.defaultProps = {
    sexe: "x",
}

Student.propTypes = {
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    sexe: PropTypes.string,
    option: PropTypes.string.isRequired,
    result: PropTypes.number
}

export default Student