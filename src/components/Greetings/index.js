import {Component} from 'react'

import {
  GreetingsContainer,
  Heading,
  ButtonContainer,
  Image,
} from './styledComponents'

import LanguageButtons from '../LanguageButtons'

class Greetings extends Component {
  state = {
    activeTabId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
  }

  onButtonClick = id => {
    this.setState({activeTabId: id})
  }

  getfilteredLanguages = () => {
    const {languageGreetingsList} = this.props

    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state

    const filteredProjects = this.getfilteredLanguages()

    return (
      <GreetingsContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonContainer>
          {languageGreetingsList.map(each => (
            <LanguageButtons
              key={each.id}
              languageList={each}
              onButtonClick={this.onButtonClick}
              isActive={activeTabId === each.id}
            />
          ))}
        </ButtonContainer>
        {filteredProjects.map(each => (
          <Image src={each.imageUrl} alt={each.imageAltText} />
        ))}
      </GreetingsContainer>
    )
  }
}

export default Greetings
