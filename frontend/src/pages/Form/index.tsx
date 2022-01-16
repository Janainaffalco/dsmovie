import { useParams } from 'react-router-dom';
import FormCard from 'componentes/FormCard';


function Form (){

    const params = useParams();

    return(
        <FormCard movieId = {`${params.movieId}`}/>       
    );
}
export default Form;