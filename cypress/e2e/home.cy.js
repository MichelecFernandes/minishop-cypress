import { HomePage } from "../support/pages/HomePage"
import { LoginPage } from "../support/pages/LoginPage";

describe('Página Home da Aplicação MiniShop', () => {
    const home = new HomePage();
    const loginPage = new LoginPage();

    beforeEach(() =>{
        home.visitar();
        loginPage.login('admin', '12345')
    })

    it('Deve exibir o título correto', () =>{
        home.verificarTitulo();

    })
})