import React from 'react'

function Badge({badge}) {
    return (
        <li className="m-0.5 px-1 py-0.5 bg-blue-800 text-white rounded-md text-sm">
          {badge}
        </li>
      );
}

export default Badge