import HomePage from "../../pages/Authentication/loginPage";
// import user from "../data/credential.json";
import { handleError } from '../../utils/utils';


const homePage = new HomePage();

fixture `Make My Trip Login Page Test`
    .page`https://parabank.parasoft.com/parabank/index.htm`

test('Home Page - Positive Flow - Verify user should successfully land Parabank Website', async t => {
    try {
        await homePage.pageLanding();
    } catch (error) {
        await handleError('Login Page - Positive Flow', error);
    }
});
test('Login - Postive Check - Verify uses should successfully login with valid cred',async t=>{
    try{
        await homePage.elementVisible();
    } catch(error){
        await handleError('Login Page - Positive Flow', error);
    }
});



