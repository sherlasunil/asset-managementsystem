function Form({ fields, formData, setFormData, onSubmit }) {
  return (
    <div>
      {fields.map((field, index) => (
        <input
          key={index}
          placeholder={field}
          value={formData[field] || ""}
          onChange={(e) =>
            setFormData({ ...formData, [field]: e.target.value })
          }
        />
      ))}

      <br /><br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Form;