import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?keyword=${searchTerm}`);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name ..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={handleSearch}
      />
      <div className="input-group-append">
        <button onClick={handleSearch} id="search_btn" className="btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
