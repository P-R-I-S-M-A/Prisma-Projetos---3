import '../styles/components/ButtonSing.css'

export default function ButtonSing(props){
    return(
        <button className='button-sing' onClick={props.onClick}>
            {props.text}
        </button>
    )
}