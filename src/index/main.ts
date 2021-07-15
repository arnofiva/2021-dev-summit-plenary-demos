import WebScene from "esri/WebScene";
import SceneView from "esri/views/SceneView";
import Expand from "esri/widgets/Expand";
import ElevationProfile from "esri/widgets/ElevationProfile";
import Slice from "esri/widgets/Slice";
import SlicePlane from "esri/widgets/Slice/SlicePlane";
import ElevationProfileLineGround from "esri/widgets/ElevationProfile/ElevationProfileLineGround";
import ElevationProfileLineInput from "esri/widgets/ElevationProfile/ElevationProfileLineInput";
import * as promiseUtils from "esri/core/promiseUtils";
import FeatureLayer from "esri/layers/FeatureLayer";
import { SpatialReference } from "esri/geometry";
import Collection from "esri/core/Collection";
import { ExtrudeSymbol3DLayer, LineSymbol3D, PathSymbol3DLayer, PolygonSymbol3D } from "esri/symbols";
import { SimpleRenderer, UniqueValueRenderer } from "esri/renderers";

const epContainer = document.getElementById("containerElevationProfile") as HTMLElement;

const extrudedWaterRenderer = new SimpleRenderer({
  symbol:
    new PolygonSymbol3D({
      symbolLayers: [
        new ExtrudeSymbol3DLayer({
          material: {
            color: [190, 232, 255, 0.24],
          },
          size: 90
        })
      ]
    })
});

const map = new WebScene({
  portalItem: {
    id: "98c48f91a94448428f65d978ead0b6e9",
  },
});

const view = new SceneView({
  container: "viewDiv",
  qualityProfile: "high",
  map: map,
  highlightOptions: {
    fillOpacity: 0,
    haloOpacity: 0.7,
  },
  popup: {
    dockEnabled: true,
    dockOptions: {
      position: "top-right",
      breakpoint: false,
    },
  },
  environment: {
    lighting: {
      waterReflectionEnabled: true
    },
    atmosphere: {
      quality: "high"
    },
    atmosphereEnabled: true,
  }
});

const elevationProfile = new ElevationProfile({
  view: view,
  unit: "imperial",
  container: epContainer,
  visibleElements: {
    sketchButton: false,
  },
});


function addButton(title: string, onclick: () => any) {
  const button = document.createElement("button");
  button.classList.add("esri-button");
  button.innerText = title;
  button.onclick = promiseUtils.debounce(onclick);

  view.ui.add(button, "bottom-left");
}

const sliceWidget = new Slice({
  view: view,
  container: "sliceContainer",
});



map.loadAll().then(async () => {
  const hike = view.map.allLayers.find((l) => l.title === "hike");
  const transportation = view.map.allLayers.find(
    (l) => l.title === "transportation"
  );
  const lakes = view.map.allLayers.find(
    (l) => l.title === "lakes"
  ) as FeatureLayer;
  const waterRenderer = lakes.renderer;

  const tunnels = view.map.allLayers.find(
    (l) => l.title === "tunnels"
  ) as FeatureLayer;
  const uvRenderer = (tunnels.renderer as UniqueValueRenderer).clone();
  uvRenderer.uniqueValueInfos
    .filter(uvi => uvi.value === "tunnel")
    .forEach(uvi => {
      const pathSymbol = (uvi.symbol as LineSymbol3D).symbolLayers.getItemAt(0) as PathSymbol3DLayer;
      pathSymbol.profile = "quad";
      pathSymbol.height = pathSymbol.width;
    });
  tunnels.renderer = uvRenderer.clone();


  const slides = map.presentation.slides;

  const goToSlide = async (
    title: string,
    speedFactor = 0.5,
    cameraOnly = false
  ) => {
    const slide = slides.find((slide) => slide.title.text === title);
    if (!slide) {
      throw Error("No slide found with title " + title);
    }
    await view.goTo(slide.viewpoint, { speedFactor });
    // if (!cameraOnly) {
    //   await slide.applyTo(view, { animate: false })
    // }
  };

  const groundLayers = view.map.ground.layers.toArray();

  function startSlice(z = 1600) {
    const shape = new SlicePlane({
      position: {
        spatialReference: SpatialReference.WebMercator,
        x: 1003071.9348183294,
        y: 5917903.287027242,
        z,
      },
      heading: 161,
      tilt: 0,
      width: 1867.352189114555,
      height: 1667.9582919794923,
    });
    sliceWidget.viewModel.shape = shape;
    sliceWidget.viewModel.excludedLayers.removeAll();
    sliceWidget.viewModel.excludedLayers.addMany(view.map.layers);
    sliceWidget.viewModel.start();
  }

  function reset() {
    epContainer.classList.add("hide");
    elevationProfile.viewModel.clear();
    sliceWidget.viewModel.clear();
    if (!view.map.ground.layers.length) {
      view.map.ground.layers.addMany(groundLayers);
    }
    view.map.ground.layers.forEach(l => l.visible = true);

    lakes.renderer = waterRenderer;
    lakes.labelsVisible = true;
    lakes.elevationInfo.offset = 0;

    hike.visible = true;
    transportation.visible = true;

    view.map.ground.opacity = 1;
  }

  addButton("Hike", async () => {

    await goToSlide("Trail EP", 1, true);
    reset();

    epContainer.classList.remove("hide");
    elevationProfile.profiles = [
      // displays elevation values from Map.ground
      new ElevationProfileLineGround({
        visible: true,
      }),
    ] as any;

    console.log("Showing Hike");
  });

  addButton("Slice", async () => {

    await goToSlide("Start Slice");
    reset();

    // view.environment.lighting!.waterReflectionEnabled = false;

    lakes.definitionExpression =
      "Name in ('Limmern lake', 'Upper lake', 'Mutt lake')";

    startSlice();

    window["slice"] = sliceWidget.viewModel;

    console.log("Showing Slice");
  });

  addButton("Underground", async () => {

    await goToSlide("Underground", 0.8);

    await new Promise((resolve) => {
      setTimeout(resolve, 200);
    });

    reset();

    view.map.ground.layers.removeAll();
    view.map.ground.opacity = 0;

    lakes.renderer = extrudedWaterRenderer;
    lakes.elevationInfo.offset = -90;
    lakes.labelsVisible = false;

    lakes.definitionExpression = "Name in ('Limmern lake', 'Mutt lake')";

    hike.visible = false;
    transportation.visible = false;

    setTimeout(() => {
      sliceWidget.viewModel.clear();
    }, 1000);

    console.log("Showing Underground");
  });

  addButton("Utilities", async () => {

    await goToSlide("Pipe EP", 1);

    reset();
    startSlice(800);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    view.map.ground.opacity = 1;

    // displays elevation values from the input line graphic
    elevationProfile.profiles = new Collection([
      new ElevationProfileLineGround({
        visible: true,
      }),
      new ElevationProfileLineInput({
        visible: true,
      }),
    ]);

    epContainer.classList.remove("hide");

    const query = tunnels.createQuery();
    query.returnGeometry = true;
    query.returnZ = true;
    query.objectIds = [4];
    const features = await tunnels.queryFeatures(query);

    elevationProfile.input = features.features[0];

    console.log("Showing Utilities");
  });
});