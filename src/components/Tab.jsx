import React, { useState } from 'react'
import { IconButton, TextField, Modal, Button, Card } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Links from './Links'
export default function Tab({ name, setSpaces, spaces }) {
    const [open, setOpen] = useState(false);
    const [currLink, setCurrLink] = useState('')

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeTab = (name) => {
        var temp = spaces
        delete temp[name]
        localStorage.setItem('spaces', JSON.stringify(temp))
        setSpaces(() => JSON.parse(localStorage.getItem('spaces')))
    }

    const handleLink = () => {
        let temp = spaces
        temp[name].push(currLink)
        localStorage.setItem('spaces', JSON.stringify(temp))
        setSpaces(() => JSON.parse(localStorage.getItem('spaces')))
        setCurrLink("")
        handleClose()
    }

    const handleTabOpen = () => {
        let linkArr = spaces[name]
        linkArr.map(link => window.open('https://www.' + link, '_blank'))
    }




    const handleSubmit = (e) => {
        // e.preventDefault()
        // var tempArr = [];
        // if (links.length) {
        //     tempArr = JSON.parse(spaces);
        // }

        // tempArr.push(currLink)
        // localStorage.setItem(name, JSON.stringify(tempArr))
        // setLinks(() => localStorage.getItem('spaces'))
        setCurrLink("")
    }
    return (
        <Card className="tab-card">
            <div>
                <div>
                    {name}
                    <IconButton color="secondary" aria-label="add an alarm" onClick={handleTabOpen}>
                        <OpenInNewIcon />
                    </IconButton>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <IconButton color="secondary" aria-label="add an alarm" onClick={handleOpen}>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm" onClick={() => removeTab(name)}>
                        <DeleteIcon />
                    </IconButton>
                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className="add-link">
                        <div>
                            <TextField label="New TabSpace" variant="outlined" style={{ backgroundColor: 'white' }} value={currLink}
                                onInput={e => setCurrLink(e.target.value)} />
                            <div>
                                <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={() => handleLink(currLink, name)}>Add</Button>
                            </div>
                        </div>
                        <div>
                            <p style={{ margin: 'auto' }}>
                                Enter url in the
                                following format:
                            </p>
                            <h4>
                                <b>google</b>.com
                            </h4>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="">
                <Links links={spaces[name]} spaces={spaces} setSpaces={setSpaces} name={name} />
            </div>
        </Card >
    )
}
