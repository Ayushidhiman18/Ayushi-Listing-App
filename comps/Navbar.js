import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="/logo.jpg" width ={128} height={77}/>
                <h1>Ayushi's List</h1>
            </div>
            <Link href="/">Home </Link>
            <Link href="/about">About </Link>
            <Link href="/ayushi">Ayushi Listing  </Link>
        </nav>
     );
}
 
export default Navbar;