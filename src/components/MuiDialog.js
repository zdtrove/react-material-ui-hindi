import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from '@material-ui/core'
import { useState } from 'react'

const MuiDialog = () => {
    const [showDialog, setShowDialog] = useState(false)

    const openDialog = () => {
        setShowDialog(true)
    }

    const closeDialog = () => {
        setShowDialog(false)
    }

    return (
        <>
            <Button onClick={openDialog} variant="contained">Open Dialog</Button>
            <Dialog
                open={showDialog}
                onClose={closeDialog}
                disableBackdropClick
                onEnter={() => console.log("on enter")}
                onEntering={() => console.log("on entering")}
                onEntered={() => console.log("on entered")}
            >
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel itaque corporis temporibus quod aliquam laudantium tenetur rem ipsam accusantium voluptate explicabo non repellat reiciendis, consequuntur aut mollitia nihil eligendi.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary">Agree</Button>
                    <Button variant="contained" onClick={closeDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog
