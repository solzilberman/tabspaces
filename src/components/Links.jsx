import React from 'react'
import { Button, Chip, IconButton } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
export default function Links({ links, spaces, setSpaces, name }) {
    return (
        <div className="link-container">
            {links.map((link) => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Chip clickable color="secondary"
                            label={link} icon={<LinkIcon />} />
                        <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
                            var temp = spaces
                            var filtTemp = temp[name].filter(e => e !== link)
                            temp[name] = filtTemp;
                            localStorage.setItem('spaces', JSON.stringify(temp))
                            setSpaces(() => JSON.parse(localStorage.getItem('spaces')))
                        }} >
                            <DeleteIcon />
                        </IconButton>

                    </div>
                )
            })}
        </div>
    )
}
