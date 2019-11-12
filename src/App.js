import React, {useState} from 'react';
import Api from './api';
import Header from './components/Header/Header';


const App = () => {
  const [typedValue, setValue] = useState('');
  const [user, setUser] = useState('');
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
    </div>
  );
}

export default App;