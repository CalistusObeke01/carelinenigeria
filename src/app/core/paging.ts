export class Paging {
  page: number;
  size: number;
  order: string;

  constructor() {
    this.page = 1;
    this.size = 10;
    this.order = '-id';
  }

  static of(page: number, size: number, order?: string) {
    const pag = new Paging();
    pag.page = page;
    pag.size = size;
    pag.order = order ? order : '-id';
    return pag;
  }
}
