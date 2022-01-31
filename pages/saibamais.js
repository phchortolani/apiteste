import saibamaispicture from '../public/saibamaispicture.png';

export default function SaibaMais() {

    return (

        <div className="containerSaibaMAis text-center text-primary">
            <div className='pb-20px'>
                <img className='saibamaispic' src="/saibamaispicture.png"></img>
            </div>
            <h6><b>CRP </b>06/164999</h6>
            <div className='shrik'>
               
                <h2>Dara Marques</h2>
            </div>


            <a href="https://api.whatsapp.com/send?phone=5511978493885" target="_blank" type="button" className="btn btn-primary btn-block btn-large w-100">Agende uma consulta</a>
            {/*  <button type="button" className="btn btn-primary btn-block btn-large w-100">Ver site</button> */}
            <a href="/Blog" type="button" className="btn btn-primary btn-block btn-large w-100">Blog</a>


        </div>
    )
}