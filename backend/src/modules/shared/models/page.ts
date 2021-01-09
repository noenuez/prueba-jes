export interface Page<T> {
  content: T[];
  firstPage: number;
  lastPage: number;
  nextPage: number;
  previousPage: number;
  page: number;
  pageSize: number;
  total: number;
}
