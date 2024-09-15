function FeedbackOptions({ onButtonClick }) {
  return (
    <div>
      <button value="good" onClick={onButtonClick}>
        Good
      </button>
      <button value="neutral" onClick={onButtonClick}>
        Neutral{' '}
      </button>
      <button value="bad" onClick={onButtonClick}>
        Bad{' '}
      </button>
    </div>
  );
}

export default FeedbackOptions;
