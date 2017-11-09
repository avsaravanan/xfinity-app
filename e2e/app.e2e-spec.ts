import { XfinityCodeAppPage } from './app.po';

describe('xfinity-code-app App', () => {
  let page: XfinityCodeAppPage;

  beforeEach(() => {
    page = new XfinityCodeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
