import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useControls } from 'leva'

function Model(props) {
  const { nodes, materials } = useGLTF("/t_shirt.glb");

  const options = useMemo(() => {
    return {
      // visible: true,
      sameColor: true,
      sleeveColor: { value: 'white' },
      bodyColor: { value: 'white' }
    }
  }, []);

  const control = useControls('T-shirt', options);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.66, 0, -0.5]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Body_FRONT_2664}
            material-color={control.bodyColor}
            // material-visible={control.visible}
            />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Body_FRONT_2664}
            // material-color={"blue"}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Body_FRONT_2664}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.Body_FRONT_2664}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Body_FRONT_2664}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Body_FRONT_2664}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.Body_FRONT_2664}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Body_FRONT_2664}
        />
          {/* right Sleeve */}
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.Sleeves_FRONT_2669}
            // material-color={"orange"}
            />
            {/* Left Sleeve */}
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Sleeves_FRONT_2669}
            material-color={control.sameColor? control.bodyColor : control.sleeveColor}
            // material-visible={control.visible}
          />
        </group>
      </group>
    </group>
  );
}

// function Model(props) {
//   // react hook it allows u to use functionnality with in three.js for example to load in the file
//   // scene is a property in loading in the file with it we have access to the object
//   const { scene, } = useGLTF("/t_shirt.glb");
//   // console.log(useGLTF("/t_shirt.glb"));
//   // primitive have acess to the object properties so we can show a certain ogject t thre.js (EX: Canvas or statge)
//       // Change the diffuse color of the material
//     // const material = scene.children[0].material;
//     // console.log(typeof(material));
//     console.log(scene)
//     // material.color.setRGB(1, 0, 0);
//   return <primitive object={scene} {...props} />;
// }

const ShowCase3D = () => {

  
  // console.log(test);
  return (
    // dpr = device pixel ratio
    //  camera : fov =  Field of View is a camera property that determines the extent of the observable world that is seen through the camera
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      <color attach="background" args={["#565656"]}  />
      <PresentationControls
        speed={2.5}
        global
        zoom={1.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Suspense fallback={null}>
          <Stage environment={"sunset"}>
            <Model scale={0.01}></Model>
          </Stage>
        </Suspense>
      </PresentationControls>
    </Canvas>
  );
};

export default ShowCase3D;
