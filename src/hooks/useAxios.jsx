import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:3000";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

useAxios.propTypes = {
  url: PropTypes.string,
};

export default useAxios;
