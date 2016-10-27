// react
import React from 'react'
// react search filter
import SearchInput, {createFilter} from 'react-search-input'
//materia ui
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//icons
import Linkedin from '../data/icons/linkedin-logo.svg'
import Twitter from '../data/icons/twitter.svg'
import GitHub from '../data/icons/github-logo.svg'
import maxi from '../data/images/team/maxi.jpg'
import contacts from '../data/images/background/contacts.jpg'

const KEYS_TO_FILTERS = ['name', 'partner', 'role']

const People = React.createClass({
  getInitialState () {
    return { searchTerm: '' }
  },
  searchUpdated (term) {
    this.setState({searchTerm: term})
  },
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+contacts+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    let styleSocial = {
      maxHeight: '25px',
      maxWidth: '25px',
      margin: '3px'
    }
    let contactsData = [
      {
        name: 'Prof. Dr. Massimiliano Cannata',
        role: 'Project manager',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Marcus Hoffmann',
        role: 'Communication manager',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Ing. Milan Antonovic',
        role: 'Software developer',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Mirko Cardoso',
        role: 'Software developer',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Daniele Strigaro',
        role: 'Researcher',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      }
    ]
    const filteredContacts = contactsData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div id='page-top'>
        <div style={styleCarouselItem}></div>
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Contact</h2>
          <Divider />
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          {filteredContacts.map((contact, index) => (
            <Card style={{textAlign:'left'}} key={'key-contact-card-'+index}>
              <CardHeader
                title={contact.name}
                subtitle={contact.role}
                avatar={contact.avatar}
              />
              <CardTitle title={contact.partner} subtitle={contact.address} />
              <CardText>
                {contact.description}
              </CardText>
              <CardText>
                <img role='presentation' style={styleSocial} src={Twitter} />
                <img role='presentation' style={styleSocial} src={Linkedin} />
                <img role='presentation' style={styleSocial} src={GitHub} />
              </CardText>
            </Card>
          ))}
        </div>
      </div>
    )
  }
})

export default People
