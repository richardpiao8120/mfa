import React from 'react';

export default function Button({ children }) {
  return <button style={{ padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>{children}</button>;
}
