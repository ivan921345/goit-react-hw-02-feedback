function Statistics({ good, bad, neutral, total, percentage }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback percentage: {percentage} %</p>
    </div>
  );
}

export default Statistics;
