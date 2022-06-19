export default function SaibaMais() {


    const fontsize = {
        fontSize: '1.1em'
    }
    return (

        <div className="containerSaibaMAis p-2 text-center text-primary-dara ">
            <></>
            <div className='pb-50px'>
                <img className='saibamaispic' src="/saibamaispicture2.png"></img>
            </div>
            <h6><b>CRP </b>06/164999</h6>
            <div className="text-center pb-1">
                <h6>Dara Macedo Marques Hortolani</h6>
                <div className="d-flex justify-content-around">
                    <p className="w-75 small">A Dara é psicóloga e atua na área clínica através da abordagem Cognitivo Comportamental.</p>
                </div>
            </div>
            <a style={fontsize} href="https://wa.me/message/OQPASIZH7O75G1" target="_blank" type="button" className="btn btn-primary btn-block btn-large saibamais-btn w-100 ">Agende uma consulta</a>
            {/*  <button type="button" className="btn btn-primary btn-block btn-large w-100">Ver site</button> */}
            <a  style={fontsize}  href="/Blog" type="button" className="btn btn-primary btn-block btn-large w-100 border-2 saibamais-btn">Blog</a>
            <a style={fontsize}  href="/" type="button" className="btn btn-primary btn-block btn-large w-100  saibamais-btn ">Site</a>



        </div>
    )
}