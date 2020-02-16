import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_DOGS = gql`
 query {
     dogs {
         id
         breedss
     }
 }
`;

function Dogs({ onDogSelected }) {
    const { loading, error, data } = useQuery(GET_DOGS);
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