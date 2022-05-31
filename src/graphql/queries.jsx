//QUERIES

import { gql } from '@apollo/client';

export const booking_data = gql`
    query BookingData($startDate: String, $endDate: String, $grouping: String) {
        BookingCountByDate(startDate: $startDate, endDate: $endDate, grouping: $grouping) {
            total,
            year,
            month
        }
    }
`;

export const user_data = gql`
    query UserData($startDate: String, $endDate: String, $grouping: String, $userType: String) {
        UserCountByDate(startDate: $startDate, endDate: $endDate, grouping: $grouping, userType: $userType) {
        total
        year
        month
        }
    }
`;

export const clients_and_operators = gql`
    query ClientsAndOperators {
    ClientsAndOperators {
        id
        is_active
        name
        phone_number
        role
        username
        created_at
        }
    }
`;

export const get_admin_user = gql`
   query GetAdminUser($userId: String!) {
  getAdminUser(user_id: $userId) {
    id
    name
    phone_number
    username
  }
}
`;


export const get_all_bookings = gql`
    query GetAllBookings {
        getAllBookings {
            id
            transaction_location
            user_client_id
            transaction_time
            transaction_notes
        }
    }
`;