import '../styles/pages/Help.css'
import { CloseBars } from './Home'

export default function Help(){
    return(
        <div className="help" onClick={ CloseBars }>
           <div className="helpBox"></div>
        </div>
    )
}