export const tmdbFetch = (endpoint, customConfig) => {
  const config = {
    // This allows the user of this function to pass in a customConfig and defaults to a GET call if they don't specify
    // otherwise. The order here matters because what ever is passed in last "wins" in a conflict.
    method: 'GET',
    ...customConfig,
  };
  return (
    fetch(
      // This is the proper way to store api keys, they are in the .env file which is listed in the gitignore so
      // that it is not tracked.
      // encodeURIComponent properly serializes strings to be used in a URL, For example, it replaces strings with "%20"
      `${process.env.REACT_APP_TMDB_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}${endpoint}`,
      config
    )
      // once the promise from the initial call resolves, we get the json out of that response object
      // Because response.json is an async call, we can mark this success handler function as async so that we can await
      // on response.json() and pull the data out.
      .then(async (response) => {
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
