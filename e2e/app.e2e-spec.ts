import { CursoA4Page } from './app.po';

describe('curso-a4 App', () => {
  let page: CursoA4Page;

  beforeEach(() => {
    page = new CursoA4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
