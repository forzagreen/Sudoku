import { NgSudokuPage } from './app.po';

describe('ng-sudoku App', () => {
  let page: NgSudokuPage;

  beforeEach(() => {
    page = new NgSudokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
