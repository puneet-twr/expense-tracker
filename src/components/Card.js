import './Card.css';
// Wrapper component
function Card(props){
    const classes='card ' + props.className;
    return(
        <div className={classes}>
            {props.children}  
            {/* children specifies all the content between the opening 
            and closing tag of the component where it is called */}
        </div>
    )
}
export default Card;