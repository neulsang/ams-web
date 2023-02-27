import { axiosClient } from '@libs/api/base';
import { CommonServiceApi } from './interface';

let commonServiceApi: CommonServiceApi;

const { instance } = axiosClient;

const URLS = {
  GET_COMMON_CODES: '/common-service/commoncd/codes',
  GET_COMMON_GROUP_CODES: '/common-service/commoncd/groupcodes',
};

const useCommonServiceApi = () => {
  if (commonServiceApi) {
    return commonServiceApi;
  }

  // type p: position, d : duty
  const getCommonCodes = async (
    parentId: string,
    extCodeValue: string | undefined = undefined,
  ) => {
    const params = {
      parentId,
      extCodeValue,
    };

    if (!extCodeValue) delete params.extCodeValue;

    return instance
      .get(URLS.GET_COMMON_CODES, { params })
      .then(res => res.data);
  };

  const getCommonGroupCodes = async (parentIdArr: string[]) => {
    const params = parentIdArr.reduce(
      (prev, curr, index) =>
        `${index === 1 ? '?parentIdArr=' : ''}${prev}&parentIdArr=${curr}`,
    );

    return instance
      .get(URLS.GET_COMMON_GROUP_CODES + params)
      .then(res => res.data);
  };

  commonServiceApi = {
    getCommonCodes,
    getCommonGroupCodes,
  };

  return commonServiceApi;
};

export default useCommonServiceApi;
