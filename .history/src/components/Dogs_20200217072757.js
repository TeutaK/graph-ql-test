import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_DOGS = gql`
  query {
    dogs {
      id
      breed
    }
  }
`;

const SAVE_DOG = gql`
  mutation($color: String, $breed: String!){
    saveDog {
      color: $color
      breed: $breed
    }{
     dog{
      breed        
     }
    }
  }
`;

const Dogs = ({ onDogSelected }) => {
    const { loading, error, data } = useQuery(GET_DOGS);
    const [saveDog] = useMutation(SAVE_DOG);

    const handleSubmit = (values) => {
      saveDog({ variables: values });
    }

    if(loading) return 'Loading...';
    if (error) return `Error! ${error.message}`

    return(
        <select name="dog" onChange={onDogSelected}>
            {
                data.dogs.map(dog => (
                    <option>
                        {dog.breed}
                    </option>
                ))
            }
        </select>
    )
}

export default Dogs;