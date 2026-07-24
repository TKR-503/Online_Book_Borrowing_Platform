export const useSession = () => {
  return { data: null, isPending: false, error: null };
};

export const signOut = async () => {
  return Promise.resolve();
};
