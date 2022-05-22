//MUTATIONS

import { gql } from '@apollo/client';

export const admin_sign_in = gql`
    mutation AdminSignIn($username: String!, $password: String!) {
        adminSignIn(username: $username, password: $password) {
            token
            error
        }
    }
`;

// export const admin_sign_up = gql`
//     mutation AdminSignUp($location: String!, $name: String!, $password: String!, $phoneNumber: String!, $role: String!, $username: String!) {
//         adminSignUp(location: $location, name: $name, password: $password, phone_number: $phoneNumber, role: $role, username: $username) {
        
//         }
//     }
// `;

