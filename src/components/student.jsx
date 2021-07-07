import PropTypes from 'prop-types';

const Student = (props) => {
    const {firstname, lastname, option, sexe, result} = props.data;

    return(
        <div>
            <h1>
                {firstname.charAt(0).toUpperCase() + firstname.substring(1).toLowerCase()} 
                {lastname.charAt(0).toUpperCase() + lastname.substring(1).toLowerCase()}
            </h1>
            <p>{sexe}</p>
            <h2>{option}</h2>
            <p>{result}</p>
        </div>
    );
}

export default Student