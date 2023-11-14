
import { IResponseUser, IUser } from "../../../interfaces/user.inteface";
import api
 from "../api";
class UserData {
  register(data: IUser) {
    return api.post<IResponseUser>('/Cadastro', data)
  }
  login(data: IUser) {
    return api.post<IResponseUser>('/Login', data)
  }
}

export default new UserData()