import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = await Promise.all([uploadPhoto(), createUser()]).then((obj) => obj)
    .catch(() => [null, null]);
  return { photo: obj[0], user: obj[1] };
}
