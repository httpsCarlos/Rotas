import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Bem-vindo à página HOME</h1>
            <span>Carlos R.</span>

            <br/>
            <Link to ="/">Home</Link><br/>
            <Link to= "/contato">Contato</Link>
            <hr/>
            <Link to="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}

export default Sobre;