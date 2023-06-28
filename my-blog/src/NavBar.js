import { Link } from 'react-router-dom';
const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/about">Aboute</Link>
                </li>
                <li> 
                    <Link to="/articles">article</Link>
                </li>
  
            </ul>       
             </nav>
    )
}

export default NavBar