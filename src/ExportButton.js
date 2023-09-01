import React from 'react';

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const exportedData = JSON.stringify(data, (key, value) => {
      if (key === 'name' || key === 'children' || key === 'data') {
        return value;
      }
      return undefined;
    }, 2);
    console.log(exportedData);
  };

  return (
    <button onClick={handleExport} className="export-button">
      Export
    </button>
  );
};

export default ExportButton;
