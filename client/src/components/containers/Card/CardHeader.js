import React from 'react';

export default function HeaderCard(props) {
    return (
      <div className="card-header">
          <h3>{props.title}</h3>
      </div>
    );
}