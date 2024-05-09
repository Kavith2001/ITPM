import React, { useState } from 'react';
import ContainerWidget from "components/ContainerWidget";
import { Typography, Box, Divider, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddTransportWidget = () => {
    const [formData, setFormData] = useState({
        rideName: '',
        startLocation: '',
        endLocation: '',
        leavingTime: '',
        name: '',
        contactNumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/transport', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success, e.g., show a success message or redirect
                console.log('Transport added successfully');
            } else {
                // Handle error response
                console.error('Failed to add transport');
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error:', error);
        }
    };

    return (
        <ContainerWidget>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="1rem">
                <Typography variant="h2" fontWeight="bold">Have Your Own Ride!</Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'orange' }}/>
            <Box marginTop="1rem">
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="rideName"
                        label="Ride Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.rideName}
                        onChange={handleChange}
                    />
                    <TextField
                        name="startLocation"
                        label="Start Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.startLocation}
                        onChange={handleChange}
                    />
                    <TextField
                        name="endLocation"
                        label="End Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.endLocation}
                        onChange={handleChange}
                    />
                    <TextField
                        name="leavingTime"
                        label="Leaving Time"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.leavingTime}
                        onChange={handleChange}
                    />
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        name="contactNumber"
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                    {/* Repeat for other fields */}
                    <Box display="flex" justifyContent="space-between" marginTop="1rem">
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                        <Button component={Link} to="/transport" variant="contained" color="secondary">Cancel</Button>
                    </Box>
                </form>
            </Box>
        </ContainerWidget>
    );
}

export default AddTransportWidget;
