import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background-color: rgb(255, 40, 90);
  }
`;