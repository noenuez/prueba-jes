import DateParser from './date';

export const buildParams = (params: any) => {
  if (params) {
    for (const key in params) {
      params[key] =
        params[key] instanceof Date ? DateParser.toISOString(params[key] as Date) : params[key];

      if (params[key] === '' || params[key] === '' || params[key] === undefined) {
        delete params[key];
      }
    }
    return Object.keys(params).length > 0 ? params : undefined;
  }
  return undefined;
};
