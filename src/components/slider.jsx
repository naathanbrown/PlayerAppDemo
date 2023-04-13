function Slider({ sliderState, minRange, maxRange }) {
  function updateSetFunction(event) {
    sliderState.setFunction(Number(event.target.value));
  }

  return (
    <div>
      <input
        type="range"
        min={minRange}
        max={maxRange}
        value={sliderState.setValue}
        class="slider"
        id="myRange"
        onChange={updateSetFunction}
      />
      <p>{sliderState.setValue}</p>
    </div>
  );
}

export default Slider;
