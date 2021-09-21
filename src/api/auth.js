export const login = (credentials) => {
  const auth = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!credentials) {
        reject(new Error('Empty credentials'));
      }
      if (credentials.email === 'admin@admin.com') {
        resolve({ fullName: 'Admin', email: 'admin@admin.com', isAdmin: true });
      } else {
        resolve({ fullName: 'John Doe', email: 'john@doe.com' });
      }
    }, 1500);
  });
  return auth;
};

export const logout = () => {
  const resp = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return resp;
};
