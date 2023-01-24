import logo from '../assets/images/dnc-logo.png'
import jumpy from '../assets/images/jumpy-logo.png'
import app from '../assets/images/app.webp'
import laptop from '../assets/images/laptop.webp'
import '../Pages/Pages.css';

export function SignIn(){
  return(
    <>
      <nav className='navbar'>
        <a href="#" ><img className="logo" src={logo} alt="logo-dnc"/></a>
      </nav>
      <div className="container">
        <div className="left">
          <div className="bannerArea">
            <img className="laptop" src={laptop} alt="logo-dnc"/>
          </div>
          
        </div>

        <div className="right">
          <div className="welcome">
            <img className="jumpyLogo" src={jumpy} alt="logo-dnc"/>
            <h1>Bem vindo ao Jumpy!</h1>
          </div>

        <form>
          <div className="inputArea">
            <label for="email">E-mail:</label>
            <input type="text" id="email" name="email" placeholder="email@email.com"/>
          </div>

          <div className="inputArea">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="******"/>
          </div>


            <div className="rememberUser">
            <input type="checkbox"/>
            <p>Mantenha me conectado</p>

              
            </div>


            <div className="forgotPass">
              <a href="#">Esqueceu sua senha?</a>
            </div>            


        <button className="customButton">Entrar</button>
        <p>Não possui uma conta?<br/><a href="#" className="createAccount">Crie uma agora</a></p>
          

        </form>



        </div>

      </div>
      <footer>
        <p>© 2023 All Rights Reserved - Made by 💙 by:<a href="https://github.com/netoeac" target="_blank"> netoeac</a></p>
      </footer>

    </>
  );

}