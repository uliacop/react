import './Button.scss'

export const Button = (props) => {
    const {handleClick} = props
 // eslint-disable-next-line react/prop-types
return (<button onClick={handleClick} className= {props.myClassName}>
    {props.children}
</button>);
};
  