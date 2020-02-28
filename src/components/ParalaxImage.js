import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from "./Image";
import me from '../img/me/me.png';

const ParallaxImage = () => (
    <Parallax className="" y={['-200px', '0px']} tagOuter="figure">
        <Image src={me} />
    </Parallax>
);

export default ParallaxImage;