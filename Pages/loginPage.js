import { t } from 'testcafe';
import { xPathSelector } from '../../helpers/xpathHandler';

class HomePage {
    constructor() {
        this.homePageContainer = xPathSelector`//div[@id='mainPanel']`;
        this.usernameLabel = xPathSelector`//p/b[text()="Username"]`;
        this.usernameField = xPathSelector`//input[@name='username']`;
        this.passwordLabel = xPathSelector`//p/b[text()="Password"]`;
        this.passwordField = xPathSelector`//input[@name='password']`;
    }
    async elementVisible(){
        await t
            .expect(this.usernameLabel.visible).ok()
            .expect(this.usernameField.visible).ok()
            .expect(this.passwordLabel.visible).ok()
            .expect(this.passwordField.visible).ok();
    }
    async pageLanding() {
        await t
            .expect(this.homePageContainer.exists)
            .ok('ParaBank site not visible — Navigation may have failed');
    }
}

export default HomePage;
