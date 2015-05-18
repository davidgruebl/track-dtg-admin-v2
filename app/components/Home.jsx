import { Reapp, React, NestedViewList, View, Button, Input } from 'reapp-kit'

class Home extends React.Component {

  getLocation () {
    window.navigator.geolocation.getCurrentPosition(function (location) {
      console.log(location)
    })
  }

  render () {
    this.getLocation()
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title='track-dtg-admin-v2'>
          <p>enter your credentials to get started</p>
          <Input Input name='name' placeholder='username' />
          <Input name='password' type='password' placeholder='password' />
          <br/>
          <Button>
            login
          </Button>
          <br/>
          <Button onTap={() => this.router().transitionTo('sub')}>
            Legal
          </Button>
        </View>
        {this.props.child()}
      </NestedViewList>
    )
  }
}

export default Reapp(Home)
