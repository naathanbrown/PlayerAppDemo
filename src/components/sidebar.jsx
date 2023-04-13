import Slider from "./slider";

function Sidebar({ sliderStates }) {
  return (
    <>
      <Slider
        sliderState={sliderStates.heightState}
        minRange={1}
        maxRange={100}
      />
      <Slider
        sliderState={sliderStates.weightState}
        minRange={1}
        maxRange={500}
      />
      <Slider
        sliderState={sliderStates.yearState}
        minRange={2020}
        maxRange={2050}
      />
    </>
  );
}

export default Sidebar;
