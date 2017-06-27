import { LunchPage } from './app.po';

describe('lunch App', () => {
  let page: LunchPage;

  beforeEach(() => {
    page = new LunchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
