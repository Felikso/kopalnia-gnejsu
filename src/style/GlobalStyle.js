import { createGlobalStyle } from "styled-components";
/* import "./fonts.css"; */

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Ubuntu', sans-serif;

   }

   body{
        background: ${({ theme }) => theme.colors.backgroundColor};
   }


   @keyframes coockieBoxAnimation {
    from {opacity: 0;}
    to {opacity: 1;}
  }

   /* Coockies Though */

   .cookie-though {
    /* The colors used to style the modal */
    --ct-primary-400: ${({ theme }) => theme.colors.secondary};
    --ct-primary-300: ${({ theme }) => theme.colors.fourth};
    --ct-primary-200: ${({ theme }) => theme.colors.fifth};
    --ct-primary-100: ${({ theme }) => theme.colors.fifth};
  
    /* The colors used to style: customizationButton, headerDescription and cookiePolicy */
    --ct-text: ${({ theme }) => theme.colors.third};
  
    /* The colors used to style the title elements */
    --ct-subtitle: var(--ct-primary-300);
    --ct-title: var(--ct-primary-400);
  
    /* The color used to style the cookie svg */
    --ct-cookie: var(--ct-primary-400);
  
    /* The colors used to style a policy */
    --ct-policy: var(--ct-white);
    --ct-policy-enabled: var(--ct-primary-400);
    --ct-policy-text: var(--ct-primary-400);
    --ct-policy-text-enabled: var(--ct-white);
    --ct-policy-essential: var(--ct-primary-100);
  
    /* The colors used to style the sliders */
    --ct-slider-primary: var(--gray-400);
    --ct-slider-secondary: var(--gray-300);
    --ct-slider-enabled-primary: ${({ theme }) => theme.colors.second};
    --ct-slider-enabled-secondary: ${({ theme }) => theme.colors.third};
  
    /* The font color of the text inside a policy when it's enabled  */
    --ct-enabled-option-color: var(--ct-white);
  
    /* The white color */
    --ct-white: ${({ theme }) => theme.colors.primary};
  
    /* The margin underneath text elements */
    --ct-text-margin: 0.25rem;
  
    /* The padding of the modal and margin of the banner, toggleButton and customization */
    --ct-default-padding: 1rem;
  
    /* The padding/margin used to seperate the options and the permission buttons */
    --ct-seperator-padding: 0.5rem;
  
    /* The font size of the header title */
    --ct-heading-font-size: 1.25rem;
  
    /* The font size of the header sub title */
    --ct-sub-heading-font-size: 0.875rem;;
  
    /* The font size of text */
    --ct-text-font-size: 0.75rem;
  
    /* The font size of the customize button and permission button labels */
    --ct-button-font-size: 0.8125rem;
  
    /* The font used in the app */
    --ct-primary-font: 'Arial';
  
    /* The font used for header description and policy description */
    --ct-secondary-font: 'Times';
  
    /* The z-index you want the root container to have */
    --ct-z-index: 9999;
  }
`;
