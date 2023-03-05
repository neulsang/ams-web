const ROTUE_PATHS = {
  ROOT: `${import.meta.env.VITE_BASE_URL === '' ? '/' : import.meta.env.VITE_BASE_URL}`,
  LOGIN_PAGE: `${import.meta.env.VITE_BASE_URL}/auth/login`,
  JOIN_PAGE: `${import.meta.env.VITE_BASE_URL}/auth/join`,

  ME_PAGE: `${import.meta.env.VITE_BASE_URL}/mypage`,

  ACCOUNT_LIST_PAGE: `${import.meta.env.VITE_BASE_URL}/account`,
}
export default ROTUE_PATHS
