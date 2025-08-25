import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useFetch from '../hooks/useFetch';
import {
  saveTokens,
  getAccessToken,
  getRefreshToken,
  saveUser,
  getUser,
  clearSession,
} from '../auth/tokenStorage';
import { router } from 'expo-router';
import { USER } from '../config/constants';

type User = {
  id: string;
  email: string;
  fullname: string;
  profileType: 'PATIENT' | 'ADMIN' | 'EMPLOYEE';
};

type LoginResponse = { accessToken: string; refreshToken: string; user: User };
type LoginPayload = { identifier: string; password: string; orgId?: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (p: LoginPayload) => Promise<boolean>;
  logout: () => Promise<void>;
  rehydrated: boolean;
};

const AuthContext = createContext<AuthContextType>({} as any);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [rehydrated, setRehydrated] = useState(false);
  const [hasTokens, setHasTokens] = useState(false);
  const [loading, setLoading] = useState(false);

  const { makeRequest: loginRequest } = useFetch<LoginResponse>(
    USER.LOGIN_USER,
    {
      useInitialFetch: false,
      method: 'post',
    },
  );

  //leer tokens + user desde storage
  useEffect(() => {
    (async () => {
      const [access, refresh] = await Promise.all([
        getAccessToken(),
        getRefreshToken(),
      ]);
      const tokensOk = !!access || !!refresh;
      setHasTokens(tokensOk);

      if (tokensOk) {
        const persistedUser = await getUser();
        if (persistedUser) {
          setUser(persistedUser);
        }
      }
      setRehydrated(true);
    })();
  }, []);

  const login = async ({
    identifier,
    password,
    orgId = 'org-1',
  }: LoginPayload) => {
    setLoading(true);
    try {
      const res = await loginRequest({ data: { identifier, password, orgId } });
      console.log(res, 'res');
      console.log({ identifier, password, orgId }, 'res');
      console.log(USER.LOGIN_USER, 'USER.LOGIN_USER');
      if (!res?.accessToken) throw new Error('Respuesta inválida de login');
      await saveTokens(res.accessToken, res.refreshToken);
      await saveUser(res.user);
      setUser(res.user);
      setHasTokens(true);
      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await clearSession();
      setUser(null);
      setHasTokens(false);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: hasTokens,
      login,
      logout,
      rehydrated,
    }),
    [user, loading, hasTokens, rehydrated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
