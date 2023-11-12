import '../styles/pages/Projects.css'
import { CloseBars } from './Home'


export default function Projects(){


    return(
        <div className="projects" onClick={ CloseBars }>
            <div className="box">
                <div className="inprojects">
                </div>
            </div>
        </div>
    )
}