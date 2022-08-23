export interface IColumn<T> {
  label: string;
  name: string;
  formatter?: (data: T) => string;
}
