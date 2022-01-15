import { useParams } from 'react-router-dom';
import FormCard from 'componentes/FormCard';
import { movie }from 'types/movie';

type Props = {
    
    movie = Movie;
}
function Form ( { movie }){

    const params = useParams();

    return(
        <FormCard movieId={'${params.movieId}'}/>       
    );
}
export default Form;