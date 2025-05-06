import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './iphone'
import * as THREE from "three";
import Loader from './Loader'




const ModelView = ({index, groupRef, controlRef, setRotationState, item, size, gsapType}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`absolute  w-full h-full
        ${index === 2 ? 'right-[-100%]' : ''}
    `}
    >
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls 
        makeDefault 
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
            if(controlRef.current){
                setRotationState(controlRef.current.getAzimuthalAngle())
            }
            } }
         />

        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`}>
        <Suspense fallback={<Loader />}>
        <IPhone 
        scale={index === 1 ? [15, 15, 15] : [17, 17,17]}
        item={item}
        size={size}
         />
        </Suspense>
        </group>

    </View>
  )
}

export default ModelView