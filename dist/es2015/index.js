import "./periscope-widgets-datatables.css!";
export * from './grid-dt';

export function configure(aurelia) {
  aurelia.globalResources("./grid-dt");
}