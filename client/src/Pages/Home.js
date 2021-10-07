import { useHistory } from 'react-router-dom';
import alakazim from '../Images/Alakazam_1.png';
import './styles.css';



export default function Home() {
  
const history = useHistory();

    return(
      <div className='homeDiv'>
          <img src={alakazim} alt="" className="homeImg"/>
          <br/>
          <form style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <input placeholder="Username" type="username"></input>
          <br/>
          <input placeholder="Password" type="password"></input>
          <br/>          
          <button type='submit' style={{height:25, width: 75}} onClick={handleClick}> Login</button>
          </form>
      </div>
    )

      function handleClick() {
          history.push('/new');
  }

  };


 


