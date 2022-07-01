import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const customFetch = (path, customConfig) => {
  const config = {
    // This allows the user of this function to pass in a customConfig and defaults to a GET call if they don't specify
    // otherwise. The order here matters because what ever is passed in last "wins" in a conflict.
    method: 'GET',
    ...customConfig,
  };
  return (
    fetch(path, config)
      // once the promise from the initial call resolves, we get the json out of that response object
      // Because response.json is an async call, we can mark this success handler function as async so that we can await
      // on response.json() and pull the data out.
      .then(async (response) => {
        // If the user isn't allowed to make this request, sign them out and do a full page refresh.
        if (response.status === 401) {
          await signOut(auth);
          window.location.assign(window.location);
          return Promise.reject({ message: 'Please re-authenticate' });
        }
        const data = await response.json();
        // fetch actually won't give you a rejection as long as you are able to talk to the server. It will give you a
        // response object with "ok: false". When we get that, we want to return a rejection. That's what this check is for.
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      })
  );
};
