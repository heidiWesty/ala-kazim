import { useHistory } from 'react-router-dom';
import alakazim from '../Images/Alakazam_1.png';
import './styles.css';



export default function Home() {
  
const history = useHistory();

    return(
      <div className='homeDiv'>
          <img src={alakazim} alt="" className="homeImg"/>
          <br/>
          <form className='homeForm'>
          <input placeholder="Username" type="username"></input>
          <br/><br/>
          <input placeholder="Password" type="password"></input>
          <br/><br/>          
          <button className="homeButton" type='submit' onClick={handleClick}> Login</button>
          </form>
      </div>
    )

      function handleClick() {
          history.push('/backendDisplay');
  }

  };


 


