import { useTheme } from '@rneui/themed';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const strokeWidth = 3;

interface Props {
   size: number;
   color: string;
   progress: number;
   amount: number;
   metric: string;
}

export const CircularProgress = ({
   amount,
   size,
   color,
   progress,
   metric,
}: Props) => {
   const { theme } = useTheme();
   const radius = (size - strokeWidth) / 2;
   const circumference = radius * 2 * Math.PI;

   const sizeSmall = size - 10;
   const radiusSmall = (sizeSmall - strokeWidth) / 2;
   const circumferenceSmall = radiusSmall * 2 * Math.PI;

   return (
      <Svg
         width={size}
         height={size}
         style={{ alignItems: 'center', justifyContent: 'center' }}
      >
         <SvgText
            stroke={theme.colors.black}
            fill={theme.colors.black}
            fontSize='20'
            x={size / 2}
            y={size / 2}
            textAnchor='middle'
         >
            {amount}
         </SvgText>
         <SvgText
            stroke={theme.colors.black}
            fontSize='12'
            strokeWidth={0}
            fill={theme.colors.black}
            x={size / 2}
            y={size / 2 + 25}
            textAnchor='middle'
            opacity={0.7}
         >
            {metric}
         </SvgText>
         <Circle
            stroke={color}
            fill='none'
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
         />
         <Circle
            stroke={color}
            fill='none'
            strokeWidth={strokeWidth}
            cx={size / 2}
            cy={size / 2}
            r={radiusSmall}
            strokeDasharray={circumferenceSmall}
            strokeDashoffset={circumferenceSmall * progress}
         />
      </Svg>
   );
};
