import { Form, Button, FormGroup,FormControl,} from 'react-bootstrap'
import {useState} from 'react'

const Lobby = ({joinRoom}) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();
    return <Form className='lobby'
        onSubmit ={e=>{
            e.preventDefault();
            joinRoom(user, room);
        }}>
        <FormGroup>
            <FormControl placeholder='name' onChange={e=>setUser(e.target.value)}/>
            <FormControl placeholde='room' onChange={e=>setRoom(e.target.value)}/>
        </FormGroup>
        <Button variant='succes' type='submit' disables={!user || !room}>Join</Button>
    </Form>
}

export default Lobby;