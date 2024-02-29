import styles from '../../styles/ayushi.module.css';
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ayushi: data}
    }
}

const Ayushi = ({ ayushi }) => {
    return ( 
        <div>
            <h1>Everything about Ayushi</h1>
            {ayushi.map(ayushi => (
                <Link href={'/ayushi/' + ayushi.id} key={ayushi.id} className={styles.single} >
                        <h3>{ ayushi.name }</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Ayushi;