import React from 'react';
import styles from './TextArea.module.scss';

type TextAreaProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  labelClass?: string;
  description?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  labelClass,
  description = null,
  defaultValue,
  disabled = false,
  onChange,
  onBlur,
  required = false,
  error = '',
}) => {
  return (
    <>
      {label && (
        <label className={`${labelClass && labelClass} ${styles['label']}`}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {required && <span className={styles['required']}>*</span>}
        </label>
      )}
      <textarea
        name={name}
        className={`${styles['textarea']} ${disabled && styles['disabled']}`}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {error && <div className={styles['errorDescription']}>{error}</div>}
      {description && <div className={styles['description']}>{description}</div>}
    </>
  );
};

export default TextArea;
