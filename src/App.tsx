import React, { useState } from 'react';
import ExcuseForm from './components/ExcuseForm';
import ExcuseList from './components/ExcuseList';
import './App.css'; // Dołącz styl CSS

const App = () => {
    const [excuses, setExcuses] = useState([]);

    const addExcuse = (newExcuse) => {
        setExcuses([...excuses, newExcuse]);
    };

    return (
        <div className="App">
            <h1>Excuse Generator</h1>
            <ExcuseForm addExcuse={addExcuse} />
            <ExcuseList excuses={excuses} />
        </div>
    );
};

export default App;
