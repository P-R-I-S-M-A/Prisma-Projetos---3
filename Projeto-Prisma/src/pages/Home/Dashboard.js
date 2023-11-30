import { useEffect } from 'react';
import '../../styles/pages/Home/Dashboard.css';


export default function Dashboard(props){ 

    useEffect(()=>{
        if(props.ID_usuario_FB !== undefined){

            teste(props.ID_usuario_FB)
            
        }
    },[props.ID_usuario_FB])


    function teste(){
        let div_caixa_grafico = document.querySelector('.caixa_grafico').clientHeight;
        let div_a_fazer = document.querySelector('.a_fazer');
        let div_fazendo = document.querySelector('.fazendo');
        let div_feito = document.querySelector('.feito');

        let a_fazer = 10;
        let fazendo = 5
        let feito = 10;

        const arrayDeValores = [a_fazer, fazendo, feito];

        // Ordena o array em ordem decrescente
        let a = arrayDeValores.sort(function (x, y) {
          return y - x;
        });

        if(arrayDeValores[0] == a_fazer){
            div_a_fazer.style.height = `100%`;
        }

        if(arrayDeValores[0] == fazendo){
            div_fazendo.style.height = `100%`;
        }

        if(arrayDeValores[0] == feito){
            div_feito.style.height = `100%`;
        }
        

    }

    return(
        <div className="dashboard">
            <h3>Dashboard</h3>

            <div className='container_dashboard'>
                <div className='container_grafico'>
                    <div className='caixa_grafico'>

                        <div className='coluna a_fazer'><p>3</p></div>

                        <div className='coluna fazendo'><p>8</p></div>

                        <div className='coluna feito'><p>7</p></div>

                    </div>
                </div>

                <div className='roda_pe'></div>
            </div>
        </div>
    )
}