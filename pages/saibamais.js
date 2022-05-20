export default function SaibaMais() {

    const btnA = {
        padding: "16px 20px",
        overflowWrap: "break-word",
        wordBreak: "break-word",
    }
    return (

        <div className="containerSaibaMAis text-center text-white">
            <div className='pb-20px'>
                <img className='saibamaispic' src="./saibamaispicture.png"></img>
            </div>
            <h6><b>CRP </b>06/164999</h6>
            <div >
            <h6>Dara Macedo Marques Hortolani</h6>
               
            </div>


            <a style={btnA} href="https://api.whatsapp.com/send?phone=5511978493885" target="_blank" type="button" className="btn btn-primary bg-none btn-block btn-large border-2 border border-white w-100 fw-bolder">Agende uma consulta</a>
            {/*  <button type="button" className="btn btn-primary btn-block btn-large w-100">Ver site</button> */}
            <a style={btnA} href="/Blog" type="button" className="btn btn-primary btn-block btn-large w-100 bg-none border-2 border border-white  fw-bolder">Blog</a>
            <a style={btnA} href="/" type="button" className="btn btn-primary btn-block btn-large w-100  bg-none border-2 border border-white fw-bolder">Site</a>



        </div>
    )
}