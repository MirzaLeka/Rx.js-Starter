export interface CreateUserDTO {
  name: string;
  profilePicture?: string;
  originalProfilePicture?: string;
  resizedProfilePicture?: string;
}

export interface UserDTO {
  id: number;
  name: string;
  profilePicture?: string;
  dateCreated: string;
}
