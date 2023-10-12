import '../styles/components/InputSing.css';


export default function InputSing(props){
    return(
        <p className='area-input'>{props.icon}
            <input type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}/>
        </p>
    )
}