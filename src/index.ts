// parcel index.html starttaa projektin

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

//tssässä ei yleensä default exportteja

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
