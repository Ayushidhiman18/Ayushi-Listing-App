export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ayushi => {
        return {
            params: { id: ayushi.id.toString() }
        }
    })

    return {
        //paths: [{}, {}, { params: { id: } }]
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ayushi: data }
    }
}


const Details = ({ ayushi }) => {
    return ( 
        <div>
            <h1>{ ayushi.name }</h1>
            <p>{ ayushi.email }</p>
            <p>{ ayushi.website }</p>
            <p>{ ayushi.address.city }</p>
        </div>
     );
}
 
export default Details;