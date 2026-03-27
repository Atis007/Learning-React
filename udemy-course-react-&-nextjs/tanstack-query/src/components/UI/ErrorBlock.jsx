export default function ErrorBlock({ title, message }) {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1);
  
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{capitalizedTitle}</h2>
        <p>{capitalizedMessage}</p>
      </div>
    </div>
  );
}
