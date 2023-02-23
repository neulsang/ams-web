export interface CommonServiceApi {
  getCommonCodes: (parentId: string, extCodeValue?: string) => Promise<any>;
  getCommonGroupCodes: (parentIdArr: string[]) => Promise<any>;
}
