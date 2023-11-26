// MyShelves.jsx
import React, { useEffect, useState } from "react";
import "./MyShelves.css";
import { users } from "./Data.jsx";
import { Link } from "react-router-dom";
import { Box, Checkbox, Modal, Rating, Typography, Popover, Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const MyShelves = () => {

    const handleShelfClick = (id) => {
        console.log(`Shelf ${id} clicked`);
    };

    const theme = createTheme({
        palette: {
            purple: {
            main: '#2F334B',
            light: '#AFA2FF',
            dark: '#101119',
            contrastText: '#ffffff',
            },
        },
        });

    const userShelves = users[0].shelves;
    const currentUser = users[0];
    const [selectedShelves, setSelectedShelves] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newShelfName, setNewShelfName] = useState("");
    const [customTicked, setCustomTicked] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        let added = false;
        selectedShelves.forEach((selectedShelf) => {
                
            console.log(selectedShelf);
            const existingShelf = currentUser.shelves.find(
                (shelf) => shelf.name === selectedShelf
            );

            if (existingShelf) {
                //alert(`Shelf '${selectedShelf}' already exists!`);
            } 

            else {
                console.log("entrei aquii")
                // Shelf does not exist, create a new one and add the book
                const newShelfID = users[0].shelves.reduce((maxID, shelf) => Math.max(shelf.id, maxID), 0) + 1;
                const newShelf = {
                    id: newShelfID,
                    name: selectedShelf,
                    books: [],
                    booksIDs: [],
                };
                users[0].shelves = [...users[0].shelves, newShelf];
                added = true;
            }
            
        });

        if(!added) {
            alert(`Shelf already exists!`);
        }

        setSuccess(true);
    
        setTimeout(() => {
            handleClose();
            setSuccess(false);
            setNewShelfName(""); // Clear the old shelf name
        }, 1000); // 1000 milliseconds = 1 second
        setNewShelfName("");
        
    };

    const handleShelfNameChange = (newName) => {
        // Update the customTicked state based on whether the shelf name is not empty
        setCustomTicked(newName !== "");

        // Update the selectedShelves state with only the latest value
        setSelectedShelves((prevSelected) => {
            // Check if the new name already exists in the selected shelves
            if (prevSelected.includes(newName)) {
                // If it does, return the array unchanged
                return prevSelected;
            }

            // Filter out only the exact match of the new name
            const filteredShelves = prevSelected.filter((shelf) => shelf !== newShelfName);

            // Add the new name to the filtered shelves only if it does not already exist
            if (!filteredShelves.includes(newName)) {
                return [...filteredShelves, newName];
            }

            // If the new name already exists, return the filtered shelves unchanged
            return filteredShelves;
        });

        // Update the new shelf name
        console.log(newName);
        setNewShelfName(newName);
    };

    const handleShelfToggle = (shelf) => {
        setSelectedShelves((prevSelected) => {
            if (prevSelected.includes(shelf)) {
                return prevSelected.filter((selected) => selected !== shelf);
            } else {
                return [...prevSelected, shelf];
            }
        });
    };

    return (
        <div className="my-shelves-container">
            <h1 className="shelves-heading">My Shelves</h1>
            <div className="shelves-container">
                {userShelves.map((shelf) => (
                    <div className="shelf-indv-container">
                    <Link
                        key={shelf.id}
                        className="shelf"
                        onClick={() => handleShelfClick(shelf.id)}
                        to={`/shelves/${shelf.id}`}
                    >
                        <h3 className="shelf-name">{shelf.name}</h3>
                    </Link>
                    </div>
                ))}
            </div>

            <div className="indv_add_to_shelf">
                        <Button  theme={theme} onClick={handleOpen} variant="contained" color="purple"  size="large" startIcon={<AddIcon/>}
                        style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                            Add New Shelf
                        </Button>
            </div>
            <Modal
                        open={open}
                        onClose={() => handleClose()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box closeButton className={"modal-box"}>
                            <Typography
                                className="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Shelves
                                <CloseIcon className="close-icon-details" onClick={handleClose}></CloseIcon>

                            </Typography>

                            <div className="indv_add_shelf_container">
                                <input
                                    className="indv_new_shelf_input"
                                    type="text"
                                    placeholder="New Shelf"
                                    value={newShelfName}
                                    onChange={(e) =>
                                        handleShelfNameChange(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                className={`indv_submit_button${success ? "_success" : ""
                                    }`}
                                onClick={handleSubmit}
                            >
                                {success ? "Saved" : "Save"}
                            </button>
                        </Box>
                    </Modal>
        </div>
        
        
        
    );
};


export default MyShelves;