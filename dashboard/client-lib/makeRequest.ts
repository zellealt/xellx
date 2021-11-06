const makeRequest = async (
  query: string,
  rawHeaders?: any,
  credentials?: boolean,
  rawCatchError?: boolean
) => {
  console.log("req made");
  let headers = rawHeaders;
  let catchError = true;

  if (rawCatchError == false) {
    catchError = false;
  }

  if (rawHeaders == undefined) {
    headers = {};
  }

  const url = query;

  if (catchError) {
    try {
      const res = await fetch(url, {
        headers: headers,
        credentials: credentials ? "include" : "same-origin",
      });

      const jsonRes = await res.json();

      console.log("Request • " + query);

      return jsonRes;
    } catch {
      console.log("r");
      return false;
    }
  } else {
    const res = await fetch(url, {
      headers: headers,
      credentials: credentials ? "include" : "same-origin",
    });

    const jsonRes = await res.json();

    return jsonRes;
  }
};

export default makeRequest;
