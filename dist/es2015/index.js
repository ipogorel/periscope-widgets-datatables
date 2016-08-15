import "./periscope-widgets-datatables.css!";
export * from './grid-dt';

import { PeriscopeFactory } from 'periscope-framework';
import { GridDT } from './grid-dt';

export function configure(aurelia) {
  let pf = aurelia.container.get(PeriscopeFactory);
  pf.addReference(GridDT);
  aurelia.globalResources("./grid-dt");
}