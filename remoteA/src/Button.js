import React from 'react';

export default function Button({ children }) {
  return <button style={{ padding: 10, background: '#28a745', color: '#fff', border: 'none', borderRadius: 4 }}>{children}</button>;
}
