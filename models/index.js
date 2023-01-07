// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Merch } = initSchema(schema);

export {
  Merch
};