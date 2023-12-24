import { CoverTemplatePage } from './app.po';

describe('Cover App', function() {
  let page: CoverTemplatePage;

  beforeEach(() => {
    page = new CoverTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
