import {useSelector} from "react-redux";

export const useIsAuthorized = () => {
  const {isAuthorized} = useSelector((state) => state.accountInformation);
  return isAuthorized;
};

