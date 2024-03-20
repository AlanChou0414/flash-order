interface ORDER_RECORD {
  id: number;
  name: string;
  record: string;
  amount: number;
  photo: string;
}
interface ORDER_DETAIL {
  id: number;
  name: string;
  amount: number;
  photo: string;
}
interface ORDER_INFO {
  id: number;
  label: string;
  detail: ORDER_DETAIL[]
}