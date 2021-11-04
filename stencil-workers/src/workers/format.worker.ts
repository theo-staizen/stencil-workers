import * as utils from '../utils/utils';

export async function format(first: string, middle: string, last: string) {
  console.log(arguments);
  return utils.format(first, middle, last);
}
