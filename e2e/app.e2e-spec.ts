import { OnlineFarmPage } from './app.po';

describe('online-farm App', () => {
  let page: OnlineFarmPage;

  beforeEach(() => {
    page = new OnlineFarmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
