import { AccountModel } from "../models/account-model";

type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  /* 
    Nesse caso o tipo é uma promise, pois é assincrona e 
    retorna um AccountModel.
    Foi criado o AccountModel, pois se no futuro o retorno
    mudar, não será necessário alterar o caso de uso,
    somente no model AccountModel.
  */
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
