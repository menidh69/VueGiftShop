export const createNewProduct = (data) => {
  const resp = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) return reject(new Error('No data'));
      return resolve();
    }, 1000);
  });
  return resp;
};

export const editProduct = (data) => {
  const resp = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) return reject(new Error('No data'));
      return resolve();
    }, 1000);
  });
  return resp;
};

export const deleteProduct = (data) => {
  const resp = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) return reject(new Error('No data'));
      return resolve();
    }, 1000);
  });
  return resp;
};
