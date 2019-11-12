import React, {useState} from 'react';
import Api from './api';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {
  const [typedValue, setValue] = useState('');
  const [user, setUser] = useState('sllslsl');
  const [isStarted, unsetStart] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    let api = new Api('https://api.github.com/users', typedValue);
    await api.get()
    .then(data => {
      setUser(data);
    })
    .catch(() => {
      setError(true);
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(typedValue ==='') {
      // todo

    } else {
      setUser('');
      // todo: handle loader?
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