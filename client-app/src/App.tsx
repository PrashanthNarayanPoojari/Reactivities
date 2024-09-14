
import { useEffect, useState } from 'react'
import { tests } from './demo'
import TESTItem from './TESTItem'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {
          activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.id}</List.Item >
          ))
        }
      </List>
      {
        tests.map(testInterface => (
          <TESTItem key={testInterface.name} testInterface={testInterface}></TESTItem>
        ))
      }
    </div>
  )
}

export default App
