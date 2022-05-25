//QUERIES

import { gql } from '@apollo/client';

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