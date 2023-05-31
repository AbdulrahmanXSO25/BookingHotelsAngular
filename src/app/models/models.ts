export interface Booking {
  name: string;
  email: string;
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
}

export interface BookingToCreate {
  firstName: string;
  lastName: string;
  hotelId: number;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface User {
  email: string;
  token: string;
  userName: string;
}

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Hotel {
  id: number;
  name: string;
  city: string;
  imageUrl: string;
  country: string;
  priceOfNight: number;
}
