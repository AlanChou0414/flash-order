interface STORE_CONTEXT {
  shoppingCart?: never[];
  mode?: { stayInd: boolean; guest: number; },
  setShoppingCart?: React.Dispatch;
  setMode?: React.Dispatch;
}