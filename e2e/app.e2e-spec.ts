import { MgmtAppPage } from './app.po';

describe('mgmt-app App', () => {
  let page: MgmtAppPage;

  beforeEach(() => {
    page = new MgmtAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
