import './Loading.css';



export default function Loading(){
    return(
        <div className='loadingContainer'>
            <img className='loadingImg' src="./images/loading.png"/>
            <p className='loadingText'>Cargando...</p>
        </div>
    )
}