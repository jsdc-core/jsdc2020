import React from 'react';

export default function renderDescription(description: string) {
  return description?.split('\n').map(d => <>{d}<br/></>);
}
