import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Main() {
  const [allText, setAllText] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedTasks = [...allText];
      updatedTasks[editIndex] = editText;
      setAllText(updatedTasks);
      setEditIndex(null);
      setEditText('');
    } else {
      if (editText.trim() !== '') {
        setAllText([...allText, editText]);
        setEditText('');
      }
    }
  };

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setEditText(task);
  };

  const handleDelete = (index) => {
    const updatedTasks = allText.filter((_, i) => i !== index);
    setAllText(updatedTasks);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex m-5">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="form-control m-2"
            />
            <button onClick={handleSubmit} className="btn btn-dark">
              {editIndex !== null ? 'Update Data' : 'Add Data'}
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="m-5 text-center">
            <b>Added Data</b>
          </h3>
          <div>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">SL.no</th>
                  <th scope="col">TEXT</th>
                  <th scope="col">EDIT</th>
                  <th scope="col">DELETE</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {allText.map((task, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                 
                 <td>   {task}</td>
                    <td>
                      <button className='btn' onClick={() => handleEdit(index, task)}>
                      <i  class="  fa-solid fa-pen-nib"></i>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(index)} className="btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
