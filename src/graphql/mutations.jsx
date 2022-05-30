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

export const delete_booking = gql`
mutation DeleteBooking($bookingId: String!) {
  deleteBooking(booking_id: $bookingId) {
    done
    error
  }
}`
;

export const edit_booking = gql`
    mutation EditBooking($bookingId: String!, $transactionNotes: String, $dateAsString: String, $userClientId: String, $transactionLocation: String) {
        editBooking(booking_id: $bookingId, transaction_notes: $transactionNotes, dateAsString: $dateAsString, user_client_id: $userClientId, transaction_location: $transactionLocation) {
            id
        }
    }
`;
