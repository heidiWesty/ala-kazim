import { useHistory } from 'react-router-dom';
import alakazim from '../Images/Alakazam_1.png';
import './styles.css';
import Login from './Components/Login';



export default function Home() {

  const history = useHistory();

  return (
    <div className='homeDiv'>
      <img src={alakazim} alt="" className="homeImg" />
      <br />
      <form className='homeForm'>
        <input className="home-textbox" placeholder="Username" type="username"></input>
        <br /><br />
        <input className="home-textbox" placeholder="Password" type="password"></input>
        <br /><br />
        <button className="homeButton" type='submit' onClick={handleClick}> Login</button>
        
        <p style={{textAlign: 'center'}}>or</p>
        <Login/>
      </form>

    </div>
  )

  function handleClick() {
    history.push('/Admin');
  }

};





