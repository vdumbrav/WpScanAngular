import { WpscanPage } from './app.po';

describe('wpscan App', () => {
  let page: WpscanPage;

  beforeEach(() => {
    page = new WpscanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
