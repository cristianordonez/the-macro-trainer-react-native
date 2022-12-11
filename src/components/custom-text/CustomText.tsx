import { Text, useTheme } from '@rneui/themed';

interface Props {
   humanText: string;
   h0?: boolean;
   h1?: boolean;
   h2?: boolean;
   h3?: boolean;
   h4?: boolean;
   fontFamily?: 'Lato_Bold' | 'Lato_Italic' | 'Lato';
   textAlign?: 'left' | 'right' | 'center';
   opacity?: boolean;
   gap?: boolean;
   color?: 'error' | 'black' | 'primary' | 'link';
}

export const CustomText = ({
   fontFamily = 'Lato',
   humanText,
   textAlign = 'center',
   h0 = false,
   h1 = false,
   h2 = false,
   h3 = false,
   h4 = false,
   opacity = false,
   gap = false,
   color = 'black',
}: Props) => {
   const { theme } = useTheme();
   let currentColor;
   if (color === 'black') {
      currentColor = theme.colors.black;
   } else if (color === 'error') {
      currentColor = theme.colors.error;
   } else if (color === 'link') {
      currentColor = theme.colors.link;
   } else {
      currentColor = theme.colors.primary;
   }

   return (
      <Text
         style={[
            {
               textAlign,
               color: currentColor,
               fontFamily,
            },
            opacity === true ? { opacity: 0.75 } : { opacity: 1 },
            gap === true ? { paddingBottom: 10 } : { paddingBottom: 0 },
            h0 === true ? { fontSize: 24 } : null,
         ]}
         h1={h1 === true}
         h1Style={{ fontSize: 18 }}
         h2={h2 === true}
         h2Style={{ fontSize: 16 }}
         h3={h3 === true}
         h3Style={{ fontSize: 14 }}
         h4={h4 === true}
         h4Style={{ fontSize: 12 }}
      >
         {humanText}
      </Text>
   );
};
