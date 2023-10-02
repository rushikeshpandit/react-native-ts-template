import {get} from '../../Service/APIClient';

export function getRandomUserApi(url: string) {
  return get(url);
}
