import React, {useState} from 'react';

const useHeaderSection = () => {
  const [headerData, setHeaderData] = useState({
    desc: '',
    subDesc: '',
    icon: null,
    temp: '',
    feels: '',
  });
  return {
    headerData,
    setHeaderData,
  };
};

export default useHeaderSection;
