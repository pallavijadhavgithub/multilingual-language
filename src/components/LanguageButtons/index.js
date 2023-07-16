import {Button, ListItem} from './styledComponents'

const LanguageButtons = props => {
  const {languageList, onButtonClick, isActive} = props
  const {buttonText, id} = languageList

  const onAddingLanguage = () => {
    onButtonClick(id)
  }

  return (
    <ListItem>
      <Button type="button" onClick={onAddingLanguage} isActive={isActive}>
        {buttonText}
      </Button>
    </ListItem>
  )
}
export default LanguageButtons
