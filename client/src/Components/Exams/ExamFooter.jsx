import React, { useState } from 'react';

const ExamFooter = ({ onSave }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      
      await onSave();
      setIsSaving(false);
    } catch (error) {
      console.error('Error while saving:', error);
      setIsSaving(false);
    }
  };

  return (
    <div>
      {isSaving ? (
        <p>Saving...</p>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
  );
};

export default ExamFooter;
