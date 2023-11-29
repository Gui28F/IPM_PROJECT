// MyShelves.jsx
import React, {useState} from "react";
import "./MyShelves.css";
import {users} from "./Data.jsx";
import {Link} from "react-router-dom";
import {Box, Button, Modal, Typography,Popover} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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

    const [userShelves, setUserShelves] = useState(users[0].shelves);
    const currentUser = users[0];
    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [editedName, setEditedName] = useState("");

    const handleOpen = () => {setOpen(true);setEmptyError("");}
    const handleClose = () => setOpen(false);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => {
        setEditOpen(false);
    }

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => {
        console.log(successDel)
        setDeleteOpen(false);
    }

    const [newShelfName, setNewShelfName] = useState("");
    const [emptyError, setEmptyError] = useState("")
    const [success, setSuccess] = useState(false);
    const [successDel, setSuccessDel] = useState(false);

    const [anchorDelete, setAnchorDel] = React.useState(null);
    const [anchorEdit, setAnchorEdit] = React.useState(null);
    const handlePopoverOpenDel= (event) => {
        setAnchorDel(event.currentTarget);
    };

    const handlePopoverCloseDel = () => {
        setAnchorDel(null);
    };

    const handlePopoverOpenEdit = (event) => {
        setAnchorEdit(event.currentTarget);
    };

    const handlePopoverCloseEdit = () => {
        setAnchorEdit(null);
    };

    const openPopupDel = Boolean(anchorDelete);
    const openPopupEdit = Boolean(anchorEdit);

    const handleSubmit = () => {
        let added = false;
        userShelves.forEach(() => {
            //Check if our shelf exists
            const existingShelf = currentUser.shelves.find(
                (shelf) => shelf.name === newShelfName
            );

            if(newShelfName == "") {
                setEmptyError("Please insert a name for your shelf")
            } else if (existingShelf) {
                setEmptyError("Shelf already exists")
            } else {
                // Shelf does not exist, create a new one and add the book
                setEmptyError("")
                const newShelfID = users[0].shelves.reduce((maxID, shelf) => Math.max(shelf.id, maxID), 0) + 1;
                const newShelf = {
                    id: newShelfID,
                    name: newShelfName,
                    books: [],
                    booksIDs: [],
                };
                console.log(users[0].shelves)
                users[0].shelves = [...users[0].shelves, newShelf];
                console.log("After")
                console.log(users[0].shelves)
                setUserShelves(users[0].shelves)
                added = true;
            }
            
        });
        if(added) {
            setSuccess(true);
            setEmptyError("")
            setTimeout(() => {
                handleClose();
                setSuccess(false);
                setNewShelfName(""); // Clear the old shelf name
            }, 1000); // 1000 milliseconds = 1 second
            setNewShelfName("");
        }
        
    };

    const handleShelfNameChange = (newName) => {
        // Update the new shelf name
        console.log(newName);
        setNewShelfName(newName);
    };
    const handleEditInput =(e)=>{
        setEditedName(e)

    }

    const handleDeleteShelf = (shelfName) => {
        // Implement logic to delete the shelf with the given ID
        users[0].shelves = currentUser.shelves.filter((shelf) => shelf.name !== shelfName);
        setUserShelves(users[0].shelves)
        
        setSuccessDel(true)
        setTimeout(() => {
            handleDeleteClose()
            setSuccessDel(false)
        }, 1000); //
    };
    const handleEditSubmit = (oldShelfName) => {
        // Implement logic to edit the name of the shelf with the given ID
        const updatedShelves = userShelves.map((shelf, index) => {
            if (shelf.name === oldShelfName) {
                if (editedName === "")
                    shelf.name = "Shelf "+ index;
                else
                    shelf.name= editedName;
                setEditedName("")
                return shelf
            } else {
                return shelf;
            }
        });
        users[0].shelves = updatedShelves;
        setUserShelves( users[0].shelves)
        setSuccess(true)
        setTimeout(() => {
            handleEditClose();
            setSuccess(false);
            setEditedName("");
            setEmptyError("");
        }, 1000); //
        // Optionally, you can also update the state or trigger a re-render
    };

    return (
        <div className="my-shelves-container">
            <h1 className="shelves-heading">My Shelves</h1>
            <div className="shelves-container">
                {userShelves.map((shelf, index) => {
                    return (
                    <div  key={index} className="shelf-indv-container">
                    <Link
                        key={shelf.id}
                        className="shelf"
                        onClick={() => handleShelfClick(shelf.id)}
                        to={`/shelves/${shelf.id}`}
                    >
                        <h3 className="shelf-name">{shelf.name}</h3>
                    </Link>
                        <div className="shelf-icon-container">
                            { shelf.name !== "Favourites"  && shelf.name !== "Bookmarked" &&
                                (
                                <>
                                <Typography
                                  aria-owns={openPopupDel ? 'mouse-over-popover' : undefined}
                                  aria-haspopup="true"
                                  className={"delete-icon"}
                                  onMouseEnter={handlePopoverOpenDel}
                                  onMouseLeave={handlePopoverCloseDel}
                                  onClick={()=> handleDeleteOpen()}
                                >
                                  <DeleteIcon/>
                                </Typography>
                                <Popover
                                  id="mouse-over-popover"
                                  sx={{
                                    pointerEvents: 'none',
                                  }}
                                  open={openPopupDel}
                                  anchorEl={anchorDelete}
                                  anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                  transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                  }}
                                  onClose={handlePopoverCloseDel}
                                  disableRestoreFocus
                                >
                                  <Typography sx={{ p: 1 }}>Delete</Typography>
                                </Popover>
                                <Typography
                                  aria-owns={openPopupDel ? 'mouse-over-popover' : undefined}
                                  aria-haspopup="true"
                                  className={"edit-icon"}
                                  onMouseEnter={handlePopoverOpenEdit}
                                  onMouseLeave={handlePopoverCloseEdit}
                                  onClick={()=> handleEditOpen()}
                                >
                                  <EditIcon />
                                </Typography>
                                <Popover
                                  id="mouse-over-popover"
                                  sx={{
                                    pointerEvents: 'none',
                                  }}
                                  open={openPopupEdit}
                                  anchorEl={anchorEdit}
                                  anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                  transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                  }}
                                  onClose={handlePopoverCloseEdit}
                                  disableRestoreFocus
                                >
                                  <Typography sx={{ p: 1 }}>Edit</Typography>
                                </Popover>
                                </>
                                
                                )}
                            <Modal
                                open={editOpen}
                                onClose={() => handleEditClose()}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box className={"modal-box"}>
                                    <Typography
                                        className="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Update Shelf
                                        <CloseIcon className="close-icon-details" onClick={handleEditClose}></CloseIcon>

                                    </Typography>

                                    <div className="indv_add_shelf_container">
                                        <input
                                            className="indv_new_shelf_input"
                                            type="text"
                                            placeholder="New Name"
                                            value={editedName}
                                            onChange={(e) =>
                                                handleEditInput(e.target.value)
                                            }
                                            onKeyDown={(e) => {
                                                // Submit when Enter key is pressed
                                                if (e.key === "Enter") {
                                                    handleEditSubmit(shelf.name);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="confirm-edit-button-container">
                                    {!success && <Button variant="contained" color="success" size="large"
                                    onClick={()=>handleEditSubmit(shelf.name)}>
                                        Save
                                    </Button>}
                                    {success && <Button variant="contained" color="success" size="large">
                                        Saved
                                    </Button>}
                                    </div>
                                    
                                </Box>
                            </Modal>
                            <Modal
                                open={deleteOpen}
                                onClose={() => handleDeleteClose()}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box className={"modal-box"}>
                                    <Typography
                                        className="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Confirm Shelf Deletion
                                        <CloseIcon className="close-icon-details" onClick={handleDeleteClose}></CloseIcon>
                                    </Typography>
                                    <div>
                                        Are you sure you want to delete this shelf?
                                    </div>
                                    <div className="modal-delete-shelf-subtitle">This action is irreversible</div>
                                    <div className="delete-modal-buttons-container">
                                        <Button variant="contained"
                                        onClick={handleDeleteClose}
                                        >Cancel</Button>
                                        {!successDel && (
                                            <Button variant="contained" color="error"
                                            onClick={()=>handleDeleteShelf(shelf.name)}
                                            >
                                                Delete
                                            </Button>
                                        )}
                                        {successDel && (
                                            <Button variant="contained" color="error">
                                            Deleted
                                            </Button>
                                        )}
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                )})}
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
                        <Box className={"modal-box"}>
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
                                    onKeyDown={(e) => {
                                        // Submit when Enter key is pressed
                                        if (e.key === "Enter") {
                                            handleSubmit();
                                        }
                                    }}
                                />
                            </div>  
                            <div className="error-msg-shelves">{emptyError}</div>
                            <div className="confirm-edit-button-container">        
                            {!success && <Button variant="contained" color="success" size="large"
                                    onClick={handleSubmit}>
                                        Save
                                    </Button>}
                                    {success && <Button variant="contained" color="success" size="large">
                                        Saved
                                    </Button>}

                                    </div>
                        </Box>
                    </Modal>
        </div>
        
        
        
    );
};


export default MyShelves;