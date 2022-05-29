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


export const delete_user = gql`
mutation DeleteUser($userId: String!) {
  deleteUser(user_id: $userId) {
    done
    error
  }
}`;

export const admin_sign_up = gql`
    mutation AdminSignUp($name: String!, $password: String!, $phoneNumber: String!, $username: String!) {
        adminSignUp(name: $name, password: $password, phone_number: $phoneNumber, username: $username) {
            token
            error
        }
    }
`;


