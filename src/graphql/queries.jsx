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