import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';

function Inventory() {
  const { isLoading, data, error } = useFetch('/api/inventory');

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Language Learning Center Movie Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Alternate Title</th>
            <th>Call Number</th>
            <th>Language</th>
            <th>Author/Director</th>
            <th>Copyright</th>
            <th>Media Type</th>
            <th>Country</th>
            <th>Language of subtitles</th>
            <th>Reserved?</th>
            <th>Checked out?</th>
            <th>Description</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {data.map(movie => (
            <tr key={movie.Title}>
              <td>{movie.Alternate_Title}</td>
              <td>{movie.Call_number}</td>
              <td>{movie.Lanugage}</td>
              <td>{movie.Author_director}</td>
              <td>{movie.Copyright}</td>
              <td>{movie.Media_type}</td>
              <td>{movie.Country}</td>
              <td>{movie.Language_subtitles}</td>
              <td>{movie.Reserved}</td>
              <td>{movie.Checked}</td>
              <td>{movie.Description}</td>
              <td>{movie.Length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;