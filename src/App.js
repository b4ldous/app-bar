import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import AppBars from "./components/AppBars";


function App() {
  return (
    <>
    <CssBaseline/>
    <Box component={'div'} sx={{width: '100%'}}>

      <AppBars/>
      

    </Box>
      
     
    </>
  );
}

export default App;
