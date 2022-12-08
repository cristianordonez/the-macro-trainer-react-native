import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
   <Svg height={64} width={64} xmlns='http://www.w3.org/2000/svg' {...props}>
      <Path
         d='m57 10.99 6 10.5h-6l-6-10.5zM19 32.01l6 10.5-6 10.5H7l-6-10.5 6-10.5h6z'
         fill='#545c66'
      />
      <Path d='m31 42.51-2 3.5-4 7h-6l6-10.5z' fill='#353b44' />
      <Path d='m31 21.49-2 3.5-4 7h-6l6-10.5z' fill='#434a54' />
      <Path
         d='M45 17.99c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5H29l2-3.5-2-3.5h6z'
         fill='#ccd1d9'
      />
      <Path d='m29 39.01 2 3.5h-6l-6-10.5h6z' fill='#434a54' />
      <Path
         d='m51 10.99 6 10.5-6 10.5H39l-4-7h10c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H35l4-7h6z'
         fill='#656d78'
      />
      <Path d='m63 42.51-6 10.5h-6l6-10.5z' fill='#353b44' />
      <Path d='m63 21.49-6 10.5h-6l6-10.5z' fill='#434a54' />
      <Path
         d='M35.01 46.01H29l2-3.5-2-3.5h16c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z'
         fill='#ccd1d9'
      />
      <Path
         d='m29 17.99 2 3.5h-6l-6-10.5h6zM51 32.01l6 10.5-6 10.5H39l-3.99-7H45c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H35l4-7h6z'
         fill='#545c66'
      />
      <Path d='m57 32.01 6 10.5h-6l-6-10.5z' fill='#434a54' />
      <Path d='m19 10.99 6 10.5-6 10.5H7l-6-10.5 6-10.5h6z' fill='#656d78' />
      <Path d='M19 32.99H7a1 1 0 0 1-.868-.504l-6-10.5a.998.998 0 0 1 0-.992l6-10.5c.178-.311.51-.504.868-.504h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5a1 1 0 0 1-.868.504zm-11.42-2h10.84l5.429-9.5-5.429-9.5H7.58l-5.429 9.5z' />
      <Path d='M25 32.99H13a1 1 0 1 1 0-2h11.42l5.429-9.5-5.429-9.5H13a1 1 0 1 1 0-2h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5a1 1 0 0 1-.868.504z' />
      <Path d='M31 22.49h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zM51 32.99H39a1 1 0 0 1-.868-.504l-4.002-7.004a1 1 0 0 1 1.736-.992l3.714 6.5h10.84l5.429-9.5-5.429-9.5H39.58l-3.712 6.496a1 1 0 1 1-1.736-.992l4-7c.178-.311.51-.504.868-.504h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5a1 1 0 0 1-.868.504z' />
      <Path d='M57 32.99H45a1 1 0 1 1 0-2h11.42l5.429-9.5-5.429-9.5H45a1 1 0 1 1 0-2h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5a1 1 0 0 1-.868.504z' />
      <Path d='M63 22.49h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zM45 25.99a1 1 0 1 1 0-2c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5a1 1 0 1 1 0-2c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5z' />
      <Path d='M45 18.99H29a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM45 25.99H29a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM19 54.01H7a1 1 0 0 1-.868-.504l-6-10.5a.998.998 0 0 1 0-.992l6-10.5A1 1 0 0 1 7 31.01h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5c-.178.311-.51.504-.868.504zm-11.42-2h10.84l5.429-9.5-5.429-9.5H7.58l-5.429 9.5z' />
      <Path d='M25 54.01H13a1 1 0 1 1 0-2h11.42l5.429-9.5-5.429-9.5H13a1 1 0 1 1 0-2h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5c-.178.311-.51.504-.868.504z' />
      <Path d='M31 43.51h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zM51 54.01H39a1 1 0 0 1-.868-.504l-4.002-7.004a1 1 0 0 1 1.736-.992l3.714 6.5h10.84l5.429-9.5-5.429-9.5H39.58l-3.712 6.496a1 1 0 1 1-1.736-.992l4-7A1 1 0 0 1 39 31.01h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5c-.178.311-.51.504-.868.504z' />
      <Path d='M57 54.01H45a1 1 0 1 1 0-2h11.42l5.429-9.5-5.429-9.5H45a1 1 0 1 1 0-2h12a1 1 0 0 1 .868.504l6 10.5a.998.998 0 0 1 0 .992l-6 10.5c-.178.311-.51.504-.868.504z' />
      <Path d='M63 43.51h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zM45 47.01a1 1 0 1 1 0-2c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5a1 1 0 1 1 0-2c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5z' />
      <Path d='M45 40.01H29a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM45 47.01H29a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z' />
   </Svg>
);

export default SvgComponent;