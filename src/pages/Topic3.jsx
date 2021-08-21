import Slider from "../components/Slider"

function Topic3() {
return (
<div className="page-wrapper">
  <div className="topic3-wrapper">
    <div className="topic3-container">
      <h1 className="topic3-title">Nulla imperdiet</h1>
      <div className="text-pair">
        <h2 className="text-pair__text">
          Vestibulum dapibus hendrerit nibh ut ornare.
        </h2>
        <q className="text-pair__blockquote">
          Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,
          sit amet.
        </q>
      </div>
    </div>
    <Slider />
  </div>
</div>
);
}

export default Topic3;