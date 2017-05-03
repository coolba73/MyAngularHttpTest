import { AngularLoginTestPage } from './app.po';

describe('angular-login-test App', () => {
  let page: AngularLoginTestPage;

  beforeEach(() => {
    page = new AngularLoginTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
