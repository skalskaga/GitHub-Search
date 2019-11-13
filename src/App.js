import React, {useState} from 'react';
import Api from './api';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {
  const [typedValue, setValue] = useState('');
  const [user, setUser] = useState('');
  const [isStarted, unsetStart] = useState(true);
  const [isLoading, setLoader] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    let api = new Api('https://api.github.com/users', typedValue);
    await api.get()
    .then(data => {
      setUser(data);
      setLoader(false);
      setError(false);
    })
    .catch(() => {
      setError(true);
      setLoader(false);
      setUser('unknown');
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    unsetStart(false);
    if(typedValue ==='') {
      setError(true);
    } else {
      setUser('');
      setLoader(true);
      fetchData();
      setValue('');
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <Header
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        typedValue={typedValue}
      />
      <Container
        isStarted={isStarted}
        isError={isError}
        isLoading={isLoading}
        user={user}
      />
    </div>
  );
}

export default App;