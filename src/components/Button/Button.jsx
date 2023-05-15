import './Button.scss'

export const Button = (props) => {
    console.log('props', props)
// eslint-disable-next-line react/prop-types
return <button className='button'>{props.text}</button>;
};
  