
import ContainerWidget from "components/ContainerWidget";
import { Typography, Box, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';



const TransportWidget = () =>{
    return(

        <ContainerWidget>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="1rem">
                <Typography variant="h2" fontWeight="bold">Want a Ride?</Typography>
                <Button component={Link} to="/addtransport" variant="contained" color="primary">Create Ride</Button>
            </Box>
            <Divider sx={{ backgroundColor: 'orange' }}/>
            <Box marginTop="1rem">
                {/* Render your components with data here */}
            </Box>


        </ContainerWidget>

    )
}


export default TransportWidget;