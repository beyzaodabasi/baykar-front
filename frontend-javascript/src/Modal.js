const Modal = ({ setModalOn, setChoice, route, navigation }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }
    itemId="aaa"
    otherParam="bbb"
    const { itemId, otherParam } = route.params;
    return (
      <div style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div>Details Screen</div>
        <div>itemId: {JSON.stringify(itemId)}</div>
        <div>otherParam: {JSON.stringify(otherParam)}</div>
        <button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <button title="Go back" onPress={() => navigation.goBack()} />
      </div>
    );}

export default Modal