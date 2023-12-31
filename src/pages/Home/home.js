import './home.css';
import Nav from '../../components/Nav/nav.js'
import { Fragment, useEffect } from 'react';

function Home({admin, setAdmin}) {

useEffect(() => {
    if (admin) {
      
      alert('Welcome, Admin!');
    }
  }, [admin]);

    return ( 
<Fragment>
  <Nav itemMenu={"Home"} admin={admin} setAdmin={setAdmin}/>      
    <div className="home">
        <header className="home-header  container-fluid d-flex flex-column">
                <h1 className="home-title row justify-content-center">Bienvenido a Suyai Racing Championship</h1>

       </header>
        <main className="home-main container-fluid d-flex flex-column justify-content-center align-items-center">
        <div id="fotoleon" className="col-md-6 col-sm-12">
                    <img src="./images/leon1.jpg" alt="imagenleon"/>
        </div>
             
        </main>
    </div>  
</Fragment>   )
}

export default Home;