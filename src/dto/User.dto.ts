export interface UserDTO<T, K, L> {
  name?: string;
  website?: string;
  image?: string;
  phone?: string;
  username?: string;
  post: T[];
  company: K;
  address: L;
}
