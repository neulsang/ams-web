import { AxiosInstance } from 'axios';
import { CUSTOM_HEADER } from './constants';

function headerHandler(instance: AxiosInstance, customHeader: string) {
  // When customHeader is not in AVAILABLE_HEADERS, it will be ignored.
  if (CUSTOM_HEADER[customHeader]) {
    instance.defaults.headers.common[customHeader] =
      CUSTOM_HEADER[customHeader];
  }
}

export default headerHandler;
