import {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo
} from "react";

const ContextData = createContext({
  collapsed: false
});

const ContextApi = createContext({
  open: () => {},
  close: () => {}
});

export const useNavData = () => useContext(ContextData);
export const useNavApi = () => useContext(ContextApi);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const open = useCallback(() => {
    setCollapsed(false);
  }, [collapsed]);

  const close = useCallback(() => {
    setCollapsed(true);
  }, [collapsed]);

  const data = useMemo(() => {
    return { collapsed };
  }, [collapsed]);

  const api = useMemo(() => {
    return { open, close };
  }, [collapsed]);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};
export default NavController;
