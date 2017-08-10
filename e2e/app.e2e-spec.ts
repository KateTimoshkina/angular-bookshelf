import { AngularBookshelfPage } from './app.po';

describe('angular-bookshelf App', () => {
  let page: AngularBookshelfPage;

  beforeEach(() => {
    page = new AngularBookshelfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
