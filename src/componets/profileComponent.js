import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'
import '../profileComponent.css';

// const reactImg = 'https://react.semantic-ui.com';
const reactImg = '';
// const paragraph = <ImageComponent src={reactImg+'/images/wireframe/short-paragraph.png'} />
const paragraph = <ImageComponent src={reactImg+'/img/short-paragraph.png'} />

const ProfileComponent = () => (
    <div className="profileComponent ui contrainer">
    <Item.Group link unstackable>
    <Item>
      <Item.Image size='tiny' src={reactImg+'/img/veronika.jpg'} />

      <Item.Content>
        <Item.Header>Marisa Kataki</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    </div>
)

export default ProfileComponent;