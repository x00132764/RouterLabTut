import { RoutingLabTutPage } from './app.po';

describe('routing-lab-tut App', function() {
  let page: RoutingLabTutPage;

  beforeEach(() => {
    page = new RoutingLabTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
