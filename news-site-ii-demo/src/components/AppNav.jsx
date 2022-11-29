import sections from '../data/sections.json'
import Nav from 'react-bootstrap/Nav';

export default function AppNav() {
    return (
        <Nav>
            {sections.map(section => {
                return <Nav.Item key={section.label}>
                    <Nav.Link key={section.label} onClick={()=>alert('You have clicked '+section.label)}>{section.label}</Nav.Link>
                    </Nav.Item>
            })}
        </Nav>
        
    )
}