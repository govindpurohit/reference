import { ReferencePage } from './app.po';

describe('reference App', function() {
  let page: ReferencePage;

  beforeEach(() => {
    page = new ReferencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
