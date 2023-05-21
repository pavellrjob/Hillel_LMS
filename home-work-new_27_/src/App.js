import { useState } from 'react';
import './App.css';

import useFetchRecords from './hooks/useFetchRecords';

import AddRecordForm from './components/addRecordForm';
import ChangeForm from './components/changeForm';
import PhoneCard from './components/phoneCard';

const RecordList = (props) => {
  const [editFormIndex, setEditFormIndex] = useState(null);

  return (
    <div>
      {props.recordList?.data &&
        props.recordList.data.map((record, index) => {
          return (
            <div key={`phone-card-${index}`} className="phone-card">
              {index === editFormIndex ? (
                <ChangeForm index={index} record={record} isForm={(data) => setEditFormIndex(data)} />
              ) : (
                <PhoneCard index={index} record={record} isForm={(data) => setEditFormIndex(data)} />
              )}

              {/* <hr /> */}
            </div>
          );
        })}
    </div>
  );
};

const PhoneBookRecords = () => {
  const { data, loading, error } = useFetchRecords();

  if (error) {
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  console.log('data from useFetchRecords:', data);

  return <>{loading ? <p>loading...</p> : <RecordList recordList={data} />}</>;
};

function App() {
  return (
    <div className="container">
      <div className="App">
        <h4>Phone Book</h4>
        <div className="row">
          <div className="col-4 col-md-3">Имя</div>
          <div className="col-4 col-md-3">Фамилия</div>
          <div className="col-4 col-md-3">Телефон</div>
        </div>
        <hr />
        <AddRecordForm />
        <hr />
        <PhoneBookRecords />
      </div>
    </div>
  );
}

export default App;
