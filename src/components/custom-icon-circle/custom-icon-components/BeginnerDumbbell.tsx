import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
   <Svg height={64} width={64} xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
         d='M54.99 18.5c2.77 0 5 2.24 5 5v17c0 2.76-2.23 5-5 5h-3c2.77 0 5-2.24 5-5v-17c0-2.76-2.23-5-5-5z'
         fill='#ed5565'
      />
      <Path
         d='M53.99 23.5v17c0 2.76-2.23 5-5 5-2.76 0-5-2.24-5-5v-6H49c1.11-.01 1.99-.9 1.99-2v-.99c0-1.109-.891-2-2-2v-.01h-5v-6c0-2.76 2.24-5 5-5 2.77 0 5 2.24 5 5z'
         fill='#ed5565'
      />
      <Path
         d='M56.99 40.5c0 2.76-2.23 5-5 5h-3c2.77 0 5-2.24 5-5v-17c0-2.76-2.23-5-5-5h3c2.77 0 5 2.24 5 5z'
         fill='#da4453'
      />
      <Path
         d='M59.99 23.5c0-2.76-2.23-5-5-5H58c2.76 0 5 2.24 5 5v17c0 2.76-2.24 5-5 5h-3.01c2.77 0 5-2.24 5-5z'
         fill='#da4453'
      />
      <Path
         d='M11 23.5v17c0 2.76-2.24 5-5 5s-5-2.24-5-5v-8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-.99c0-1.109-.891-2-2-2H3c-1.109 0-2 .891-2 2V23.5c0-2.76 2.24-5 5-5s5 2.24 5 5z'
         fill='#ed5565'
      />
      <Path
         d='M50.99 31.51v.99c0 1.1-.88 1.99-1.99 2H20v-5h28.99v.01c1.11 0 2 .89 2 2z'
         fill='#ccd1d9'
      />
      <Path
         d='M12 18.5c2.76 0 5 2.24 5 5v17c0 2.76-2.24 5-5 5H9c2.76 0 5-2.24 5-5v-17c0-2.76-2.24-5-5-5z'
         fill='#ed5565'
      />
      <Path
         d='M14 40.5c0 2.76-2.24 5-5 5H6c2.76 0 5-2.24 5-5v-17c0-2.76-2.24-5-5-5h3c2.76 0 5 2.24 5 5z'
         fill='#da4453'
      />
      <Path
         d='M15 18.5c2.76 0 5 2.24 5 5v17c0 2.76-2.24 5-5 5h-3c2.76 0 5-2.24 5-5v-17c0-2.76-2.24-5-5-5z'
         fill='#da4453'
      />
      <Path
         d='M8 31.51v.99a2 2 0 0 1-2 2H3c1.1 0 2-.9 2-2v-.99a2 2 0 0 0-2-2h3c1.109 0 2 .89 2 2z'
         fill='#ccd1d9'
      />
      <Path
         d='M5 31.51v.99c0 1.1-.9 2-2 2a2 2 0 0 1-2-2v-.99c0-1.109.891-2 2-2a2 2 0 0 1 2 2z'
         fill='#e6e9ed'
      />
      <Path d='M11.002 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 1 1-2 0c0-3.309 2.691-6 6-6s6 2.691 6 6a1 1 0 0 1-1 1zM8.002 32.509a1 1 0 0 1-1-1 1 1 0 0 0-1-1 1 1 0 1 1 0-2c1.654 0 3 1.346 3 3a1 1 0 0 1-1 1z' />
      <Path d='M6.002 35.496a1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 1 1 2 0c0 1.654-1.346 3-3 3zM6.002 46.5c-3.309 0-6-2.691-6-6a1 1 0 1 1 2 0c0 2.206 1.794 4 4 4s4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M11.002 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM14.002 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M9.002 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M14.002 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM17.002 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M12.002 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M17.002 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM20 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M15 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M20 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM1.002 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM15 19.501H6.002a1 1 0 1 1 0-2H15a1 1 0 1 1 0 2zM15 46.5H6.002a1 1 0 1 1 0-2H15a1 1 0 1 1 0 2zM53.996 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 1 1-2 0c0-3.309 2.691-6 6-6s6 2.691 6 6a1 1 0 0 1-1 1zM48.996 46.5c-3.309 0-6-2.691-6-6a1 1 0 1 1 2 0c0 2.206 1.794 4 4 4s4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M53.996 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM56.996 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M51.996 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M56.996 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM59.996 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M54.996 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M59.996 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM63 24.501a1 1 0 0 1-1-1c0-2.206-1.794-4-4-4a1 1 0 1 1 0-2c3.309 0 6 2.691 6 6a1 1 0 0 1-1 1z' />
      <Path d='M58 46.5a1 1 0 1 1 0-2c2.206 0 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6z' />
      <Path d='M63 41.5a1 1 0 0 1-1-1V23.501a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM43.996 30.506a1 1 0 0 1-1-1v-6.005a1 1 0 1 1 2 0v6.005a1 1 0 0 1-1 1zM57.998 19.501h-9.002a1 1 0 1 1 0-2h9.002a1 1 0 1 1 0 2zM57.998 46.5h-9.002a1 1 0 1 1 0-2h9.002a1 1 0 1 1 0 2zM8.002 33.496a1 1 0 0 1-1-1v-.987a1 1 0 1 1 2 0v.987a1 1 0 0 1-1 1zM50.996 32.509a1 1 0 0 1-1-1 1 1 0 0 0-1-1 1 1 0 1 1 0-2c1.654 0 3 1.346 3 3a1 1 0 0 1-1 1z' />
      <Path d='M48.996 35.496a1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 1 1 2 0c0 1.654-1.346 3-3 3z' />
      <Path d='M50.996 33.496a1 1 0 0 1-1-1v-.987a1 1 0 1 1 2 0v.987a1 1 0 0 1-1 1zM5 32.509a1 1 0 0 1-1-1 1 1 0 0 0-2 0 1 1 0 1 1-2 0c0-1.654 1.346-3 3-3s3 1.346 3 3a1 1 0 0 1-1 1z' />
      <Path d='M3 35.496c-1.654 0-3-1.346-3-3a1 1 0 1 1 2 0 1 1 0 0 0 2 0 1 1 0 1 1 2 0c0 1.654-1.346 3-3 3z' />
      <Path d='M1 33.496a1 1 0 0 1-1-1v-.987a1 1 0 1 1 2 0v.987a1 1 0 0 1-1 1zM49.002 30.506H20a1 1 0 1 1 0-2h29.002a1 1 0 1 1 0 2zM49.002 35.501H20a1 1 0 1 1 0-2h29.002a1 1 0 1 1 0 2z' />
      <Path d='M43.996 41.5a1 1 0 0 1-1-1v-5.999a1 1 0 1 1 2 0V40.5a1 1 0 0 1-1 1zM5 33.496a1 1 0 0 1-1-1v-.987a1 1 0 1 1 2 0v.987a1 1 0 0 1-1 1z' />
      <Path d='M6.002 30.509H3a1 1 0 1 1 0-2h3.002a1 1 0 1 1 0 2zM6.002 35.496H3a1 1 0 1 1 0-2h3.002a1 1 0 1 1 0 2z' />
   </Svg>
);

export default SvgComponent;