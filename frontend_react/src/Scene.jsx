import * as THREE from "three";

import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

export default function Scene() {
  const materials = useLoader(MTLLoader, "scene.mtl");
  const obj = useLoader(OBJLoader, "scene.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.6}/>;
};